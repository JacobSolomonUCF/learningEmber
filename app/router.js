import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', function() {
    this.route('user', {path: '/user/:id'});
  });
  this.route('users');
  this.route('user', {path: '/user/:id'});
  this.route('photos');
  this.route('albums');
});

export default Router;
