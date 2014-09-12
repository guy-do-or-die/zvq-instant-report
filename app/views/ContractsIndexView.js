define('app/views/ContractsIndexView',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.ContractsIndexView = Em.View.extend({
          templateName: 'contracts-index'
        });

        return App.ContractsIndexView;
    });
