# vue-uid

An SSR-friendly Vue directive that generates a unique ID for elements.

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
import { Uid, UidPlugin } from '@shimyshack/uid'

createApp(App)
  .use(UidPlugin)
  // or .directive('uid', Uid)
  .mount('#app')
```

In Nuxt, create a plugin to take advantage of SSR-support:

```javascript
import { UidPlugin } from '@shimyshack/uid'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(UidPlugin)
})
```

## Usage

You can now use the directive on any element in which you need to register a unique id.

### Single Element

```vue
<script setup lang="ts">
import { ref } from 'vue'
const input = ref<HTMLElement>()
</script>

<template>
  <div>
    <label :for="input?.id">Input label</label>
    <input v-uid ref="input" type="text">
  </div>
</template>
```

### Array of Elements

```vue
<script setup lang="ts">
import { ref } from 'vue'
const formInputRefs = ref<HTMLElement[]>([])
const form_fields = [
  { label: 'Field 1', name: 'field_1' },
  { label: 'Field 2', name: 'field_2' },
]
</script>

<template>
  <div v-for="(field, index) in form_fields">
    <label :for="formInputRefs[index]?.id">
      {{ field.label }}
    </label>
    <input v-uid ref="formInputRefs" :name="field.name" />
  </div>
</template>
```

This will work on both server and client re-hydration.

## Contributors

This was inspired by the work of Daniel Roe on [`vue-bind-once`](https://github.com/danielroe/vue-bind-once), but simplified to fit my needs.

For more advanced use cases, I suggest you check out his work.

## License

MIT License - Copyright &copy; Jason Shimkoski
