define('app/controllers/StatsTableController',
    [
        'ember',
        'app/config/Application',
        'ember-table'
    ],
    function(Em, App, Table) {
        'use strict';

        App.StatsTableController = Em.Controller.extend({
          numRows: 30,

          columns: Ember.computed(function() {
            var columns = [];

            ['id', 'date', 'stat_type'].forEach(function(field) {
              columns.push(Ember.Table.ColumnDefinition.create({
                headerCellName: field,
                contentPath: field
              }));
            })

            return columns;
          }),

          cnt: Ember.computed(function() {
            return this.get('model');
          }) 

        });

        return App.StatsTableController;
    });
