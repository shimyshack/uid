import { createApp } from 'vue'
import App from './App.vue'
import { UidPlugin } from './directives/uid'

createApp(App).use(UidPlugin).mount('#app')
