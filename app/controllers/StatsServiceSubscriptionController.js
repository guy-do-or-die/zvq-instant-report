define('app/controllers/StatsServiceSubscriptionController',
    [
        'ember',
        'app/config/Application',
        'd3',
        'app/components/StatsChartComponent'
    ],
    function(Em, App, d3) {
        'use strict';

        var cp = Em.computed;
       
        App.StatsServiceSubscriptionController = Em.ObjectController.extend({
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

          sub: 0,
          stream: 0,
          streamlen: 0,
          load: 0,
          royalty: (0).toFixed(2),
         
          chart: Em.computed(function() {
            var statPackages = this.get('model');
            var res = [];
            
            var range = {
              from: this.get('from'),
              to: this.get('to')
            }
            
            var tmp = {};
            var id = 0;
            var sub = 0;
            var stream = 0;
            var streamlen = 0;
            var load = 0;
            var royalty = 0;

            statPackages.forEach(function(item) {
              if (item.get('stat_type') === 'sub') { 
                res.push({
                  id: id++,
                  label: 'sub',
                  time: d3.time.format('%Y-%m-%dT%H:%M:%S.%LZ').parse(item.get('date').toISOString()),
                  value: item.get('subsnum')
                });
                
                sub += item.get('subsnum');
                royalty += item.get('royalty');
                
                var d = moment(item.get('date')).format('DD.MM.YYYY'); 
   
                if (tmp.hasOwnProperty(d)) {
                  tmp[d].sub += item.get('subsnum');
                } else {
                  tmp[d] = { sub: item.get('subsnum') };
                };
              
              };

              if (item.get('stat_type') === 'stream') {
                stream += item.get('streamsnum');
                streamlen += item.get('tstreamlen');
              }

              if (item.get('stat_type') === 'load') {
                load += item.get('loadsnum');
              }
            });
            
            this.set('sub', sub);
            this.set('stream', stream);
            this.set('streamlen', ~~(streamlen / 60));
            this.set('load', load);
            this.set('royalty', (royalty).toFixed(2));

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
        
        App.ServiceSubscriptionChart = App.StatsChartComponent.extend({
          onClick: function(evt) {
            var target = evt.target;
            var data = target.__data__;
            
            if (data !== undefined) this.sendAction('action', data);
          }.on('click'), 

        });

        Em.Handlebars.helper('service-subscription-chart', App.ServiceSubscriptionChart);

        return App.StatsServiceSubscriptionController;
    }
);
