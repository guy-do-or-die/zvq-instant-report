define('app/controllers/ContractsIndexController',
    [
      'ember',
      'app/config/Application',
      'jquery',
      'moment',
    ],

    function(Em, App, $, moment) {
      'use strict';

      var cp = Em.computed;

      App.ContractsIndexController = Em.Controller.extend({
        contracts: Em.computed(function() {
          return this.get('model');
        }).property('model')
      });

      return App.ContractsIndexController;
    }
);
