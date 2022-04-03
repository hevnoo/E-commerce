import Vue from 'vue'
import VueRouter from 'vue-router'
import iLogin from '../components/iLogin'
import iHome from '../components/iHome'
import iWelcome from '../components/iWelcome'
import iUser from '../views/user/iUser'
import iRight from '../views/power/iRight'
import iRole from '../views/power/iRole'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/ilogin',
  },
  {
    path: '/iLogin',
    component: iLogin,
  },
  {
    path: '/iHome',
    component: iHome,
    redirect: '/iWelcome',
    children: [
      {
        path: '/iWelcome',
        component: iWelcome,
      },
      {
        //服务端后台路径已经写为users,则path不能使用iUser
        path: '/users',
        component: iUser,
      },
      {
        //后台路径已经定为rights,则path不能使用iRight
        path: '/rights',
        component: iRight,
      },
      {
        path: '/roles',
        component: iRole,
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})
// 挂载路由导航守卫，使得强制跳转到登陆页面
router.beforeEach((to, from, next) => {
  if (to.path === '/ilogin') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/ilogin')
  next()
})
export default router
