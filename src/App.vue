<template>
  <div id="app">
    
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/customers">Customers </router-link>
    <router-link to="/products">Products</router-link>
   <!-- `<Purchase v-bind:custumers="custumers" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
     <router-view :custumers="custumers" />

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Purchase from './components/Purchase.vue'

export default {
  name: 'app',
  components: {
    Purchase
    // HelloWorld
  },

  data () {
    return {
      custumers: [
        {
          id: 1,
          firstName: "Miki",
          lastName: "Vaikiki",
          email: "miki@gmial.com",
          listaProizvoda: ["compovi", "kertridzi","ram memorije"]
        },
        {
          id: 2,
          firstName: "Macan",
          lastName: "Facan",
          email: "macan@gmial.com",
          listaProizvoda: ["compovi", "kertridzi","baterije"]
        },
        {
          id: 3,
          firstName: "Lepi",
          lastName: "Kule",
          email: "lepi@gmial.com",
          listaProizvoda: ["compovi", "prespojnici","ram memorije"]
        },
        
      ],

        created (){
        console.log(this.$route)
         console.log('The id is: ' + this.$route.params.id);
    }
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
