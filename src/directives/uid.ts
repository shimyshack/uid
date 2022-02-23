import type { Directive, Plugin } from 'vue'

const uid = () => Math.floor(Date.now() + Math.random()).toString(36)

export const Uid: Directive = {
  created(el) {
    el.setAttribute('id', el.id || uid())
  },
  getSSRProps() {
    return {
      id: uid()
    }
  },
}

export const UidPlugin: Plugin = {
  install(app) {
    app.directive('uid', Uid)
  },
}