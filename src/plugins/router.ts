import type { App } from 'vue'
import {
  createRouter,
  createWebHistory,
} from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import Nprogress from 'nprogress'

export default (app: App, options: any) => {
  const routes = setupLayouts(generatedRoutes)

  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  router.beforeEach(() => {
    Nprogress.set(0.2)
  })

  router.afterEach(() => {
    Nprogress.set(0.8)
  })

  router.beforeResolve(() => {
    Nprogress.set(1)
  })

  app.use(router)
}
