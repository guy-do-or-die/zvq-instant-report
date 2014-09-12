define('app/views/ContractsNewView',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.ContractsNewView = Em.View.extend({
          templateName: 'contracts-new'
        });

        return App.ContractsNewView;
    });
