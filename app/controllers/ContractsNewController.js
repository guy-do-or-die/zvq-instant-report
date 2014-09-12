define('app/controllers/ContractsNewController',
    [
      'ember',
      'app/config/Application',
      'jquery',
      'moment',
    ],

    function(Em, App, $, moment) {
      'use strict';

      var cp = Em.computed;

      App.ContractsNewController = Em.Controller.extend({

        contract: Em.computed(function() {
          return this.get('model');
        }).property('model')
      });

      return App.ContractsNewController;
    }
);
