import DS from 'ember-data';

const {
  attr,
  hasMany
  } = DS; //shorthand

export default DS.Model.extend({
  post: hasMany('post'),

  name: attr('string'),
  email: attr('string'),
  phone: attr('string'),
  website: attr('string'),
  username: attr('string'),
  address: attr('address'),
  company: attr('company')

});
