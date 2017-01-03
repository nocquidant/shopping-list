/* Root */

const Welcome = require('./pages/Welcome')
const PizzaList = require('./pages/PizzaList')
const Order = require('./pages/Order')
const Error404 = require('./pages/Error')

const main = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/pizzas',
    name: 'pizzas',
    component: PizzaList
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  }
]

const error = [
  {
    path: '*',
    name: 'error',
    component: Error404
  }
]

export default [].concat(main, error)
