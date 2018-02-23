import Route from '@ember/routing/route';
import { set } from '@ember/object';
import RSVP from 'rsvp';


export default Route.extend({
  model(params) {
    return RSVP.hash({
      album: this.get('store').findRecord('album', params.albumId),
      photo: this.store.query('photo',{albumId: params.albumId})

    });
  }
});
