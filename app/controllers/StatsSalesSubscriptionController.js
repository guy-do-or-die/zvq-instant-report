define('app/controllers/StatsSalesSubscriptionController',
    [
        'ember',
        'app/config/Application',
        'd3',
        'app/components/StatsChartComponent'
    ],
    function(Em, App, d3) {
        'use strict';

        var cp = Em.computed;
       
        App.StatsSalesSubscriptionController = Em.ObjectController.extend({
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
          subs: 0,
          streams: 0,
          loads: 0,
          
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
            var subs = 0;
            var streams = 0;
            var loads = 0;

            var tmp = 0;
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
                'gross': item.get('gross') * rate,
                'royalty': item.get('gross') * rate
              };

              gross += item.get('gross') * rate;
              royalty += item.get('royalty') * rate;
              subs += item.get('subsnum');
              streams += item.get('streamsnum');
              loads += item.get('loadsnum');
            });
            
            this.set('gross', (gross).toFixed(2));
            this.set('royalty', (royalty).toFixed(2));
            this.set('subs', subs);
            this.set('streams', streams);
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

        
        App.SalesSubscriptionChart = App.StatsChartComponent.extend({
          onClick: function(evt) {
            var target = evt.target;
            var data = target.__data__;
            
            if (data !== undefined) this.sendAction('action', data);
          }.on('click'), 

          showDetails: Em.computed(function(d) {
            var _this = this;
            return function(data, i, element) {
              var content, formatValue;
              d3.select(element).classed('hovered', true);
              formatValue = _this.get('formatValue');
              content = "<span class=\"tip-label\">" + moment(data.time).format('DD.MM.YYYY') + "</span>";
              content += "<span class=\"name\">" + data.group + ": </span>";
              content += "<span class=\"value\">" + (formatValue(data.value)) + "</span>";
              return _this.showTooltip(content, d3.event);
           };
          })
        
        });

        Em.Handlebars.helper('sales-subscription-chart', App.SalesSubscriptionChart);

        return App.StatsSalesSubscriptionController;
    }
);
