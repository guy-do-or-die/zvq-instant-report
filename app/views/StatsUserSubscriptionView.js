define('app/views/StatsUserSubscriptionView',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.StatsUserSubscriptionView = Em.View.extend({
          templateName: 'stats-user-subscription'
        });

        return App.StatsUserSubscriptionView;
    });
