import {createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import About from '../views/AboutMe.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
        
    },
    {
        path: '/about',
        name: 'about',
        component: About
        
    },
    

];
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    },
  })

export default router;