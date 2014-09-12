define('app/controllers/MenuController',
    [
        'ember',
        'app/config/Application',
        'app/config/Menu'
    ],
    function(Em, App, Menu) {
        'use strict';

        App.MenuController = Em.Controller.extend({
            init: function() {
              this.update(); 
            },

            items: Menu['index'].items, 
            titles: Menu['index'].titles,

            update: function() {
              //var path = App.get('currentPath');
              var routeInfo = App.get('Router.router.currentHandlerInfos');
              var path = routeInfo[routeInfo.length - 1].name;
              this.set('items', Menu[path].items);
              this.set('titles', Menu[path].titles);
            }.observes('App.currentPath')
        });

        return App.MenuController;
    });
