define('app/views/StatsServiceDownloadsView',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.StatsServiceDownloadsView = Em.View.extend({
          templateName: 'stats-service-downloads'
        });

        return App.StatsServiceDownloadsView;
    });
