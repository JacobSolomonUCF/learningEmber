import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
  model(params){
    return this.store.query('post',{userId: params.id})
    console.log(params)
  },
  setupController(controller, model){
    set(controller, 'posts', model);
  }
});
