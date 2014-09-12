define('app/views/StatsServiceAdvertisingView',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.StatsServiceAdvertisingView = Em.View.extend({
          templateName: 'stats-service-advertising'
        });

        return App.StatsServiceAdvertisingView;
    });
