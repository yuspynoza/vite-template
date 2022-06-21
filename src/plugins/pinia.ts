import type { App } from 'vue'
import { createPinia } from 'pinia'

export default (app: App, options: any) => {
  const pinia = createPinia()

  app.use(pinia)
}
