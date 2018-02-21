import Route from '@ember/routing/route';
import RSVP from 'rsvp';


export default Route.extend({
  model(params) {
    return RSVP.hash({
      user: this.get('store').findRecord('user', params.id),
      post: this.store.query('post',{userId: params.id}),
      album: this.store.query('album', {userId:params.id})

    });
  }
});
