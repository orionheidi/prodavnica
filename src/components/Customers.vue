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
        <th>listaProizvoda</th>
      </tr>
    <tr v-for="(custumer,index) in custumers" :key="index"> 
      <td> {{custumer.id}}</td>
      <td> {{custumer.firstName}} </td>
      <td> {{custumer.lastName}}  </td>
      <td> {{custumer.email}} </td>
        <button @click="removeItem(index)">Delete</button>
    </tr>
    </table>
    </div>
    
</template>

<script>
export default {
  data() {
    return {

         custumers: [
        {
          id: "1",
          firstName: "Miki",
          lastName: "Vaikiki",
          email: "miki@gmial.com",
        },
        {
          id: "2",
          firstName: "Macan",
          lastName: "Facan",
          email: "macan@gmial.com",
        },
        {
          id: "3",
          firstName: "Lepi",
          lastName: "Kule",
          email: "lepi@gmial.com",
        },
        
      ],
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

  methods: {
       addCustumer() {
      this.custumers.push({ ...this.custumer });
    },

    removeItem(index) {
        this.$delete(this.custumers, index);
    },
  },

      created (){
        console.log(this.$route)
    }
}
</script>

<style>

</style>
