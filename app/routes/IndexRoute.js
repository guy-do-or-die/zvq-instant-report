define('app/routes/IndexRoute',
    [
        'ember',
        'app/config/Application'
    ],
    function(Em, App) {
        'use strict';

        App.IndexRoute = Em.Route.extend();

        return App.IndexRoute;
    });
