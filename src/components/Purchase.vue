<template>
    <div>
     <Customers  @showCostumer="handleCostumer" />
      <!-- <Customers :custumers="[customerDetails]"/> -->
      <!-- {{ customerDetails}} -->
    <table style="width:100%">
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
       <th>Email</th>
        <th>listaProizvoda</th>
      </tr>
    <tr v-for="(custumer,index) in custumers" :key="index" > 
      <!-- <td v-if="index === $route.params.id">
         {{custumer.firstName}}
       </td>
       <td v-if="index === $route.params.id">
         {{custumer.lastName}}
       </td>
       <td v-if="index === $route.params.id">
         {{custumer.email}}
       </td>
       -->
      <td> {{custumer.firstName}} </td>
      <td> {{custumer.lastName}}  </td>
      <td> {{custumer.email}} </td>
      <!-- <Customers  @showCostumer="handleCostumer" /> -->
    </tr>
    </table>
    </div>
</template>

<script>

// import { serverBus } from '../main';
import Customers from './Customers.vue'
// import App from './src/App.vue'
export default {
  components: {
    Customers
    // HelloWorld
  },
    // components: {
    //     App,
    //   },
props: {
      custumers: {
          type: Array
      }
  },
  //   created() {
  // // Using the server bus
  // serverBus.$on('costumerSelected', this.customers.filter(customer => {return customer.id === this.$route.params.id;}))
  //   },
  data() {
    return {

      //  custumer: {
      //     id: this.customer.id,
      //     firstName: this.customer.firstName,
      //     lastName: this.custumer.lastName,
      //     email: this.custumer.email,
      //     listaProizvoda: []
      //   },
      // components: {
      //   Customers,
      // },

        // id: this.$route.params,

    }
  },

    methods: {
      handleCostumer () {
        console.log(this.custumers)
        console.log('parent-click',this.custumers);
      }
    }
    // created (){
    //     console.log(this.$route)
    //      console.log('The id is: ' + this.$route.params.id);
    // },

  //  computed: {
  //   customerDetails() {   
       
  //       console.log(this.$route.params.id)
  //       this.custumers.forEach(function(cus) {
  //           if(cus.id === this.$route.params.id){
  //              console.log(cus.id ==this.$route.params.id)
  //                return `${cus.firstName}  ${cus.lastName}  ${cus.email}  ${cus.id} ${cus.listaProizvoda}`
  //           }
  //       });
  //       // forEach(costumer => {
  //       //     // 
  //       // })

  //   }
  // },


   }
</script>

<style>

</style>

