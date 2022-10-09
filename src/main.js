import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import App from './App.vue';
import router from './router';

import "@/assets/css/style.css";

library.add(fab, fas);

createApp(App)
.component('fa', FontAwesomeIcon)
.use(router)
.mount('#app');