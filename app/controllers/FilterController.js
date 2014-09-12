define('app/controllers/FilterController',
    [
        'ember',
        'app/config/Application',
        'app/config/Filters'
    ],
    function(Em, App, Filters) {
        'use strict';

        App.FilterController = Em.Controller.extend({
            init: function() {
              this.update(); 
            },

            path: 'default',
            base: 'default',

            filters: function() {
              return Filters[this.get('path')][this.get('base')];            
            }.property('path', 'base'),

            update: function() {
              var routeInfo = App.get('Router.router.currentHandlerInfos');
              
              var path = routeInfo[routeInfo.length - 1].name;
              if (Filters.hasOwnProperty(path)) {
                var filtersFor = Filters[path];
                this.set('path', path);
                this.set('base', filtersFor.hasOwnProperty('default') ? 'default' : Object.keys(filtersFor)[0]);
              } else {
                this.set('path', 'default');
                this.set('base', 'default');
              }
            }.observes('App.currentPath')
        });

        return App.FilterController;
    });
