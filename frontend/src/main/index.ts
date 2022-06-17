import { App } from 'vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ClickOutside from 'click-outside-vue3'
import Transitions from 'vue3-sfc-transitions'
import { emitterKey } from '@/global'
import mitt from 'mitt'
import router from '@/router'
import store from '@/store'

class InitializeAppModules {

  constructor (private readonly app: App<Element>) {
    this.app = app

    this.use()
    this.provide()
  }

  private use () {
    this.app.use(store)
    this.app.use(router)
    this.app.use(Transitions)
    this.app.use(ClickOutside)
  }

  private provide () {
    this.app.provide(emitterKey, mitt())
  }
}

export default InitializeAppModules
