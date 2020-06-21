import Vue from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import "bootswatch/dist/sketchy/bootstrap.min.css"; 
import 'bootstrap-vue/dist/bootstrap-vue.css'

Amplify.configure(aws_exports);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');