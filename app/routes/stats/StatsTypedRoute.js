define('app/routes/stats/StatsTypedRoute',
    [
        'ember',
        'moment'
    ],
    function(Em) {
        'use strict';

           
        var cp = Em.computed;

        return Em.Route.extend({

            actions: {
              didChangeDates: function() {
                this.refresh();
              }
            },

            packageType: null,

            type: null, 
            
            from: null,

            to: null,
  
            beforeModel: function() {
              var statsController = this.controllerFor('stats');
                
              this.set('from', statsController.get('from'));
              this.set('to', statsController.get('to'));
            },

            model: function(params) {

              if (this.get('type')) {
                  return this.session.query('statPackage', { packageType: this.get('packageType'), type: this.get('type'), from: this.get('from'), to: this.get('to')  });
              } else {
                  return this.session.query('statPackage', { packageType: this.get('packageType'), from: this.get('from'), to: this.get('to') });
              }
            }

        });
    });
