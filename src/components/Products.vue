<template>
    <div>
    <input type = 'text' v-model='search' placeholder="search products" />
     <table style="width:100%">
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Quantity</th>
    </tr>
    <tr v-for="(product,index) in filteredProducts" :key="index"> 
      <td> {{product.id}}</td>
      <td> {{product.name}} </td>
      <td> {{product.quantity}}  </td>
      <button @click="increment(product)">+</button>
      <button @click="decrement(product)">-</button>
      <router-link :to="`/products/${product.id}`">Buy product</router-link>
    </tr>
    </table>
    </div>

</template>

<script>
import { productService } from '../services/ProductService.js'
export default {
    data() {
    return {
        search: '',
        products: productService.list()
    }
  },

  computed:{
      filteredProducts (){
        //   product.name.toLowerCase().includes(serch.toLowerCase())
          return this.products.filter((product)=>{
              return product.name.toLowerCase().match(this.search.toLowerCase())
          });
      }, 
  },

  methods: {
   
    increment(product) {
      productService.increment(product)
    },
  
    decrement(product) {
      productService.decrement(product)
    }
    },

       }
</script>

<style>

</style>