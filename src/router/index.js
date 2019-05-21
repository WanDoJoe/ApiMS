import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component:  ()=>import("@/components/pages/index")
    },
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: ()=>import("@/components/Home")
    //   // ,replace:false
    // }
    {
      path: "/login",
      name: "Login",
      component: ()=>import("@/components/pages/Login")
    }
    ,
    {
      path: '/apimain',
      name: 'ApiMain',
      component: ()=>import("@/components/pages/ApiManage")
    }
  ]
})
