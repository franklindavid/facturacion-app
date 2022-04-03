require('./bootstrap');
import { createApp } from 'vue';

// import App from './components/App.vue';
import App from './components/App.vue';

//importamos Axios
import VueAxios from 'vue-axios';
import axios from 'axios';

//Importamos y configuramos el Vue-router
// import { createRouter, createWebHistory } from 'vue-router'
import {router} from './routes';

import {store} from './store';

// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes : routes, // short for `routes: routes`
//   })

  // const app = createApp({});

  // app.use(router);
  // app.use(VueAxios, axios)

  // router.isReady().then(() => createApp(App).mount('#app'));
 
  
  createApp(App).use(router,VueAxios,axios,store).mount('#app');
