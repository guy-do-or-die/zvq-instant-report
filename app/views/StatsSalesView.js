define('app/views/StatsSalesView',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        var cp = Em.computed;

        App.StatsSalesView = Em.View.extend({
          templateName: 'stats-sales',


        });

        return App.StatsSalesView;
    });
