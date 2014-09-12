define('app/models/PartyGroup',
    [     
        'ember',
        'epf',
        'app/config/Application',
        'app/models/Partner'
    ],
    function(Em, Ep, App) {
        "use strict";

        App.PartyGroup = App.Partner.extend({
          members: Ep.hasMany('distributor')
        });

        return App.PartyGroup;
    });
