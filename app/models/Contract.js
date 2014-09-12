define('app/models/Contract',
    [     
        'ember',
        'epf',
        'app/config/Application'
    ],
    function(Em, Ep, App) {
        "use strict";

        App.Contract = Ep.Model.extend({
          start_date: Ep.attr('date'),
          end_date: Ep.attr('date'),

          load_pro_rata: Ep.attr('number'),
          load_mingf_track: Ep.attr('number'),
          load_mingf_release: Ep.attr('number'),

          sub_pro_rata: Ep.attr('number'),
          sub_fixed_portables: Ep.attr('number'),
          sub_fixed_non_portable: Ep.attr('number'),

          stream_pro_rata: Ep.attr('number'),
          stream_passive: Ep.attr('number'),
          stream_active: Ep.attr('number'),
          
          free_duration: Ep.attr('number'),
          
          partner: Ep.belongsTo('partner')
        });

        return App.Contract;
    });
