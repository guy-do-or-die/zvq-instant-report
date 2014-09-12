define('app/models/Filter',
    [
        'ember',
        'epf',
        'app/config/Application'
    ],
    function(Em, Ep, App) {
        "use strict";

        App.Filter = Ep.Model.extend({
            name: Ep.attr('string'),
            op: Ep.attr('string'),
            value: Ep.attr('string')
        });

        return App.Filter;
    });
