import Component from '@ember/component'

export default Component.extend({
  example: {
    text: ''
  },
  actions: {
    newExample (text) {
      this.sendAction('newExample', this.get('example'))
      this.set('example.text', '')
    }
  }
})
