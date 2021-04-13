require('./bootstrap');
import { createApp } from 'vue';
import App from './components/App.vue'
import router from './router/index'
import store from './store'
import 'animate.css'
import 'aos/dist/aos.css'

const app = createApp(App)


app.use(router)

app.use(store)

app.mount("#app")