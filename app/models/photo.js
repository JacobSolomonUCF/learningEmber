import DS from 'ember-data';

const {
  attr,
  belongsTo
  } = DS; //shorthand

export default DS.Model.extend({
  albumId: belongsTo('album'),

  title: attr('string'),
  url: attr('string'),
  thumbnailUrl: attr('string')

});
