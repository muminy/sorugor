import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './styles/reset.css'
import './styles/responsive.css'
import jQuery from 'jquery'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
global.jQuery = jQuery
global.$ = jQuery

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
