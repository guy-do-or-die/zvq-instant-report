define('app/views/StatsSalesAdvertisingView',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.StatsSalesAdvertisingView = Em.View.extend({
          templateName: 'stats-sales-advertising'
        });

        return App.StatsSalesAdvertisingView;
    });
