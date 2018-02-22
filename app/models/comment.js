import DS from 'ember-data';

const {
  attr,
  belongsTo
  } = DS; //shorthand

export default DS.Model.extend({
  postId: belongsTo('post'),

  name: attr('string'),
  email: attr('string'),
  body: attr('string'),

});
