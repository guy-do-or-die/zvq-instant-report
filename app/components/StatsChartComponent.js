define('app/components/StatsChartComponent',
    [
      'ember',
      'app/config/Application',
      'd3',
      'ember-charts',
      'jquery',
      'moment',
    ],

    function(Em, App, d3, Charts, $, moment) {
      'use strict';

      App.StatsChartComponent = Charts.TimeSeriesComponent.extend({
        onClick: function(evt) {
          var target = evt.target;
          var data = target.__data__;
          
          if (data !== undefined) {
            this.sendAction('action', data);
          }
        }.on('click'), 

        showDetails: Em.computed(function(d) {
            var _this = this;
            return function(data, i, element) {
              var content, formatValue;
              d3.select(element).classed('hovered', true);
              formatValue = _this.get('formatValue');

              var tmp = App.__container__.lookup('controller:stats').get('tmp');

              var d = moment(data.time).format('DD.MM.YYYY');
              var t = data.group;
              var v;
              
              if (tmp[d] && tmp[d][t]) {
                v = tmp[d][t];
                if (v % 1 !== 0) {
                  v = (v).toFixed(2);
                };
              } else {
                v = 'n/a';
              };

              content = "<span class=\"tip-label\">" + d + "</span>";
              content += "<span class=\"name\">" + t + ": </span>";
              content += "<span class=\"value\">" + v + "</span>";
              return _this.showTooltip(content, d3.event);
           };
        }),

        hideDetails: Em.computed(function(d) {
         var _this = this;
          return function(data, i, element) {
            d3.select(element).classed('hovered', false);
            return _this.hideTooltip();
          };
        }),
        
        showLegendDetails: Em.computed(function() {
          var _this = this;
          return function(data, i, element) {
            var content, formatXValue, formatYValue;
             d3.select(element).classed('hovered', true);

            if (data.selector) {
              _this.get('viewport').selectAll(data.selector).classed('hovered', true);
            };
          }
        }),

        showTooltip: function(content, event) {
           var $ttid;
           $ttid = this.get('$tooltip');
           $ttid.html(content);
           $ttid.show();
           return this.updatePosition(event);
        },
        
        updateLineMarkers: function() {
          var hideDetails, lineMarkers, showDetails;
          showDetails = this.get('showDetails');
          hideDetails = this.get('hideDetails');
          lineMarkers = this.get('lineMarkers');
          
          lineMarkers.enter().append('path').on("mouseover", function(d, i) {
            return showDetails(d, i, this);
          }).on("mousemove", function(d, i) {
            var xo = $('.x.axis').offset();
            var po = $(this).offset();
            $('#v-line').css({ top: ~~po.top + 20, left: ~~po.left + 8, height: ~~xo.top - ~~po.top - 20 }).show();
            return showDetails(d, i, this);
          }).on("mouseleave", function(d, i) {
            $('#v-line').hide();
            return hideDetails(d, i, this);
          }).attr({
            "class": 'line-marker',
            fill: this.get('getLineColor'),
            d: d3.svg.symbol().size(200).type('circle')
          });
          
          lineMarkers.exit().remove();
          lineMarkers.attr({
            transform: function(d) {
              return "translate(" + d.x + "," + d.y + ")";
            }
          });
          
          return lineMarkers.style({
            'stroke-width': function(d) {
              return d3.select(d.path).attr('stroke-width');
            }
          });
        },

        didInsertElement: function() {
          this._super();
          $(document.body).append("<div id=\"v-line\" class=\"v-line\" style=\"display: none;\"></div>");
        }

      });
    
      return App.StatsChartComponent;
    }
);
