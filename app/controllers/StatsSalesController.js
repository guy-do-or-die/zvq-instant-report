define('app/controllers/StatsSalesController',
    [
        'ember',
        'app/config/Application',
        'd3',
        'moment',
        'app/components/StatsChartComponent'
    ],
    function(Em, App, d3, moment) {
        'use strict';

        var cp = Em.computed;
       
        App.StatsSalesController = Em.ObjectController.extend({
          needs: ['stats', 'filter'],

          actions: {
            toggleBase: function(base) {
              this.set('base', base);
            },

            didChartClick: function(data) {
              var type = data.group;
              if (type === 'sub') this.transitionToRoute('stats.sales.subscription'); 
              if (type === 'stream') this.transitionToRoute('stats.sales.advertising'); 
              if (type === 'load') this.transitionToRoute('stats.sales.downloads'); 
              if (type === 'total') this.transitionToRoute('stats.sales.total'); 
            } 
          },

          stats: cp.alias('controllers.stats'),
          filter: cp.alias('controllers.filter'),

          from: cp.alias('stats.from'), 
          to: cp.alias('stats.to'),
          interval: cp.alias('stats.interval'),
          currency: cp.alias('stats.currency'),
          tmp: cp.alias('stats.tmp'),

          base: cp.alias('filter.base'),
           
          baseChecked: Em.computed(function() {
            var checked = {};
            var _this = this;
            ['gross', 'net', 'royalty'].forEach(function(next) {
              checked[next] = _this.get('base') === next; 
            })
            return checked;
          }).property('base'), 
        
          gross: (0).toFixed(2),
          
          net: Em.computed(function() {
            return (this.get('gross') * 0.8).toFixed(2);
          }).property('gross'),
          
          royalty: Em.computed(function() {
            return (this.get('gross') * 0.3).toFixed(2);
          }).property('gross'),

          
          chart: Em.computed(function() {
            var statPackages = this.get('model');
            var res = [];
            
            var range = {
              from: this.get('from'),
              to: this.get('to')
            }
            
            var base = this.get('base');
            var rate = this.get('currency').rate;

            var id = 0;
            var dates = {};
            var tmp = {};

            var gross = 0;
            var net = 0;
            var royalty = 0;

            statPackages.forEach(function(item) {
              res.push({
                id: id++,
                label: item.get('stat_type'),
                time: d3.time.format('%Y-%m-%dT%H:%M:%S.%LZ').parse(item.get('date').toISOString()),
                value: item.get(base) * rate
              });

              var d = item.get('date').toISOString();
              var d1 = moment(d).format('DD.MM.YYYY'); 
              var t = item.get('stat_type');
              var v = item.get(base) * rate;
              
              var pr = {};
              if (!tmp.hasOwnProperty(d1)) { 
                pr[t] = v; 
                tmp[d1] = pr;
              } else {
                tmp[d1][t] = v;
              };

              gross += item.get('gross') * rate;
              net += item.get('net') * rate;
              royalty += item.get('royalty') * rate;

              dates[d] === undefined ? dates[d] = v : dates[d] += v;
            });
            
            for(var date in dates) {
              res.push({
                id: id++,
                label: 'total',
                time: d3.time.format('%Y-%m-%dT%H:%M:%S.%LZ').parse(date),
                value: dates[date] 
              });  
              
              var pr = {};
              tmp[moment(date).format('DD.MM.YYYY')]['total'] = dates[date];   
            };
            
            this.set('gross', (gross).toFixed(2));
            this.set('net', (net).toFixed(2));
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
          }).property('model', 'base', 'currency')
        });

        
        App.SalesChart = App.StatsChartComponent.extend({
          onClick: function(evt) {
            var target = evt.target;
            var data = target.__data__;
            
            if (data !== undefined) this.sendAction('action', data);
          }.on('click'), 

        });

        Em.Handlebars.helper('sales-chart', App.SalesChart);

        return App.StatsSalesController;
    }
);
