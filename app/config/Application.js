define('app/config/Application',
    [
        'ember',
        'epf',
        'jquery',
        'jquery-cookie',
        'templates'
    ],
    function(Em, Ep, $) {
        'use strict';
        
        var App = window.App = Em.Application.extend({
                VERSION: '0.0.5',
                rootElement: '#app',
                LOG_STACKTRACE_ON_DEPRECATION: true,
                LOG_BINDINGS: true,
                LOG_TRANSITIONS: true,
                LOG_TRANSITIONS_INTERNAL: true,
                LOG_VIEW_LOOKUPS: true,
                LOG_ACTIVE_GENERATION: true
        }).create({});

        App.deferReadiness();

        var CSRF_HEADER = 'XSRF-TOKEN';
        var CSRF_TOKEN = 'csrfToken';

        App.initializer({
          name: 'session',

          initialize: function(container, application) {
            App.Session = Ember.Object.extend({
              init: function() {
                this._super();
                this.set(CSRF_TOKEN, $.cookie(CSRF_HEADER));
              },

              csrfTokenChanged: function() {
                $.cookie(CSRF_HEADER, this.get(CSRF_TOKEN));
              }.observes(CSRF_TOKEN),
            }).create();
          }
        });

        $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
          if ( !jqXHR.crossDomain ) { 
            jqXHR.setRequestHeader(CSRF_HEADER, App.Session.get(CSRF_TOKEN));
          };
        });

        return App;
    });
