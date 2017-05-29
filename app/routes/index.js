import Ember from 'ember'
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model () {
    return Ember.RSVP.hash({
      user: this.store.findRecord('github-user', '#')
    })
  },

  setupController (controller, models) {
    this._super(controller, models)
    controller.set('user', models.user)
    controller.set('repos', models.user.get('githubRepositories'))
  }
})
