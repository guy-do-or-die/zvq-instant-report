define('app/config/Filters',
    [
    ],
    function() {
        'use strict';

        var Filters = {
          'stats.sales': {
            gross: [
              { id: 1, name: 'Total Sales' },
              { id: 2, name: 'Total Sales per User age' },
              { id: 3, name: 'Total Sales per Active user' },
              { id: 4, name: 'Total Sales per gender of Active user' },
              { id: 5, name: 'Total Sales per country' },
              { id: 6, name: 'Total Sales per city' },
              { id: 7, name: 'Total Sales per music genre' },
              { id: 8, name: 'Total Sales per connection' },
              { id: 9, name: 'Total Sales per artist' },
              { id: 10, name: 'Total Sales per title' },
              { id: 11, name: 'Total Sales per album name' },
              { id: 12, name: 'Total Sales per label' },
              { id: 13, name: 'Total Sales per ISRC' },
              { id: 14, name: 'Total Sales per platform of Sales' },
              { id: 15, name: 'Total Sales per Top-10 Active users' },
              { id: 16, name: 'Total Sales per Top-10 artist' },
              { id: 17, name: 'Total Sales per Top-10 albums' },
              { id: 18, name: 'Total Sales per Top-10 cities' },
              { id: 19, name: 'Total Sales per Top-10 tracks' },
              { id: 20, name: 'Total Sales from Subscription' },
              { id: 21, name: 'Total Sales from Downloads' },
              { id: 22, name: 'Total Sales from Ad-supported streaming' }
            ],

            net: [
              { id: 1, name: 'Total Sales' },
              { id: 2, name: 'Total Sales per User age' },
              { id: 3, name: 'Total Sales per Active user' },
              { id: 4, name: 'Total Sales per gender of Active user' },
              { id: 5, name: 'Total Sales per country' },
              { id: 6, name: 'Total Sales per city' },
              { id: 7, name: 'Total Sales per music genre' },
              { id: 8, name: 'Total Sales per connection' },
              { id: 9, name: 'Total Sales per artist' },
              { id: 10, name: 'Total Sales per title' },
              { id: 11, name: 'Total Sales per album name' },
              { id: 12, name: 'Total Sales per label' },
              { id: 13, name: 'Total Sales per ISRC' },
              { id: 14, name: 'Total Sales per platform of Sales' },
              { id: 15, name: 'Total Sales per Top-10 Active users' },
              { id: 16, name: 'Total Sales per Top-10 artist' },
              { id: 17, name: 'Total Sales per Top-10 albums' },
              { id: 18, name: 'Total Sales per Top-10 cities' },
              { id: 19, name: 'Total Sales per Top-10 tracks' },
              { id: 20, name: 'Total Sales from Subscription' },
              { id: 21, name: 'Total Sales from Downloads' },
              { id: 22, name: 'Total Sales from Ad-supported streaming' }
            ],

            royalty: [
              { id: 1, name: 'Total Royalties' },
              { id: 2, name: 'Total Royalties per Active user' },
              { id: 5, name: 'Total Royalties per country' },
              { id: 6, name: 'Total Royalties per city' },
              { id: 7, name: 'Total Royalties per music genre' },
              { id: 9, name: 'Total Royalties per Artist' },
              { id: 10, name: 'Total Royalties per Title' },
              { id: 11, name: 'Total Royalties per Album name' },
              { id: 12, name: 'Total Royalties per Label' },
              { id: 13, name: 'Total Royalties per ISRC' },
              { id: 16, name: 'Total Royalties per TOP-10 artists' },
              { id: 17, name: 'Total Royalties per TOP-10 albums' },
              { id: 18, name: 'Total Royalties per TOP-10 cities' },
              { id: 19, name: 'Total Royalties per TOP-10 tracks' }
            ]
          },

          'stats.sales.subscription': {
            gross: [
              { id: 1, name: 'Total Sales from Subscription' },
              { id: 2, name: 'Subscription Sales per User age' },
              { id: 3, name: 'Subscription Sales per gender of Active Subscriber' },
              { id: 4, name: 'Subscription Sales per country' },
              { id: 5, name: 'Subscription Sales per city' },
              { id: 6, name: 'Subscription Sales per music genre' },
              { id: 7, name: 'Subscription Sales per connection' },
              { id: 8, name: 'Subscription Sales per artist' },
              { id: 9, name: 'Subscription Sales per title' },
              { id: 10, name: 'Subscription Sales per album name' },
              { id: 11, name: 'Subscription Sales per label' },
              { id: 12, name: 'Subscription Sales per ISRC' },
              { id: 13, name: 'Subscription Sales per platform of Subscription Sales' },
              { id: 14, name: 'Subscription Sales per Top-10 users' },
              { id: 15, name: 'Subscription Sales per Top-10 artist' },
              { id: 16, name: 'Subscription Sales per Top-10 albums' },
              { id: 17, name: 'Subscription Sales per Top-10 cities' },
              { id: 18, name: 'Subscription Sales per Top-10 tracks' },
              { id: 19, name: 'Average subscription sales per stream' },
            ],

            royalty: [
              { id: 1, name: 'Total Royalties from Subscription' },
              { id: 2, name: 'Market share in Subscription services' },
              { id: 4, name: 'Royalties from Subscription per country' },
              { id: 5, name: 'Royalties from Subscription per city' },
              { id: 6, name: 'Royalties from Subscription per music genre' },
              { id: 8, name: 'Royalties from Subscription per Artist' },
              { id: 9, name: 'Royalties from Subscription per Title' },
              { id: 10, name: 'Royalties from Subscription per Album name' },
              { id: 11, name: 'Royalties from Subscription per Label' },
              { id: 12, name: 'Royalties from Subscription per ISRC' },
              { id: 15, name: 'Royalties from Subscription per TOP-10 artists' },
              { id: 16, name: 'Royalties from Subscription per TOP-10 albums' },
              { id: 17, name: 'Royalties from Subscription per TOP-10 cities' },
              { id: 18, name: 'Royalties from Subscription per TOP-10 tracks' }
            ]
          },

          'stats.sales.advertising': { 
            gross: [
              { id: 1, name: 'Total Sales from Ad-supported streaming' },
              { id: 2, name: 'Advertising Sales per User age' },
              { id: 3, name: 'Advertising Sales per gender' },
              { id: 4, name: 'Advertising Sales per country' },
              { id: 5, name: 'Advertising Sales per city' },
              { id: 6, name: 'Advertising Sales per music genre' },
              { id: 7, name: 'Advertising Sales per connection' },
              { id: 8, name: 'Advertising Sales per artist' },
              { id: 9, name: 'Advertising Sales per title' },
              { id: 10, name: 'Advertising Sales per album name' },
              { id: 11, name: 'Advertising Sales per label' },
              { id: 12, name: 'Advertising Sales per ISRC' },
              { id: 13, name: 'Advertising Sales per platform of Advertising Sales' },
              { id: 14, name: 'Advertising Sales per Top-10 users' },
              { id: 15, name: 'Advertising Sales per Top-10 artist' },
              { id: 16, name: 'Advertising Sales per Top-10 albums' },
              { id: 17, name: 'Advertising Sales per Top-10 cities' },
              { id: 18, name: 'Advertising Sales per Top-10 tracks' },
              { id: 19, name: 'Average sales per stream' }
            ],

            royalty: [
              { id: 1, name: 'Total Royalties from Ad-supported streaming' },
              { id: 2, name: 'Market share in ad-supported streaming' },
              { id: 4, name: 'Royalties from Ad-supported streaming per country' },
              { id: 5, name: 'Royalties from Ad-supported streaming per city' },
              { id: 6, name: 'Royalties from Ad-supported streaming per music genre' },
              { id: 8, name: 'Royalties from Ad-supported streaming per Artist' },
              { id: 9, name: 'Royalties from Ad-supported streaming per Title' },
              { id: 10, name: 'Royalties from Ad-supported streaming per Album name' },
              { id: 11, name: 'Royalties from Ad-supported streaming per Label' },
              { id: 12, name: 'Royalties from Ad-supported streaming per ISRC' },
              { id: 13, name: 'Average royalty per stream' },
              { id: 15, name: 'Royalties from Ad-supported streaming per TOP-10 artists' },
              { id: 16, name: 'Royalties from Ad-supported streaming per TOP-10 albums' },
              { id: 17, name: 'Royalties from Ad-supported streaming per TOP-10 cities' },
              { id: 18, name: 'Royalties from Ad-supported streaming per TOP-10 tracks' }
            ]
          },

          'stats.sales.downloads': {
            gross: [
              { id: 1, name: 'Total Sales from Downloads' },
              { id: 2, name: 'Downloads Sales per User age' },
              { id: 3, name: 'Downloads Sales per gender' },
              { id: 4, name: 'Downloads Sales per country' },
              { id: 5, name: 'Downloads Sales per city' },
              { id: 6, name: 'Downloads Sales per music genre' },
              { id: 7, name: 'Downloads Sales per connection' },
              { id: 8, name: 'Downloads Sales per artist' },
              { id: 9, name: 'Downloads Sales per title' },
              { id: 10, name: 'Downloads Sales per album name' },
              { id: 11, name: 'Downloads Sales per label' },
              { id: 12, name: 'Downloads Sales per ISRC' },
              { id: 13, name: 'Downloads Sales per platform of Downloads Sales' },
              { id: 14, name: 'Downloads Sales per Top-10 users' },
              { id: 15, name: 'Downloads Sales per Top-10 artist' },
              { id: 16, name: 'Downloads Sales per Top-10 albums' },
              { id: 17, name: 'Downloads Sales per Top-10 cities' },
              { id: 18, name: 'Downloads Sales per Top-10 tracks' },
              { id: 19, name: 'Average sales per Download' },
              { id: 20, name: 'Downloads sales per Active user' }
            ],

            royalty: [
              { id: 1, name: 'Total Royalties from Downloads' },
              { id: 2, name: 'Average royalty per download' },
              { id: 3, name: 'Market share in Downloads' },
              { id: 4, name: 'Royalties from Downloads per country' },
              { id: 5, name: 'Royalties from Downloads per city' },
              { id: 6, name: 'Royalties from Downloads per music genre' },
              { id: 8, name: 'Royalties from Downloads per Artist' },
              { id: 9, name: 'Royalties from Downloads per Title' },
              { id: 10, name: 'Royalties from Downloads per Album name' },
              { id: 11, name: 'Royalties from Downloads per Label' },
              { id: 12, name: 'Royalties from Downloads per ISRC' },
              { id: 15, name: 'Royalties from Downloads per TOP-10 artists' },
              { id: 16, name: 'Royalties from Downloads per TOP-10 albums' },
              { id: 17, name: 'Royalties from Downloads per TOP-10 cities' },
              { id: 18, name: 'Royalties from Downloads per TOP-10 tracks' },
              { id: 20, name: 'Royalties from Downloads per Active user' }
            ]
          },

          'stats.service': {
            default: [  
              { id: 1, name: 'Total hours of audio delivered via subscription and ad-supported streaming' },
              { id: 2, name: 'Total number of downloads (via subscription and paid-for)' },
              { id: 3, name: 'Total number of subscribers' },
              { id: 4, name: 'Total number of streams listened (via subscription and ad-supported streaming)' },
              { id: 5, name: 'Average number of hours listened per Active user' },
              { id: 6, name: 'Total Sales from Subscription' },
              { id: 7, name: 'Total sales from downloads' },
              { id: 8, name: 'Total sales from ad-supported streaming' }
            ]
          },

          'stats.service.subscription': {
            default: [  
              { id: 1, name: 'Total Royalties from Subscription' },
              { id: 2, name: 'Total Sales from Subscription' },
              { id: 3, name: 'Number of streams per Subscriber' },
              { id: 4, name: 'Number of downloads per Subscriber' },
              { id: 5, name: 'Number of hours streamed per Subscriber' },
              { id: 6, name: 'Sales subscription by portable / non-portable' },
              { id: 7, name: 'Average hours delivered per Active subscriber' },
              { id: 8, name: 'Average sales per stream' },
              { id: 9, name: 'Number of active streams' },
              { id: 10, name: 'Number of passive streams' },
              { id: 11, name: 'Number of active streams per Active user' },
              { id: 12, name: 'Number of passive streams per Active user' },
              { id: 13, name: 'Subscribed streams by age' },
              { id: 14, name: 'subscribed streams by gender' },
              { id: 15, name: 'subscribed streams by country' },
              { id: 16, name: 'subscribed streams by city' },
              { id: 17, name: 'subscribed streams by music gengre' },
              { id: 18, name: 'subscribed streams by connection' },
              { id: 19, name: 'subscribed streams by artist' },
              { id: 20, name: 'subscribed streams by title' },
              { id: 21, name: 'subscribed streams by album name' },
              { id: 22, name: 'subscribed streams by label' },
              { id: 23, name: 'subscribed streams by ISRC, track' },
              { id: 24, name: 'Top-10 subscribed streams' },
              { id: 25, name: 'Market share in Subscription services' },
              { id: 26, name: 'Total number of subscribers' },
              { id: 27, name: 'Total number of streams listened via subscription' },
              { id: 28, name: 'Total hours of audio deliverd via subscription' },
              { id: 29, name: 'Total number of downloads listened via subscription' }
            ]
          },
          
          'stats.service.advertising': {
            default: [
              { id: 1, name: 'Total hours of audio delivered' },
              { id: 2, name: 'Total number of streams listened via ad-supported streaming' },
              { id: 3, name: 'Number of hours streamed per Active user' },
              { id: 4, name: 'Number of streams per Active user' },
              { id: 5, name: 'Right holder ad inventory impressions as a percentage of total ad impressions' },
              { id: 6, name: 'Number of active streams' },
              { id: 7, name: 'Number of passive streams' },
              { id: 8, name: 'Number of active streams per Active user' },
              { id: 9, name: 'Number of passive streams per Active user' },
              { id: 10, name: 'Average sales per stream' },
              { id: 11, name: 'Average royalty per stream' },
              { id: 12, name: 'Ad-supported streams by age' },
              { id: 13, name: 'Ad-supported streams by gender' },
              { id: 14, name: 'Ad-supported streams by country' },
              { id: 15, name: 'Ad-supported streams by city' },
              { id: 16, name: 'Ad-supported streams by music gengre' },
              { id: 17, name: 'Ad-supported streams by connection' },
              { id: 18, name: 'Ad-supported streams by artist' },
              { id: 19, name: 'Ad-supported streams by title' },
              { id: 20, name: 'Ad-supported streams by album name' },
              { id: 21, name: 'Ad-supported streams by label' },
              { id: 22, name: 'Ad-supported streams by ISRC, track' },
              { id: 23, name: 'Top-10 ad-supported streams' },
              { id: 24, name: 'Market share in ad-supported streaming' },
              { id: 25, name: 'Total Sales from Ad-supported streaming' }
            ]
          },

          'stats.service.downloads': {
            default: [
              { id: 1, name: 'Total number of downloads paid-for (not subscribed)' },
              { id: 2, name: 'Number of downloads per Active user' },
              { id: 3, name: 'Average sales per download' },
              { id: 4, name: 'Average royalty per download' },
              { id: 5, name: 'Number of downloads per country' },
              { id: 6, name: 'Number of downloads per city' },
              { id: 7, name: 'Number of downloads per music genre' },
              { id: 8, name: 'Number of downloads per artist' },
              { id: 9, name: 'Number of downloads per connection' },
              { id: 10, name: 'Number of downloads per title' },
              { id: 11, name: 'Number of downloads per album name' },
              { id: 12, name: 'Number of downloads per label' },
              { id: 13, name: 'Number of downloads per ISRC, track' },
              { id: 14, name: 'Top-10 downloads' },
              { id: 15, name: 'Market share in Downloads' },
              { id: 16, name: 'Total Sales from Downloads' }
            ]
          },

          'stats.user': {
            activeUsers: [
              { id: 1, name: 'Total Active users' },
              { id: 2, name: 'Total Active users by age' },
              { id: 3, name: 'Total Sales per Active user' },
              { id: 4, name: 'Total Active users by gender' },
              { id: 5, name: 'Total Active users by country' },
              { id: 6, name: 'Total Active users by city' },
              { id: 7, name: 'Total Active users by music genre' },
              { id: 8, name: 'Total Active users by connection' },
              { id: 9, name: 'Total Active users by artist' },
              { id: 10, name: 'Total Active users by title' },
              { id: 11, name: 'Total Active users by album name' },
              { id: 12, name: 'Total Active users by label' },
              { id: 13, name: 'Total Active users by ISRC, track' },
              { id: 14, name: 'Total Active users by platform of Sales' },
              { id: 15, name: 'Top-10 Active users' },
              { id: 16, name: 'Total Active users churn rate' },
              { id: 17, name: 'Lifetime of Total Active users' },
              { id: 18, name: 'Total Royalties per Active user' },
              { id: 19, name: 'Total Sales per User age' },
              { id: 20, name: 'Total Sales per gender of Active user' },
              { id: 21, name: 'Total Sales per Top-10 Active users' },
              { id: 22, name: 'Average number of hours listened per Active user' },
              { id: 23, name: 'Total number of subscribers' },
              { id: 24, name: 'Total number of active users downloading' },
              { id: 25, name: 'Total number of Active users listening free streaming' }
            ],

            newUsers: [
              { id: 1, name: 'Total New users' },
              { id: 2, name: 'Total new users by age' },
              { id: 4, name: 'Total new users by gender' },
              { id: 5, name: 'Total new users by country' },
              { id: 6, name: 'Total new users by city' },
              { id: 7, name: 'Total new users by music genre' },
              { id: 8, name: 'Total new users by connection' },
              { id: 9, name: 'Total new users by artist' },
              { id: 10, name: 'Total new users by title' },
              { id: 11, name: 'Total new users by album name' },
              { id: 12, name: 'Total new users by label' },
              { id: 13, name: 'Total new users by ISRC, track' },
              { id: 14, name: 'Total new users by platform of Sales' },
              { id: 15, name: 'Top-10 new users' }
            ]
          
          },

          'stats.user.subscription': {
            default: [
              { id: 1, name: 'Total number of subscribers' },
              { id: 2, name: 'Active subscribers by age' },
              { id: 3, name: 'Active subscribers by gender' },
              { id: 4, name: 'Active subscribers by country' },
              { id: 5, name: 'Active subscribers by city' },
              { id: 6, name: 'Active subscribers by music genre' },
              { id: 7, name: 'Active subscribers by connection' },
              { id: 8, name: 'Active subscribers by artist' },
              { id: 9, name: 'Active subscribers by title' },
              { id: 10, name: 'Active subscribers by album name' },
              { id: 11, name: 'Active subscribers by label' },
              { id: 12, name: 'Active subscribers by ISRC, track' },
              { id: 13, name: 'Top-10 Active subscribers' },
              { id: 14, name: 'Subscription Sales per User age' },
              { id: 15, name: 'Subscription Sales per gender of Active subscriber' },
              { id: 16, name: 'Subscription Sales per Top-10 users' },
              { id: 17, name: 'Number of streams per Subscriber' },
              { id: 18, name: 'Number of downloads per Subscriber' },
              { id: 19, name: 'Number of hours streamed per Subscriber' },
              { id: 20, name: 'Average hours delivered per Active user' },
              { id: 21, name: 'Number of active streams per Active user' },
              { id: 22, name: 'Number of passive streams per Active user' },
              { id: 23, name: 'Total number of subscribers' },
            ]
          },
          
          'stats.user.advertising': { 
            activeUsers: [
              { id: 1, name: 'Active users by age' },
              { id: 2, name: 'Active users by gender' },
              { id: 3, name: 'Active users by country' },
              { id: 4, name: 'Active users by city' },
              { id: 5, name: 'Active users by music genre' },
              { id: 6, name: 'Active users by connection' },
              { id: 7, name: 'Active users by artist' },
              { id: 8, name: 'Active users by title' },
              { id: 9, name: 'Active users by album name' },
              { id: 10, name: 'Active users by label' },
              { id: 11, name: 'Active users by ISRC, track' },
              { id: 12, name: 'Top-10 Active users' },
              { id: 13, name: 'Number of streams per Active user' },
              { id: 14, name: 'Number of hours streamed per Active user' },
              { id: 15, name: 'Number of active streams per Active user' },
              { id: 16, name: 'Number of passive streams per Active user' },
              { id: 17, name: 'Advertising Sales per Top-10 users' },
              { id: 18, name: 'Total number of Active users listening free streaming' }
            ],
         
            newUsers: [
              { id: 1, name: 'Total new users by age' },
              { id: 2, name: 'Total new users by gender' },
              { id: 3, name: 'Total new users by country' },
              { id: 4, name: 'Total new users by city' },
              { id: 5, name: 'Total new users by music genre' },
              { id: 6, name: 'Total new users by connection' },
              { id: 7, name: 'Total new users by artist' },
              { id: 8, name: 'Total new users by title' },
              { id: 9, name: 'Total new users by album name' },
              { id: 10, name: 'Total new users by label' },
              { id: 11, name: 'Total new users by ISRC, track' },
              { id: 12, name: 'Top-10 new users' }
            ]
          },

          'stats.user.downloads': {
            activeUsers: [
              { id: 1, name: 'Active users by age' },
              { id: 2, name: 'Active users by gender' },
              { id: 3, name: 'Active users by country' },
              { id: 4, name: 'Active users by city' },
              { id: 5, name: 'Active users by music genre' },
              { id: 6, name: 'Active users by connection' },
              { id: 7, name: 'Active users by artist' },
              { id: 8, name: 'Active users by title' },
              { id: 9, name: 'Active users by album name' },
              { id: 10, name: 'Active users by label' },
              { id: 11, name: 'Active users by ISRC, track' },
              { id: 12, name: 'Active users by platform of sales' },
              { id: 13, name: 'Top-10 Active users' },
              { id: 14, name: 'Number of downloads per Active user' },
              { id: 15, name: 'Downloads sales per Active user' },
              { id: 16, name: 'Royalties from Downloads per Active user' },
              { id: 17, name: 'Total number of active users downloading' }
            ],

            newUsers: [
              { id: 1, name: 'Total new users by age' },
              { id: 2, name: 'Total new users by gender' },
              { id: 3, name: 'Total new users by country' },
              { id: 4, name: 'Total new users by city' },
              { id: 5, name: 'Total new users by music genre' },
              { id: 6, name: 'Total new users by connection' },
              { id: 7, name: 'Total new users by artist' },
              { id: 8, name: 'Total new users by title' },
              { id: 9, name: 'Total new users by album name' },
              { id: 10, name: 'Total new users by label' },
              { id: 11, name: 'Total new users by ISRC, track' },
              { id: 12, name: 'Top-10 new users' }
            ]
          },

          'default': {
            default: []
          }

        } 
  
        return Filters;
    });
