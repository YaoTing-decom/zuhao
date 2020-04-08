import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Index.vue'),
    children:[
      {
        path:'',
        redirect:'/home'
      },
      {
        path: '/home',
        name: 'home',
        component: Home,
      },
      {
        path: '/detail',
        name: 'detail',
        component: () => import('../views/Detail.vue')
      },
      {
        path: '/free',
        name: 'free',
        component: () => import('../views/free.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/cart.vue')
      },
      {
        path: '/me',
        name: 'me',
        component: () => import('../views/me.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../components/list.vue')
  },
  {
    path: '/list1',
    name: 'list1',
    component: () => import('../components/list1.vue')
  },
  {
    path: '/list2',
    name: 'list2',
    component: () => import('../components/list2.vue')
  },
  {
    path: '/list3',
    name: 'list3',
    component: () => import('../components/list3.vue')
  },
  {
    path: '/list4',
    name: 'list4',
    component: () => import('../components/list4.vue')
  },
  {
    path: '/list5',
    name: 'list5',
    component: () => import('../components/list5.vue')
  },
  {
    path: '/list6',
    name: 'list6',
    component: () => import('../components/list6.vue')
  },
  {
    path: '/list7',
    name: 'list7',
    component: () => import('../components/list7.vue')
  },
  {
    path: '/list8',
    name: 'list8',
    component: () => import('../components/list8.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../components/setting.vue')
  },
  {
    path: '/commodity/:lid',
    name: 'commodity',
    component: () => import('../components/Commodity.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// // 挂载路由导航守卫
// router.beforeEach((to,from,next)=>{
//   if(to.path==="/"){
//     return next();
//   }else if (to.path==="/detail") {
//     return next();
//   }else if (to.path==="/login") {
//     return next();
//   }
//   // 获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   if(!tokenStr) return next("/login")
//   next()
// })

export default router
