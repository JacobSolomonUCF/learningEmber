import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    console.log(serialized)
    return serialized;
  },

  serialize(deserialized) {
    console.log(deserialized)
    return deserialized;
  }
});
