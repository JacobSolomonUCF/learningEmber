import DS from 'ember-data';

const {
  attr,
  belongsTo
  } = DS; //shorthand

export default DS.Model.extend({
  userId: belongsTo('user'),

  title: attr('string'),

});
