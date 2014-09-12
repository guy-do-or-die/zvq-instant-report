define('app/views/DashboardView',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.DashboardView = Em.View.extend({
          templateName: 'dashboard'
        });

        return App.DashboardView;
    });
