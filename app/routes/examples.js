import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  auth: service(),
  flashMessages: service(),
  toast: service(),

  model () {
    return this.get('store').findAll('example')
  },

  actions: {
    createExample (examplePojo) {
      const example = this.get('store').createRecord('example', examplePojo)
      const notifications = this.get('toast')
      notifications.success('A new example was created!', 'New Example')
      return example.save()
    }
  }
})
