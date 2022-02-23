import { createApp } from 'vue'
import App from './App.vue'
import { Uid } from './directives/uid'

createApp(App).directive('uid', Uid).mount('#app')
