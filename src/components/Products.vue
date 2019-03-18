<template>
    <div>
     <table style="width:100%">
    <tr>
      <th>Id</th>
      <th>Name</th>
      </tr>
    <tr v-for="(product,index) in products" :key="index"> 
      <td> {{product.id}}</td>
      <td> {{product.name}} </td>
    </tr>
    </table>
    </div>
</template>

<script>
export default {
      props: {
      products: {
          type: Array
      }
  },
      created (){
        console.log(this.$route)
    }
}
</script>

<style>

</style>