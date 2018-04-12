import Route from '@ember/routing/route'

export default Route.extend({
  model (params) {
    return this.get('store').findRecord('example', params.example_id)
  },

  actions: {
    updateExample (text) {
      text.save()
    },
    deleteExample (text) {
      text.destroyRecord()
        .then(() => this.transitionTo('examples'))
    }
  }
})
