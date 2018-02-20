import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  model(){
    return this.store.findAll('post');
  },
  setupController(controller, model){
    Ember.set(controller, 'posts', model);
  }
});
