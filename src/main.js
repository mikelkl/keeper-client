// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

// 0. 如果使用模块化机制编程， 要调用 Vue.use(VueRouter)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueResource)

const store = new Vuex.Store({
  state: {
    isLogin: true,
    loading: false,
    user: {}
  },
  mutations: {
    login (state, user) {
      state.isLogin = true
      state.user = user
    },
    setLoading (state, loading) {
      state.loading = loading
    }
  }
})

// import ECG from './components/features/ECG'
// import Aid from './components/features/Aid'
// import TreatmentRecord from './components/features/TreatmentRecord'
// import UserInfo from './components/features/UserInfo'

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// 路由懒加载
const Aid = resolve => require(['./components/features/Aid'], resolve)
const ECG = resolve => require(['./components/features/ECG'], resolve)
const TreatmentRecord = resolve => require(['./components/features/TreatmentRecord'], resolve)
const UserInfo = resolve => require(['./components/features/UserInfo'], resolve)

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点在讨论嵌套路由。
const routes = [{
  path: '/aid',
  component: Aid
}, {
  path: '/ecg',
  component: ECG
}, {
  path: '/treatment-record',
  component: TreatmentRecord
}, {
  path: '/user-info',
  component: UserInfo
}]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你 还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
