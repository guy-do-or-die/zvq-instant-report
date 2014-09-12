define('app/routes/dashboard/DashboardEditRoute',
    [
        'ember'
    ],
    function(Em) {
        'use strict';

        var cp = Em.computed;

        return Em.Route.extend({

            actions: {
              save: function() {
                this.session.flush();
                this.transitionTo(this.getParentRoute());
              }
            },

            model: function(params) {

              var entity = this.get('entity');

              if (entity) {
                  return this.session.create(entity);
              } 
              
            },

            setupController: function(controller, model) {
              controller.set('model', model);
            }
        });
    });
