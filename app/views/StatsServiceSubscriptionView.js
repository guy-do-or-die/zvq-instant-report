define('app/views/StatsServiceSubscriptionView',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.StatsServiceSubscriptionView = Em.View.extend({
          templateName: 'stats-service-subscription'
        });

        return App.StatsServiceSubscriptionView;
    });
