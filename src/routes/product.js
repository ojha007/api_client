import Index from '../components/views/Product/Index'
import Create from '../components/views/Product/Create'
// import {VueRouter as router} from 'vue-router/types/router'

// const productRoutes = [
// ]
const productRoutes = [
  {
    path: 'products',
    name: 'Product',
    alias: 'Product',
    component: Index,
    parent: '/'
  },
  {
    path: 'products/create',
    name: 'Product_Create',
    alias: 'Product Create',
    component: Create,
    parent: '/'
  }
]
export default productRoutes
// router.addRoutes([
//   productRoutes
// ])
