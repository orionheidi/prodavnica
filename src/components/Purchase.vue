<template>
<div class="mt-4">
    <router-link to="/customers">Go back</router-link>
    <hr/>

    <div class="card mb-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ customer.firstName }}</h5>
         <h5 class="card-title">{{ customer.lastName }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ customer.email }}</h6>
      </div>
    </div>

    <h5>Products</h5>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in customer.products" :key="product.id">
          <td>{{ product.name }}</td>
        </tr>
      </tbody>
    </table> 
  </div>
</template>

<script>
import { customerService } from '../services/CustomerService'

export default {
  
  props: ['id'],

  created(){
    this.customer = customerService.find(this.id)
  }

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

