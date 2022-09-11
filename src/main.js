import { createApp } from 'vue'
import App from './App.vue'
import bootstrap from 'bootstrap'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).mount('#app')
App.use(bootstrap)
App.use(axios)
