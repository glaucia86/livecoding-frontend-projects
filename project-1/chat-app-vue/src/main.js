// @ts-nocheck
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueChatScroll from 'vue-chat-scroll';
import 'bootstrap';

import App from './App.vue';
import router from './router/index';
import store from './store/index';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/loading.css';
import './assets/css/loading-btn.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueChatScroll);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
