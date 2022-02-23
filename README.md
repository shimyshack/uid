# UID Directive

An SSR-friendly Vue 3 directive that generates a unique ID for elements.

## Quick Start

Install `@shimyshack/uid`:

```bash
npm install @shimyshack/uid --save

# or yarn
# yarn add @shimyshack/uid
```

## Register Directive

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import { UidDirective, UidDirectivePlugin } from '@shimyshack/uid'

const app = createApp(App)
app.install(UidDirectivePlugin)
// or app.directive('uid', UidDirective)
```

In Nuxt, create a plugin to take advantage of SSR-support:

```javascript
import { UidDirectivePlugin } from '@shimyshack/uid'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.install(BindOncePlugin)
})
```

## Usage

You can now use the directive on any element in which you need to register a unique id.

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref(null)
</script>

<template>
  <div>
    <label :for="input && input.id">Input label</label>
    <input v-uid ref="input" type="text">
  </div>
</template>
```

This will work on both server and client re-hydration.

## Contributors

This was based on [`vue-bind-once`](https://github.com/danielroe/vue-bind-once) by Daniel Roe, but simplified to fit my needs.

For more advanced use cases, I suggest you check out his work.

## License

MIT License - Copyright &copy; Jason Shimkoski
