import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Form',
    component: ()=>import(/*webpackChunkName:form*/'../views/Form.vue')
  },
 
]

const router = new VueRouter({
  routes
})

export default router
