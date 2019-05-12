import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'connect',
      component: () => import(/* webpackChunkName: "connect" */ './views/Connect.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "search" */ './views/Search.vue')
    },
    {
      path: '/my-books',
      name: 'myBooks',
      component: () => import(/* webpackChunkName: "myBooks" */ './views/MyBooks.vue')
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/book-details/:id',
      name: 'bookDetails',
      component: () => import(/* webpackChunkName: "book-details" */ './views/BookDetails.vue')
    },
    {
      path: '/book-edit/:id',
      name: 'bookEdit',
      component: () => import(/* webpackChunkName: "book-edit" */ './views/BookEdit.vue')
    },
    {
      path: '/book-write/:id',
      name: 'bookWrite',
      component: () => import(/* webpackChunkName: "book-write" */ './views/BookWrite.vue')
    },
    {
      path: '/book-read/:id',
      name: 'bookRead',
      component: () => import(/* webpackChunkName: "book-read" */ './views/BookRead.vue')
    },
  ]
})
