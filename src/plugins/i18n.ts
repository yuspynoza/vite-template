import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

export default (app: App, options: any) => {
  const i18n = createI18n({
    locale: 'id',
    messages,
  })

  app.use(i18n)
}
