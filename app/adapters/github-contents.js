import GitHubUserAdapter from 'ember-data-github/adapters/github-user'
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin'
import Ember from 'ember'

export default GitHubUserAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:github',
  query (store, type, id, snapshot) {
    var url = this.buildURL(id)
    return Ember.$.ajax({
      type: 'GET',
      url: url
    })
  },
  buildURL: function (id) {
    let url = this._super()
    return `${url}/repos/${id}/contents/`
  }
})
