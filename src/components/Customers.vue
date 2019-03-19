<template>
    <div>
    <h1>Customers</h1>
       <hr/>
    <div class="row">
      <div class="col-sm-4">
        <form @submit.prevent="addCustomer">
          <div class="form-group">
            <label for="name">Name</label>
            <input v-model="customer.firstName" type="text" class="form-control" id="firstName" placeholder="Enter name">
          </div>
           <div class="form-group">
            <label for="name">Name</label>
            <input v-model="customer.lastName" type="text" class="form-control" id="lastName" placeholder="Enter name">
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input v-model="customer.email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

    <br/>
    <table style="width:100%">
    <tr>
      <th>Id</th>
      <th>First Name</th>
      <th>Last Name</th>
       <th>Email</th>
    </tr>
    <tr v-for="(customer,index) in customers" :key="index"> 
      <td> {{customer.id}}</td>
      <td> {{customer.firstName}} </td>
      <td> {{customer.lastName}}  </td>
      <td> {{customer.email}} </td>
      <button @click="removeCustomer(customer)">Delete</button>
      <router-link :to="`/customers/${customer.id}`">Latest Purchases</router-link>
    </tr>
    </table>
    </div>
    
</template>

<script>
import { customerService } from '../services/CustomerService.js'
export default {
  data() {
    return {

      customer: {},
      customers: customerService.list()
      

    }
  },
  methods:{
    addCustomer(){
      customerService.add(this.customer)
      this.customer = {}
    },
    removeCustomer(customer){
      customerService.remove(customer)
    }
  }

  // methods: {
  //   addcustomer() {
  //     this.customers.push({ ...this.customer });
  //   },

  //   removeItem(index) {
  //       this.$delete(this.customers, index);
  //   },
  // }
}
</script>

<style>

</style>
