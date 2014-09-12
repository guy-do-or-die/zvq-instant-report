define('app/controllers',
    [
        'app/controllers/ApplicationController',
        'app/controllers/AuthController',
        'app/controllers/MenuController',
        'app/controllers/FilterController',
        'app/controllers/StatsController',
        'app/controllers/StatsSalesController',
        'app/controllers/StatsSalesSubscriptionController',
        'app/controllers/StatsSalesAdvertisingController',
        'app/controllers/StatsSalesDownloadsController',
        'app/controllers/StatsServiceController',
        'app/controllers/StatsServiceSubscriptionController',
        'app/controllers/StatsServiceAdvertisingController',
        'app/controllers/StatsServiceDownloadsController',
        'app/controllers/StatsUserController',        
        'app/controllers/StatsUserSubscriptionController',        
        'app/controllers/StatsUserAdvertisingController',
        'app/controllers/StatsUserDownloadsController',
        'app/controllers/StatsTableController',
        'app/controllers/DashboardController',
        'app/controllers/ContractsIndexController',
        'app/controllers/ContractsNewController'
    ],
    function() {
        'use strict';

        return true;
    });
