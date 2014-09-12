define('app/models/StatPackage',
    [
        'ember',
        'epf',
        'app/config/Application'
    ],
    function(Em, Ep, App) {
        "use strict";

        App.StatPackage = Ep.Model.extend({
            stat_type: Ep.attr('string'),
            date: Ep.attr('date'),
            gross: Ep.attr('number'),
            net: Ep.attr('number'),
            royalty: Ep.attr('number'),
            subsnum: Ep.attr('number'), //subscribes number
            streamsnum: Ep.attr('number'), //streams number
            tstreamlen: Ep.attr('number'), //total streaming duration
            activenum: Ep.attr('number'), //number of active users
            activeusers: Ep.attr('string'),
            newnum: Ep.attr('number'), //number of new users
            engage: Ep.attr('number'), //user engagement
            loadsnum: Ep.attr('number'), //downloads number
            currency: Ep.attr('string'),
            value: Ep.attr('string'),
            time: Ep.attr('string')
        });

        return App.StatPackage;
    });
