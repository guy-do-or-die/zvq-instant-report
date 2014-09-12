define('app/controllers/StatsUserController',
    [
        'ember',
        'app/config/Application',
        'd3',
        'app/components/StatsChartComponent'
    ],
    function(Em, App, d3) {
        'use strict';

        var cp = Em.computed;
       
        App.StatsUserController = Em.ObjectController.extend({
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
  
          activeUsers: 0,
          newUsers: 0,
          engagement: (0).toFixed(2),
          lifetime: 0,
         
          chart: Em.computed(function() {
            var statPackages = this.get('model');
            var res = [];
            
            var range = {
              from: this.get('from'),
              to: this.get('to')
            }
            
            var id = 0;

            statPackages.forEach(function(item) {
              res.push({
                id: id++,
                label: item.get('stat_type'),
                time: d3.time.format('%Y-%m-%dT%H:%M:%S.%LZ').parse(item.get('date').toISOString()),
                value: item.get('activenum')
              });
              
              res.push({
                id: id++,
                label: item.get('stat_type'),
                time: d3.time.format('%Y-%m-%dT%H:%M:%S.%LZ').parse(item.get('date').toISOString()),
                value: item.get('activenum')
              });
              
              res.push({
                id: id++,
                label: item.get('stat_type'),
                time: d3.time.format('%Y-%m-%dT%H:%M:%S.%LZ').parse(item.get('date').toISOString()),
                value: item.get('activenum')
              });
            });
            
            this.set('activeUsers', 0);
            this.set('newUsers', 0);
            this.set('engagement', 0);
            this.set('lifetime', 0);

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
        
        App.UserChart = App.StatsChartComponent.extend({
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

        Em.Handlebars.helper('user-chart', App.UserChart);

        return App.StatsUserController;
    }
);
