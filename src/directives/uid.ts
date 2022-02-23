import type { Directive, Plugin } from 'vue'

const uid = () => Math.floor(Date.now() + Math.random()).toString(36)

export const UidDirective: Directive = {
  created(el) {
    el.setAttribute('id', el.dataset['uid'] || uid())
  },
  getSSRProps() {
    return {
      'data-uid': uid()
    }
  },
}

export const UidDirectivePlugin: Plugin = {
  install(app) {
    app.directive('uid', UidDirective)
  },
}