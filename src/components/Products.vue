<template>
    <div>
    <input type = 'text' v-model='search' placeholder="search products" />
     <table style="width:100%">
    <tr>
      <th>Id</th>
      <th>Name</th>
    </tr>
    <tr v-for="(product,index) in filteredProducts" :key="index"> 
      <td> {{product.id}}</td>
      <td> {{product.name}} </td>
    </tr>
    </table>
    </div>
</template>

<script>
export default {
    data() {
    return {
        search: ''
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
      }
  },
      created (){
        console.log(this.$route)
    }
}
</script>

<style>

</style>