import { createApp } from 'vue'

// import App from './App.vue'
import Composition from './App.vue'

import router from './router'

//createApp(App).mount('#app')
createApp(Composition).use(router).mount('#app')
