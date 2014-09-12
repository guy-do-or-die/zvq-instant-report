define('app/controllers/ApplicationController',
    [
        'ember',
        'app/config/Application',
        'moment',
        'bootstrap'
    ],
    function(Em, App, moment) {
        'use strict';

        var cp = Em.computed;

        App.ApplicationController = Em.ObjectController.extend({

            needs: ['auth', 'menu'],

            auth: cp.alias('controllers.auth'),
            menu: cp.alias('controllers.menu'),

            logged: cp.alias('auth.logged'),

            fullscrean: false,

            user: null,

            titles: cp.alias('menu.titles'),

            currentTitle: function (){
              return this.get('titles')[0];
            }.property('titles'),
            
            parentTitle: function (){
              return this.get('titles')[1];
            }.property('titles'),

            currentDate: function () {
                return moment().format('LL');
            }.property(),

            currentPathDidChange: function() {
              App.set('currentPath', this.get('currentPath'));
              $('#v-line').hide();
            }.observes('currentPath')
        });

        
        return App.ApplicationController;
    });
