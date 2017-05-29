import Ember from 'ember'

export default Ember.Component.extend({
  actions: {
    openProject (projectId) {
      this.sendAction('openProject', projectId)
    }
  }
})
