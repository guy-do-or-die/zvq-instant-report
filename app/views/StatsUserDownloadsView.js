define('app/views/StatsUserDownloadsView',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.StatsUserDownloadsView = Em.View.extend({
          templateName: 'stats-user-downloads'
        });

        return App.StatsUserDownloadsView;
    });
