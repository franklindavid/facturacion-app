require('./bootstrap');
import { createApp } from 'vue';

import App from './components/App.vue';

import VueAxios from 'vue-axios';
import axios from 'axios';

import {router} from './routes';

import {store} from './store'; 
  
createApp(App).use(router,VueAxios,axios,store).mount('#app');
