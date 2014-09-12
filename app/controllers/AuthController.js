define('app/controllers/AuthController',
    [
        'ember',
        'app/config/Application',
        'mozilla-persona'
    ],
    function(Em, App) {
        'use strict';
        var isLocal = location.port === '3001';

        if (!isLocal) {
            navigator.id.watch({
                loggedInUser: App.get('currentUser'),

                onlogin: function(assertion) {
                    $.ajax({
                        type: 'POST',
                        url: '/login',
                        data: {
                            assertion: assertion
                        },
                        success: function(res, status, xhr) {
                            App.__container__.lookup('controller:auth').set('logged', true);
                        },
                        error: function(xhr, status, err) {
                            navigator.id.logout();
                            alert("Login failure: " + err);
                        }
                    });
                },

                onlogout: function() {
                    $.ajax({
                        type: 'POST',
                        url: '/logout',
                        success: function(res, status, xhr) {
                            App.__container__.lookup('controller:auth').set('logged', false);
                        },
                        error: function(xhr, status, err) {
                            alert("Logout failure: " + err);
                        }
                    });
                }
            });
        }

        App.AuthController = Em.ObjectController.extend({

            logged: true,

            actions: {

                signIn: function() {
                    if (isLocal) {
                        this.set('logged', true);
                    } else {
                        navigator.id.request();
                    }
                },

                logout: function() {
                    if (isLocal) {
                        this.set('logged', true);
                    } else {
                        navigator.id.logout();
                    }
                }
            }
        });

        return App.AuthController;
    });
