import DS from 'ember-data';

const {
  attr,
  belongsTo,
  hasMany
  } = DS; //shorthand

export default DS.Model.extend({
  userId: belongsTo('user'),
  comment: hasMany('comment'),

  title: attr('string'),
  body: attr('string')

});
