import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    return RSVP.hash({
      post: this.store.findAll('post'),
      comment: this.store.findAll('comment')

    });
  }
});
