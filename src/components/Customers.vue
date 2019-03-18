<template>
    <div>
        <h1>Customers</h1>
    <form @submit.prevent="addCustumer()">
    <label>Id:</label>
      <input type="text" v-model="custumer.id"  />
    <label>FirstName:</label>
      <input type="text" v-model="custumer.firstName" />
    <label>Last Name:</label>
      <input type="text" v-model="custumer.lastName">
    <label>Email:</label>
      <input type="text" v-model="custumer.email">
      <button type="submit">Add Costumer</button>
    </form>
    <table style="width:100%">
    <tr>
      <th>Id</th>
      <th>First Name</th>
      <th>Last Name</th>
       <th>Email</th>
      </tr>
    <tr v-for="(custumer,index) in custumers" :key="index"> 
      <td> {{custumer.id}}</td>
      <td> {{custumer.firstName}} </td>
      <td> {{custumer.lastName}}  </td>
      <td> {{custumer.email}} </td>
        <button @click="removeItem(index)">Delete</button>
        <router-link :to="`/customers/${custumer.id}`" @click="costumerSelected">Latest Purchases</router-link>
    </tr>
    </table>
     <!-- `<child-component v-bind:custumers="custumers"></child-component> -->
    </div>
    
</template>

<script>
import { serverBus } from '../main';
// import Purchase from './Purchase.vue'
export default {
  //  components: {
  //       'child-component':Purches,
  //     },
  data() {
    return {

         custumer: {
          id: "",
          firstName: "",
          lastName: "",
          email: "",
          listaProizvoda: []
        },
        listaProizvoda: [],

    }
  },

  props: {
      custumers: {
          type: Array
      }
  },


  methods: {
       addCustumer() {
      this.custumers.push({ ...this.custumer });
    },

    removeItem(index) {
        this.$delete(this.custumers, index);
    },
  },
  costumerSelected () {
   // Using the server bus
   this.$emit('showCostumer', this.custumers);
  },

      created (){
        console.log(this.$route)
         console.log('The id is: ' + this.$route.params.id);
    }
}
</script>

<style>

</style>
