define('app/views/StatsUserAdvertisingView',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.StatsUserAdvertisingView = Em.View.extend({
          templateName: 'stats-user-advertising'
        });

        return App.StatsUserAdvertisingView;
    });
