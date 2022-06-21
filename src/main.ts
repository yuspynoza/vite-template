import { createApp } from 'vue'
import App from './App.vue'
import plugins from './plugins'
import 'nprogress/nprogress.css'

createApp(App)
  .use(plugins)
  .mount('#app')
