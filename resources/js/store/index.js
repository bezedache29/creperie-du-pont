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
      ],
      modalMentions: false,
      telCreperie: false
  },
  mutations: {
    SHOW_MODAL_MENTIONS(state) {
      state.modalMentions = true
    },
    CLOSE_MODAL_MENTIONS(state) {
      state.modalMentions = false
      state.telCreperie = false
    },
    SHOW_TEL_CREPERIE(state) {
      state.telCreperie = true
    }
  }
})

export default store