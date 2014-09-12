define('app/models/Partner',
    [     
        'ember',
        'epf',
        'app/config/Application'
    ],
    function(Em, Ep, App) {
        "use strict";

        App.Partner = Ep.Model.extend({
          name: Ep.attr('string'),
        });

        return App.Partner;
    });
