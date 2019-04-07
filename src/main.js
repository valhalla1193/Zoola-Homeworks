
import Vue from 'vue'
import App from './App.vue'
import Navbar from './components/navbar.vue'
import Header from './components/header.vue'
import Content from './components/content.vue'
import Basket from './components/basket.vue'

Vue.component('app-navbar', Navbar)
Vue.component('app-header', Header)
Vue.component('app-content', Content)
Vue.component('app-basket', Basket)


new Vue({
  render: h => h(App),
}).$mount('#app')

