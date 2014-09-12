require.config({
    baseUrl: 'js/',
    waitSeconds: 30,
    paths: {
        'jquery': 'lib/jquery-2.0.3',
        'jquery-cookie': 'lib/jquery.cookie',
        'jqueryUI': 'lib/jquery-ui/jquery-ui',
        'handlebars': 'lib/handlebars-v1.3.0',
        'jquery-mousewheel': 'lib/jquery.mousewheel',
        'antiscroll': 'lib/antiscroll',
        'ember': 'lib/ember',
        'ember-data': 'lib/ember-data',
        'ember-table': 'lib/ember-table',
        'ember-charts': 'lib/ember-charts',
        'epf': 'lib/epf',
        'ember-addepar-mixins-resize-handler': 'lib/ember-addepar-mixins/resize_handler',
        'ember-addepar-mixins-style-bindings': 'lib/ember-addepar-mixins/style_bindings',
        'bootstrap': 'lib/bootstrap',
        'bs-for-ember': 'lib/ember-addons.bs_for_ember/bs-core.max',
        'datepicker': 'lib/bootstrap-datepicker',
        'moment': 'lib//moment.min',
        'underscore': 'lib/underscore-min',
        'localstorage-adapter': 'lib/localstorage-adapter',
        'underscore.string': 'lib/underscore.string.min',
        'mozilla-persona': 'lib/include',
        'd3': 'lib/d3.v3',
        'lodash': 'lib/lodash'
        },
    shim: {
        'jquery': { exports: 'jQuery'},
        'handlebars': { exports: 'Handlebars' },
        'conference': { exports: 'Conference' },
        'jqueryUI': ['jquery'],
        'ember': {
            deps: ['jquery', 'handlebars'],
            exports: 'Ember'
        },
        'ember-data': {
            deps: ['jquery', 'ember'],
            exports: 'window.DS'
        },
        'ember-table': {
            deps: ['ember', 'jqueryUI', 'jquery-mousewheel', 'antiscroll'],
            exports: 'Ember.Table'
        },
        'ember-charts': {
            deps: ['ember', 'd3', 'ember-addepar-mixins-resize-handler', 'ember-addepar-mixins-style-bindings', 'lodash'],
            exports: 'Ember.Charts'
        },
        'ember-addepar-mixins-resize-handler': { 
            deps: [ 'ember' ], 
            exports: 'Ember.AddeparMixins.ResizeHandlerMixin'
        },
        'ember-addepar-mixins-style-bindings': { 
            deps: [ 'ember' ], 
            exports: 'Ember.AddeparMixins.StyleBindingsMixin'
        },
        'datepicker': {
            deps: [ 'jquery' ],
            exports: 'Datepicker'
        },
        'bootstrap': ['jquery'],
        'antiscroll': ['jquery'],
        'bs_for_ember': {
            deps: ['bootstrap'],
            exports: 'Bootstrap'
        },
        'underscore': { exports: '_' },
        'lodash': { exports: '_' },
        'templates': ['ember'],
        'localstorage-adapter': ['ember-data', 'ember'],
        'lib/jquery.mockjax': ['jquery'],
        'mozilla-persona': { exports: 'navigator.id.watch' },
        'd3': { exports: 'd3' },
        'epf': {
            deps: ['ember'],
            exports: 'Ep'
        }
    }
});

define('main',
    [
//        'jqueryUI',
        'app/config/Application',
        'app/data/Adapter',
        'app/data/Serializer',
        'app/routes',
        'app/views',
        'app/models',
        'app/components',
        'app/controllers'
//        'modules'
    ],
    function(App) {
        'use strict';
        
        App.advanceReadiness();
    });
