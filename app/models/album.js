import DS from 'ember-data';

const {
  attr,
  belongsTo,
  hasMany
  } = DS; //shorthand

export default DS.Model.extend({
  userId: belongsTo('user'),
  photo: hasMany('photo'),

  title: attr('string'),

});
