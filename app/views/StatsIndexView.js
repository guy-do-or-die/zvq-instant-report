define('app/views/StatsIndexView',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.StatsIndexView = Em.View.extend({
          templateName: 'stats-index'
        });

        return App.StatsIndexView;
    });
