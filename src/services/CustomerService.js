const customers = [
    {
      id: 1,
      firstName: "Miki",
      lastName: "Vaikiki",
      email: "miki@gmial.com",
      products: []
    },
    {
      id: 2,
      firstName: "Macan",
      lastName: "Facan",
      email: "macan@gmial.com",
      products: []
    },
    {
      id: 3,
      firstName: "Lepi",
      lastName: "Kule",
      email: "lepi@gmial.com",
      products: []
    },
    
  ]

let nextId = 4

export default class CustomerService {
  list() {
    return customers;
  }

  find(id) {
    return customers.find(customer => customer.id == id);
  }

  add(customer) {
    customer.id = nextId
    customers.push(customer)
    nextId++
  }

  remove(customer) {
    customers.splice(customers.indexOf(customer), 1)
  }

  addProductToCustomer(customer, product) {
    customer.products.push(product)
  }
}

export const customerService = new CustomerService();