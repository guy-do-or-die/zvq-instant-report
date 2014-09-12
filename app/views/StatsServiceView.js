define('app/views/StatsServiceView',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.StatsServiceView = Em.View.extend({
          templateName: 'stats-service'
        });

        return App.StatsServiceView;
    });
