define('app/views/AuthView',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.AuthView = Em.View.extend({

            templateName: 'auth'
        });

        return App.AuthView;
    });
