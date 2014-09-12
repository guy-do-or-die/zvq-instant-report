define('app/data/Serializer',
    [
        'app/config/Application',
        'ember',
        'epf'
    ],
    function(App, Em, Ep) {
        'use strict';
        
        App.Serializer = Ep.RestSerializer.extend({
          deserializePayload: function(hash, context) {
            var result = [],
                metaKey = Em.get(this, 'metaKey');

            for (var prop in hash) {
              if (!hash.hasOwnProperty(prop) ||
                  prop === metaKey) {
                continue;
              }

              var type = this.typeFor(prop);
              Em.assert("Your server returned a hash with the key " + prop + " but has no corresponding type.", !!type);

              var value = hash[prop];
              if (value instanceof Array) {
                for (var i=0; i < value.length; i++) {
                  result.push(this.deserialize(type, value[i]));
                }
              } else {
                result.push(this.deserialize(type, value));
              }
            }

            return result;
          },

          deserialize: function(type, hash) {
            var model = this.createModel(type);
            Em.set(model, 'id', this.extractId(type, hash));
            Em.set(model, 'clientId', this.extractClientId(type, hash));
            Em.set(model, 'rev', this.extractRevision(type, hash));
            Em.set(model, 'clientRev', this.extractClientRevision(type, hash));

            this.deserializeAttributes(model, hash);
            this.deserializeRelationships(model, hash);

            return model;
          },
        
          deserializeAttributes: function(model, hash) {
            model.eachAttribute(function(name, attribute) {
              Em.set(model, name, this.extractAttribute(model, hash, name, attribute));
            }, this);
          },

          extractAttribute: function(model, hash, name, attribute) {
            var key = this.keyFor(name, Em.get(model, 'type'));
            return this.deserializeValue(hash[key], attribute.type);
          },

          deserializeValue: function(value, attributeType) {
            var transform = this.transformFor(attributeType);

            Em.assert("You tried to use a attribute type (" + attributeType + ") that has not been registered", transform);
            return transform.deserialize(value);
          }

        });

        return App.Serializer;
    });
