import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'

export default Route.extend({
  auth: service(),
  flashMessages: service(),
  toast: service(),

  model () {
    return RSVP.Promise.resolve({})
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
