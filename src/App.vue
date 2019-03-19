<template>
  <div id="app">
    
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/customers">Customers </router-link>
    <router-link to="/products">Products</router-link>
    <!-- `<Purchase v-bind:custumers="custumers" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <router-view :custumers="custumers" :products="products" /> -->
    <router-view />

  </div>
</template>

// <script>
// import HelloWorld from './components/HelloWorld.vue'
// import Purchase from './components/Purchase.vue'

export default {
  name: 'app',
  components: {
  },

  data () {
    return {
     
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
