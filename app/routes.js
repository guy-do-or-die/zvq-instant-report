define('app/routes',
    [
        'app/config/Router',
        'app/routes/IndexRoute',
        'app/routes/stats/StatsRoutes',
        'app/routes/dashboard/DashboardRoutes',
        'app/routes/FaqRoute',
        'app/routes/ReportsRoute',
        'app/routes/ApplicationRoute'
    ],
    function() {
        'use strict';

        return true;
    });
