define('app/views/ContractsView',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.ContractsView = Em.View.extend({
          templateName: 'contracts'
        });

        return App.ContractsView;
    });
