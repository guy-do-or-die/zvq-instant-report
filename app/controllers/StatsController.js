define('app/controllers/StatsController',
    [
      'ember',
      'app/config/Application',
      'jquery',
      'moment',
      'datepicker'
    ],

    function(Em, App, $, moment) {
      'use strict';

      var cp = Em.computed;

      App.StatsController = Em.Controller.extend({

          needs: ['filter'],

          _from: '01.11.2013', //default value
          _to: '31.12.2013', //default value

          from: Em.computed(function() {
            return moment(this.get('_from'), 'DD.MM.YYYY').toISOString();
          }).property('_from'),   
          
          to: Em.computed(function() {
            return moment(this.get('_to'), 'DD.MM.YYYY').toISOString();
          }).property('_to'),

          observeDates: function() {
            this.send('didChangeDates');
          }.observes('from', 'to'),
         
          currency: Em.computed(function () {
            var c = this.get('selectedCurrency');
            if (c !== null && c.name !== '') {
              return {
                name: c.name,
                rate: c.rate
              }
            } else {
              return {
                name: 'USD',
                rate: 1
              }
            }
          }).property('selectedCurrency'),

          filter: cp.alias('controllers.filter'),
          filters: cp.alias('filter.filters'),

          selectedCurrency: null,
          selectedFilter: null,
         
          interval: Em.computed(function () {
            var from = moment(this.get('_from'), 'DD.MM.YYYY');
            var to = moment(this.get('_to'), 'DD.MM.YYYY');  
            
            if (to.year() - from.year() > 0) return 'quarters';
            if (to.month() - from.month() > 0) return 'months';
            if (to.date() - from.date() > 10) return 'weeks';
            return 'days';
          }).property('from', 'to'),

          notIndex: function() {
            return App.get('currentPath') !== 'stats.index'; 
          }.property('App.currentPath'),
          
          currencyShowed: function() {
            return App.get('currentPath').indexOf('stats.sales') !== -1;          
          }.property('App.currentPath'),

          filterShowed: function() {
            return App.get('currentPath') !== 'stats.table'; 
          }.property('App.currentPath'),

          tmp: {}
      })

      App.currencyController = Ember.ArrayController.create({
        content: [
          {id: 1, name: 'USD', rate: 1},
          {id: 2, name: 'EUR', rate: 0.732},
          {id: 3, name: 'RUR', rate: 33.239},
        ]    
      });
      
      App.DateField = Ember.TextField.extend({
        didInsertElement: function() {
          var self = this;

          return this.$().datepicker({
            format: 'dd.mm.yyyy'
          }).on('changeDate', function() {
            return self.$().trigger('change');   
          });
        }
      });

      return App.StatsController;
    }
);
