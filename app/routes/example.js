import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  toast: service(),

  model (params) {
    return this.get('store').findRecord('example', params.example_id)
  },

  actions: {
    updateExample (text) {
      const notifications = this.get('toast')
      notifications.success('Example updated successfully!', 'Updated Example')
      text.save()
    },
    deleteExample (text) {
      this.get('toast').success('Example deleted successfully!', 'Deleted Example')
      text.destroyRecord()
        .then(() => this.transitionTo('examples'))
    }
  }
})
