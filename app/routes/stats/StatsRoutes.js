define('app/routes/stats/StatsRoutes',
    [
        'ember',
        'app/config/Application',
        'app/routes/stats/StatsRoute',
        'app/routes/stats/StatsTypedRoute',
        'app/routes/stats/StatsTypedTableRoute'
    ],
    function(Em, App, StatsRoute, StatsTypedRoute, StatsTypedTableRoute) {
        'use strict';

        App.StatsRoute = StatsRoute;

        App.StatsSalesRoute = StatsTypedRoute.extend({ packageType: 'sales' });
        App.StatsSalesSubscriptionRoute = StatsTypedRoute.extend({ packageType: 'sales', type: 'sub' });
        App.StatsSalesDownloadsRoute = StatsTypedRoute.extend({ packageType: 'sales', type: 'load' });
        App.StatsSalesAdvertisingRoute = StatsTypedRoute.extend({ packageType: 'sales', type: 'stream' });
//        App.StatsTotalRoute = StatsTypedRoute.extend({ packageType: 'sales' });

        App.StatsTableRoute = StatsTypedTableRoute.extend({ type: 'load' });

        App.StatsServiceRoute = StatsTypedRoute.extend({ packageType: 'service' });
        App.StatsServiceSubscriptionRoute = StatsTypedRoute.extend({ packageType: 'service', type: 'sub' });
        App.StatsServiceDownloadsRoute = StatsTypedRoute.extend({ packageType: 'service', type: 'load' });
        App.StatsServiceAdvertisingRoute = StatsTypedRoute.extend({ packageType: 'service', type: 'stream' });

        App.StatsUserRoute = StatsTypedRoute.extend({ packageType: 'user' });
        App.StatsUserSubscriptionRoute = StatsTypedRoute.extend({ packageType: 'user', type: 'sub' });
        App.StatsUserDownloadsRoute = StatsTypedRoute.extend({ packageType: 'user', type: 'load' });
        App.StatsUserAdvertisingRoute = StatsTypedRoute.extend({ packageType: 'user', type: 'stream' });

        return true;
    });
