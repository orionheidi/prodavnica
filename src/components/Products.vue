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
      <td :value="product.quantity"> {{product.quantity}}  </td>
      <button @click="increment(product)">+</button>
      <button @click="decrement(product)">-</button>
    </tr>
    </table>
    </div>

</template>

<script>
export default {
    data() {
    return {
        search: '',
        // product: {
        //     name: this.product.name,
        //     quantity: this.product.quantity,
        // },
    }
  },
      props: {
      products: {
          type: Array
      }
  },

  computed:{
      filteredProducts (){
          return this.products.filter((product)=>{
              return product.name.match(this.search)
          });
      }, 
  },

  methods: {

    //   increment () {
    // // let productIncrement = this.products.filter(p => {return p.id === product;});
    //   console.log(this.product.quantity++)
    // },
    // decrement () {
    //   if(this.quantity === 1) {
    //     alert('Negative quantity not allowed')
    //   } else {
    //     this.quantity--
    //   }
    // },
   
       increment (product){
        console.log('cao')
       
        let productIncrement = this.products.filter(p => {return p.id === product.id;});
        alert(JSON.stringify(productIncrement));
        if(productIncrement){
        productIncrement.quantity +=1;
        }
        this.product.quantity = productIncrement.quantity;
    },
  }
       }
</script>

<style>

</style>