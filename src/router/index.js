import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// import CatalogView from '../views/CatalogView'
// import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/catalog',
    name: 'catalog',
    // component: CatalogView
    component: () => import(/* webpackChunkName: "about" */ '../views/CatalogView')

  },
  {
    path: '/catalog/product',
    name: 'catalog/product',
    // component: CatalogView
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductCardView')

  },

  {
    path: '/basket',
    name: 'basket',
    // component: CatalogView
    component: () => import(/* webpackChunkName: "about" */ '../views/BasketView')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/UserProfileView')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
