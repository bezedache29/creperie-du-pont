import { createStore } from 'vuex'

const store = createStore({
  state: {
      crepes: [
        {
          name: 'crepe1',
          aliments: ['jambon', 'oeufs', 'fromage']
        },
        {
          name: 'crepe2',
          aliments: ['anchois', 'choux-fleur', 'orange']
        }
      ]
  },
  mutations: {
    
  }
})

export default store