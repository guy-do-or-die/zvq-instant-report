define('app/models/StatEvent',
    [     
        'ember',
        'epf',
        'app/config/Application'
    ],
    function(Em, Ep, App) {
        "use strict";

        App.StatEvent = Ep.Model.extend({
          stat_type: Ep.attr('string'),
          date: Ep.attr('date'),
          country: Ep.attr('string'),
          dchannel: Ep.attr('string'), //distribution channel
          ean: Ep.attr('string'),
          isrc: Ep.attr('string'),
          tartist: Ep.attr('string'),
          ttitle: Ep.attr('string'),
          rtitle: Ep.attr('string'),
          tnum: Ep.attr('number'), //track of bundle
          label: Ep.attr('string'),
          ctype: Ep.attr('string'), //type of connection (portable/non portable)
          gross: Ep.attr('number'),
          net: Ep.attr('number'),
          mshare: Ep.attr('number'), //market share
          royalty: Ep.attr('number'),
          currency: Ep.attr('string'),
          cid: Ep.attr('string'),
          upc: Ep.attr('string'),
          streamlen: Ep.attr('number'),
          stype: Ep.attr('string'), //passive or active stream
          userid: Ep.attr('string'),
          sconf: Ep.attr('string') //sale configuration (stream or download)
        });

        return App.StatEvent;
    });
