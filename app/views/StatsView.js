define('app/views/StatsView',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.StatsView = Em.View.extend({
          templateName: 'stats'
        });

        return App.StatsView;
    });
