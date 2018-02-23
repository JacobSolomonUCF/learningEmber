import DS from 'ember-data';
import Ember from 'ember';

const {
  attr,
  belongsTo,
  hasMany
  } = DS; //shorthand

export default DS.Model.extend({
  userId: belongsTo('user'),
  photo: hasMany('photo'),

  title: attr('string'),
  firstPhoto: Ember.computed.alias('photo.firstObject'),

});
