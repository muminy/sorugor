import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import jQuery from 'jquery'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './styles/responsive.css'
import './styles/reset.css'

global.jQuery = jQuery
global.$ = jQuery

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
