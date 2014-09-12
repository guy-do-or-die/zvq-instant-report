define('app/views/StatsSalesSubscriptionView',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.StatsSalesSubscriptionView = Em.View.extend({
          templateName: 'stats-sales-subscription'
        });

        return App.StatsSalesSubscriptionView;
    });
