define('app/controllers/StatsSalesDownloadsController',
    [
        'ember',
        'app/config/Application',
        'd3',
        'app/components/StatsChartComponent'
    ],
    function(Em, App, d3) {
        'use strict';

        var cp = Em.computed;
       
        App.StatsSalesDownloadsController = Em.ObjectController.extend({
          needs: ['stats'],
          
          actions: {
            toggleBase: function(base) {
              this.set('base', base); 
              App.__container__.lookup('controller:filter').set('base', base);
            },

            didChartClick: function(data) {
              var type = data.group;
              if (type === 'sub') this.transitionToRoute('stats.sales.subscription'); 
              if (type === 'stream') this.transitionToRoute('stats.sales.advertising'); 
              if (type === 'load') this.transitionToRoute('stats.sales.downloads'); 
            } 
          },

          stats: cp.alias('controllers.stats'),

          from: cp.alias('stats.from'), 
          to: cp.alias('stats.to'),
          interval: cp.alias('stats.interval'),
          currency: cp.alias('stats.currency'),
          tmp: cp.alias('stats.tmp'),

          base: 'gross',
           
          baseChecked: Em.computed(function() {
            var checked = {};
            var _this = this;
            ['gross', 'royalty'].forEach(function(next) {
              checked[next] = _this.get('base') === next; 
            })
            return checked;
          }).property('base'), 
        
          gross: (0).toFixed(2),
          royalty: (0).toFixed(2),
          loads: 0,          
          activeUsers: 0,

          chart: Em.computed(function() {
            var statPackages = this.get('model');
            var res = [];
            
            var range = {
              from: this.get('from'),
              to: this.get('to')
            }
            
            var base = this.get('base');
            var rate = this.get('currency').rate;
            
            var gross = 0;
            var royalty = 0;
            var activeUsers = 0;
            var loads = 0;
            
            var tmp = {};
            var id = 0;

            statPackages.forEach(function(item) {
              res.push({
                id: id++,
                label: 'gross', 
                time: d3.time.format('%Y-%m-%dT%H:%M:%S.%LZ').parse(item.get('date').toISOString()),
                value: item.get('gross') * rate
              });
              
              res.push({
                id: id++,
                label: 'royalty',
                time: d3.time.format('%Y-%m-%dT%H:%M:%S.%LZ').parse(item.get('date').toISOString()),
                value: item.get('royalty') * rate
              });
              
              var d = moment(item.get('date')).format('DD.MM.YYYY'); 
              
              tmp[d] = {
                gross: item.get('gross') * rate,
                royalty: item.get('gross') * rate
              };

              gross += item.get('gross') * rate;
              royalty += item.get('royalty') * rate;
              activeUsers += item.get('activenum');
              loads += item.get('loadsnum');
            });
            
            this.set('gross', (gross).toFixed(2));
            this.set('royalty', (royalty).toFixed(2));
            this.set('activeUsers', activeUsers);
            this.set('loads', loads);

            this.set('tmp', tmp);

            if (res.length === 0) {
              return {
                id: 1,
                label: '',
                time: d3.time.format('%Y-%m-%dT%H:%M:%S.%LZ').parse(this.get('from'))
              }
            }

            return res; 
          }).property('model', 'base', 'currency')
        });

        
        App.SalesDownloadsChart = App.StatsChartComponent.extend({
          onClick: function(evt) {
            var target = evt.target;
            var data = target.__data__;
            
            if (data !== undefined) this.sendAction('action', data);
          }.on('click'), 

        });

        Em.Handlebars.helper('sales-downloads-chart', App.SalesDownloadsChart);

        return App.StatsSalesDownloadsController;
    }
);
