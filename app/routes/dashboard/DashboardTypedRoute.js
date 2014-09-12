define('app/routes/dashboard/DashboardTypedRoute',
    [
        'ember'
    ],
    function(Em) {
        'use strict';

        var cp = Em.computed;

        return Em.Route.extend({

            actions: {
              del: function(id) {
                this.session.deleteModel(this.get('entity'), id);
              }          
            },

            model: function(params) {

              var entity = this.get('entity');

              if (entity) {
                  return this.session.query(entity, {});
              } 
              
            },

            setupController: function(controller, model) {
              controller.set('model', model);
            }
        });
    });
