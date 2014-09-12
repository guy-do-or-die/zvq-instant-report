define('app/views/StatsTableView',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.StatsTableView = Em.View.extend({
          templateName: 'stats-table'
        });

        return App.StatsTableView;
    });
