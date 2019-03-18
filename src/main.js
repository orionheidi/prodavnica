import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Customers from './components/Customers.vue'
import Products from './components/Products.vue'
import Purchase from './components/Purchase.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


Vue.use(VueRouter) 
Vue.config.productionTip = false


export const serverBus = new Vue();

const routes = [
  { path: '/customers', component:Customers,props:true},
  { path: '/products', component:Products},
  { path: '/customers/:id', component:Purchase, props: true},
  
]

const router = new VueRouter({
    routes:routes,
    mode: 'history',
    //moze i samo routes
})

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')

