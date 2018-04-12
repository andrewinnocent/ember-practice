import Component from '@ember/component'

export default Component.extend({
  example: {
    text: ''
  },
  actions: {
    newExample (text) {
      console.log('text is', text)
      this.sendAction('newExample', this.get('example'))
    }
  }
})
