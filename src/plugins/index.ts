import type { App } from 'vue'
import pinia from './pinia'
import router from './router'
import i18n from './i18n'

export default (app: App, options: any) => {
  app.use(i18n)
  app.use(pinia)
  app.use(router)
}
