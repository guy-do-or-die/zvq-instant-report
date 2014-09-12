define('app/controllers/StatsServiceController',
    [
        'ember',
        'app/config/Application',
        'd3',
        'app/components/StatsChartComponent'
    ],
    function(Em, App, d3) {
        'use strict';

        var cp = Em.computed;
       
        App.StatsServiceController = Em.ObjectController.extend({
          needs: ['stats'],
          
          actions: {
            didChartClick: function(data) {
              var type = data.group;
            } 
          },

          stats: cp.alias('controllers.stats'),

          from: cp.alias('stats.from'), 
          to: cp.alias('stats.to'),
          interval: cp.alias('stats.interval'),
          tmp: cp.alias('stats.tmp'),

          stream: 0,
          load: 0,
         
          selectedStreamType: null,
          selectedLoadType: null,

          chart: Em.computed(function() {
            var statPackages = this.get('model');
            var res = [];
            
            var range = {
              from: this.get('from'),
              to: this.get('to')
            }
            
            var stream = 0;
            var load = 0;

            var tmp = {};
            var id = 0;

            statPackages.forEach(function(item) {
              if (item.get('stat_type') === 'stream') res.push({
                id: id++,
                label: 'stream',
                time: d3.time.format('%Y-%m-%dT%H:%M:%S.%LZ').parse(item.get('date').toISOString()),
                value: item.get('streamsnum')
              });
              
              if (item.get('stat_type') === 'load') res.push({
                id: id++,
                label: 'load',
                time: d3.time.format('%Y-%m-%dT%H:%M:%S.%LZ').parse(item.get('date').toISOString()),
                value: item.get('loadsnum')
              });

              var d = moment(item.get('date')).format('DD.MM.YYYY'); 
              
              if (tmp.hasOwnProperty(d)) {
                tmp[d].stream += item.get('streamsnum'),
                tmp[d].load += item.get('loadsnum')
              } else {
                tmp[d] = {
                  'stream': item.get('streamsnum'),
                  'load': item.get('loadsnum')
                };
              }
              
              stream += item.get('streamsnum');
              load += item.get('loadsnum');
            });
            
            this.set('stream', stream);
            this.set('load', load);

            this.set('tmp', tmp);

            if (res.length === 0) {
              return {
                id: 1,
                label: '',
                time: d3.time.format('%Y-%m-%dT%H:%M:%S.%LZ').parse(this.get('from'))
              }
            }

            return res; 
          }).property('model')
        });
        
        App.streamTypeController = Ember.ArrayController.create({
          content: [
            {id: 1, name: 'Total'},
            {id: 2, name: 'Ad-supported'},
            {id: 3, name: 'Subscribed'},
          ]    
        });

        App.loadTypeController = Ember.ArrayController.create({
          content: [
            {id: 1, name: 'Total'},
            {id: 2, name: 'Paid-for'},
            {id: 3, name: 'Subscribed'},
          ]    
        });
        
        App.ServiceChart = App.StatsChartComponent.extend({
          onClick: function(evt) {
            var target = evt.target;
            var data = target.__data__;
            
            if (data !== undefined) this.sendAction('action', data);
          }.on('click'), 

        });

        Em.Handlebars.helper('service-chart', App.ServiceChart);

        return App.StatsServiceController;
    }
);
