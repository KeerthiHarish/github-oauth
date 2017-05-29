import Ember from 'ember'

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    openProject (projectId) {
      this.store.query('githubContents', projectId).then((project) => {
        debugger
      })
      // let project = this.store.findRecord('github-repository', projectId).then((project) => {
      //   debugger
      // })
    }
  }
})
