import Ember from 'ember'
import config from '../config/environment'

export default Ember.Controller.extend({

  session: Ember.inject.service(),
  config: config.torii.providers['github-oauth2'],

  actions: {
    authenticateSession () {
      this.get('session').authenticate('authenticator:torii', 'github-oauth2')
    },
    invalidateSession () {
      this.get('session').invalidate()
    },
    logout () {
      this.get('session').invalidate()
    }

  }
})
