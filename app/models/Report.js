define('app/models/Report',
    [     
        'ember',
        'epf',
        'app/config/Application'
    ],
    function(Em, Ep, App) {
        "use strict";

        App.Report = Ep.Model.extend({
          stat_type: Ep.attr('string'),

          date: Ep.attr('string'),
          name: Ep.attr('string'),
          query: Ep.attr('string'),
          format: Ep.attr('string'),
               
          partner: Ep.belongsTo('contract')
        });

        return App.Report;
    });
