define('app/routes/dashboard/DashboardRoutes',
    [
        'ember',
        'app/config/Application',
        'app/routes/dashboard/DashboardRoute',
        'app/routes/dashboard/DashboardTypedRoute',
        'app/routes/dashboard/DashboardNewRoute'
    ],
    function(Em, App, DashboardRoute, DashboardTypedRoute, DashboardNewRoute) {
        'use strict';

        App.DashboardRoute = DashboardRoute;

        App.ContractsIndexRoute = DashboardTypedRoute.extend({ entity: 'contract' });
        App.ContractsNewRoute = DashboardNewRoute.extend({ entity: 'contract' });

        App.DistributorsRoute = DashboardTypedRoute.extend({ entity: 'distributor' });
        App.DistributorNewRoute = DashboardNewRoute.extend({ entity: 'distributor' });
        App.DistributorRoute = DashboardTypedRoute.extend({ entity: 'distributor' });

        App.PartyGroupsRoute = DashboardTypedRoute.extend({ entity: 'partygroup' });

        return true;
    });
