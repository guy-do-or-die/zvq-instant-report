define('app/data/Adapter',
    [
        'app/config/Application',
        'ember',
        'epf'
    ],
    function(App, Em, Ep) {
        'use strict';
        
        App.Adapter = Ep.RestAdapter.extend({
          processData: function (data, callback, binding) {
            var smth = Em.get(this, 'serializer');
            var models = smth.deserializePayload(data);
            
            models.forEach(function (model) {
              this.willLoadModel(model);
            }, this);
            
            models.forEach(function (model) {
              this.didLoadModel(model);
              if (callback)
              callback.call(binding || this, model);
            }, this);
            
            this.materializeRelationships(models);
            return models;
          },

          didReceiveDataForFind: function(data, type) {
            var res = this._super(data, type);
            return res;
          }
        });

        return App.Adapter;
    });
