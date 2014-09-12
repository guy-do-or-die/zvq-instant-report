define('app/views/StatsUserView',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.StatsUserView = Em.View.extend({
          templateName: 'stats-user'
        });

        return App.StatsUserView;
    });
