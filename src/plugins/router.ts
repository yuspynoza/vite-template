import type { App } from 'vue'
import {
  createRouter,
  createWebHistory,
} from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

export default (app: App, options: any) => {
  const routes = setupLayouts(generatedRoutes)

  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  app.use(router)
}
