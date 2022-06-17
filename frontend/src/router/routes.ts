import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    component: () => import(/* webpackChunkName: "about" */ '@/layout/NoAuthLayout.vue'),
    name: 'login',
    path: '/'
  },
  {
    component: () => import(/* webpackChunkName: "about" */ '@/layout/NoAuthLayout.vue'),
    name: 'login',
    path: '/login'
  },
  {
    component: () => import(/* webpackChunkName: "about" */ '@/layout/NoAuthLayout.vue'),
    name: 'registration',
    path: '/registration'
  },
  {
    component: () => import(/* webpackChunkName: "about" */ '@/layout/AuthLayout.vue'),
    name: 'chat',
    path: '/chat'
  }
]

export default routes
