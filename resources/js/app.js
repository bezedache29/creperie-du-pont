require('./bootstrap');
import { createApp } from 'vue';
import App from './components/App.vue'

import store from './store'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   state: {
    
//   },
//   mutations: {
    
//   },
//   actions: {

//   }
// })

const app = createApp(App)

app.mount("#app")
app.use(store)
