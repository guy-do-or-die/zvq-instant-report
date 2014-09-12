define('app/models/Distributor',
    [     
        'ember',
        'epf',
        'app/config/Application',
        'app/models/Partner'
    ],
    function(Em, Ep, App) {
        "use strict";

        App.Distributor = App.Partner.extend({
          email: Ep.attr('string')
        });

        return App.Distributor;
    });
