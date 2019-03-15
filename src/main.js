import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Customers from './components/Customers.vue'
import Products from './components/Products.vue'


Vue.use(VueRouter) 
Vue.config.productionTip = false

const routes = [
  { path: '/customers', component:Customers},
  { path: '/products', component:Products},
  
]

const router = new VueRouter({
    routes:routes,
    mode: 'history'
    //moze i samo routes
})

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')

