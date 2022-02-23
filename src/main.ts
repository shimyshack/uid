import { createApp } from 'vue'
import App from './App.vue'
import { UidDirectivePlugin } from './directives/uid'

createApp(App).use(UidDirectivePlugin).mount('#app')
