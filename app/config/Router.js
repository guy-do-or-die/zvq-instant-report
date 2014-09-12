define('app/config/Router',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.Router.map(function() {
            this.route('index', {path: '/'});
            this.route('faq', {path: '/faq'});
            this.route('reports', {path: '/reports'});
            this.route('content', {path: '/content'});
            this.resource('dashboard', {path: '/dashboard'}, function() {
              this.resource('contracts', {path: '/contracts'}, function() {
                this.resource('contract', {path: '/:id'}, function() {
                  this.route('edit'); 
                  this.route('delete');
                });
                this.route('new');
              }),
              this.resource('distributors', {path: '/distributors'}, function() {
                this.resource('distributor', {path: '/:id'}, function() {
                  this.route('edit'); 
                  this.route('delete');
                });
                this.route('new');
              });
            });

            this.resource('stats', {path: '/stats'}, function() {
              this.route('sales', {path: '/sales'});
              this.route('sales.subscription', {path: '/sales/subscription'});
              this.route('sales.advertising', {path: '/sales/advertising'});
              this.route('sales.downloads', {path: '/sales/downloads'});

              this.route('service', {path: '/service'});
              this.route('service.subscription', {path: '/service/subscription'});
              this.route('service.advertising', {path: '/service/advertising'});
              this.route('service.downloads', {path: '/service/downloads'});

              this.route('user', {path: '/user'});
              this.route('user.subscription', {path: '/user/subscription'});
              this.route('user.advertising', {path: '/user/advertising'});
              this.route('user.downloads', {path: '/user/downloads'});
              
              this.route('table', {path: '/table'});
            });
        });

        Ember.Route.reopen({
          getParentRoute: function(){
            var route = this;
            var handlerInfos = route.router.router.currentHandlerInfos;
            var parent, current;

            for (var i=0, l=handlerInfos.length; i<l; i++) {
              current = handlerInfos[i].handler;
            if((current.routeName == route.routeName)||(current.routeName.match(/./) && current.routeName.split('.')[1] == route.routeName )){
              return parent.routeName;
            }
              parent = current;
            }
          }
        })

        return true;
    });
