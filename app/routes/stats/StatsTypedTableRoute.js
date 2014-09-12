define('app/routes/stats/StatsTypedTableRoute',
    [
        'ember',
        'moment'
    ],
    function(Em) {
        'use strict';

        var cp = Em.computed;

        return Em.Route.extend({

            type: null, 
            
            model: function(params) {

              if (this.get('type')) {
                  return this.session.query('statEvent', { type: this.get('type'), from: params.from, to: params.to });
              } else {
                  return this.session.query('statEvent', { from: params.from, to: params.to });
              }
            },

            setupController: function(controller, model) {
              controller.set('model', model);
            }
        });
    });
