define('app/views/StatsSalesDownloadsView',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.StatsSalesDownloadsView = Em.View.extend({
          templateName: 'stats-sales-downloads'
        });

        return App.StatsSalesDownloadsView;
    });
