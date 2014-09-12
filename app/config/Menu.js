define('app/config/Menu',
    [
    ],
    function() {
        'use strict';

        var Menu = {
          'index': {
            items:  [ 
              { label: 'Statistics & Analysis', route: 'stats' },
              { label: 'Reports', route: 'reports' },
              { label: 'Content managment', route: 'content' },
              { label: 'Dashboard', route: 'dashboard' },
              { label: 'FAQ', route: 'faq' },
            ],
            
            titles: [ "INgrooves" ]
          },
          
          'stats': { 
            items: [
              { label: 'Reports', route: 'reports' },
              { label: 'Content managment', route: 'content' },
              { label: 'Dashboard', route: 'dashboard' },
              { label: 'FAQ', route: 'faq' },
              { label: 'Home', route: 'index' }
            ],
            
            titles: ['Statistics & Analysis', '']
          },
          
          'stats.index': { 
            items: [
              { label: 'Reports', route: 'reports' },
              { label: 'Content managment', route: 'content' },
              { label: 'Dashboard', route: 'dashboard' },
              { label: 'FAQ', route: 'faq' },
              { label: 'Home', route: 'index' }
            ],
            
            titles: ['Statistics & Analysis', '']
          },

          'stats.sales': {
            items: [
              { label: 'Service', route: 'stats.service' },
              { label: 'User', route: 'stats.user' },
              { label: 'Back', route: 'stats'}
            ],

            titles: ['Total Sales and Royalties', 'Statistics & Analysis']
          },

          'stats.sales.subscription': {
            items: [
              { label: 'Ad-supported', route: 'stats.sales.advertising' },
              { label: 'Downloads', route: 'stats.sales.downloads' },
              { label: 'Back', route: 'stats.sales'}
            ],

            titles: ['Subscription', 'Sales & Royalties']
          },

          'stats.sales.advertising': { 
            items: [
              { label: 'Subscription', route: 'stats.sales.subscription' },
              { label: 'Downloads', route: 'stats.sales.downloads' },
              { label: 'Back', route: 'stats.sales'}
            ],

            titles: ['Advertising', 'Sales & Royalties']
          },

          'stats.sales.downloads': {
            items: [
              { label: 'Subscription', route: 'stats.sales.subscription' },
              { label: 'Ad-supported', route: 'stats.sales.advertising' },
              { label: 'Back', route: 'stats.sales'}
            ],

            titles: ['Downloads', 'Sales & Royalties']
          },

          'stats.service': {
            items: [
              { label: 'Sales & Royalties', route: 'stats.sales' },
              { label: 'User', route: 'stats.user' },
              { label: 'Back', route: 'stats'}
            ],

            titles: ['All Services', 'Statistics & Analysis']
          },

          'stats.service.subscription': {
            items: [
              { label: 'Ad-supported', route: 'stats.service.advertising' },
              { label: 'Downloads', route: 'stats.service.downloads' },
              { label: 'Back', route: 'stats.service'}
            ],

            titles: ['Subscription', 'Services']
          },
          
          'stats.service.advertising': {
            items: [
              { label: 'Subscription', route: 'stats.service.subscription' },
              { label: 'Downloads', route: 'stats.service.downloads' },
              { label: 'Back', route: 'stats.service'}
            ],

            titles: ['Advertising', 'Services']
          },

          'stats.service.downloads': {
            items: [
              { label: 'Subscription', route: 'stats.service.subscription' },
              { label: 'Ad-supported', route: 'stats.service.advertising' },
              { label: 'Back', route: 'stats.service'}
            ],

            titles: ['Downloads', 'Services']
          },

          'stats.user': {
            items: [
              { label: 'Sales & Royalties', route: 'stats.sales' },
              { label: 'Service', route: 'stats.service' },
              { label: 'Back', route: 'stats'}
            ],

            titles: ['User', 'Statistics & Analysis']
          },

          'stats.user.subscription': {
            items: [
              { label: 'Ad-supported', route: 'stats.user.advertising' },
              { label: 'Downloads', route: 'stats.user.downloads' },
              { label: 'Back', route: 'stats.user'}
            ],

            titles: ['Subscription', 'User']
          },
          
          'stats.user.advertising': { 
            items: [
              { label: 'Subscription', route: 'stats.user.subscription' },
              { label: 'Downloads', route: 'stats.user.downloads' },
              { label: 'Back', route: 'stats.user'}
            ],

            titles: ['Advertising', 'User']
          },

          'stats.user.downloads': {
            items: [
              { label: 'Subscription', route: 'stats.user.subscription' },
              { label: 'Ad-supported', route: 'stats.user.advertising' },
              { label: 'Back', route: 'stats.user'}
            ],

            titles: ['Downloads', 'User']
          },

          'reports': { 
            items: [
              { label: 'Statistics & Analysis', route: 'stats' },
              { label: 'Content managment', route: 'content' },
              { label: 'Dashboard', route: 'dashboard' },
              { label: 'FAQ', route: 'faq' },
              { label: 'Home', route: 'index' }
            ],

            titles: ['Reports', '']
          },
          
          'content': {
            items: [
              { label: 'Statistics & Analysis', route: 'stats' },
              { label: 'Reports', route: 'reports' },
              { label: 'Dashboard', route: 'dashboard' },
              { label: 'FAQ', route: 'faq' },
              { label: 'Home', route: 'index' }
            ],

            titles: ['Content Management', '']
          },

          'dashboard': {
            items: [
              { label: 'Statistics & Analysis', route: 'stats' },
              { label: 'Reports', route: 'reports' },
              { label: 'Content managment', route: 'content' },
              { label: 'FAQ', route: 'faq' },
              { label: 'Home', route: 'index' }
            ],

            titles: ['Dashboard', '']
          },

          'dashboard.index': {
            items: [
              { label: 'Statistics & Analysis', route: 'stats' },
              { label: 'Reports', route: 'reports' },
              { label: 'Content managment', route: 'content' },
              { label: 'FAQ', route: 'faq' },
              { label: 'Home', route: 'index' }
            ],

            titles: ['Dashboard', '']
          },

          'contracts.index': {
            items: [
              { label: 'New', route: 'contracts.new' },
              { label: 'Back', route: 'dashboard' }
            ],

            titles: ['Contracts', 'Dashboard']
          },
  
          'contracts.new': {
            items: [
              { label: 'Back', route: 'contracts.index' }
            ],

            titles: ['New', 'Contracts']
          },

          'distributors.index': {
            items: [
              { label: 'New', route: 'distributors.new' },
              { label: 'Back', route: 'dashboard' }
            ],

            titles: ['Distributors', 'Dashboard']
          },
          
          'distributors.new': {
            items: [
              { label: 'Back', route: 'distributors.index' }
            ],

            titles: ['New', 'Distributors']
          },
          
          'faq': {
            items: [
              { label: 'Statistics & Analysis', route: 'stats' },
              { label: 'Reports', route: 'reports' },
              { label: 'Content managment', route: 'content' },
              { label: 'Dashboard', route: 'dashboard' },
              { label: 'Home', route: 'index' }
            ],

            titles: ['FAQ', '']
          },

          'stats.table': {
            items: [
              { label: 'Statistics & Analysis', route: 'stats' },
              { label: 'Back', route: 'stats.sales' }
            ],

            titles: ['Details', 'Sales & Royalties']
          }
        } 
  
        return Menu;
    });
