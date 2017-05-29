import DS from 'ember-data'

export default DS.JSONSerializer.extend({
  normalizeResponse: function (store, primaryModelClass, payload, id, requestType) {
    let obd = this.super(...arguments)
    payload = { contents: payload }
    // payload = { id: Math.random(), contents: payload, type: 'github-contents' }
    let there = this.normalizeQueryResponse(store, primaryModelClass, payload, id, requestType)
    debugger
    // return this.normalizeArrayResponse(store, primaryModelClass, payload, id, requestType)
    return payload
  }
})
