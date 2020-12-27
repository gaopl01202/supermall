import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Tabbar, TabbarItem } from 'vant';

// Vue.use(router);
Vue.use(Tabbar);
Vue.use(TabbarItem);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
