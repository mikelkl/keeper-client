// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js'
import store from './vuex/store.js'

// import Vuex from 'vuex'
// import VueResource from 'vue-resource'

// Vue.use(Vuex)
// Vue.use(VueResource)

// router.beforeEach((to, from, next) => {
//   if (to.path.indexOf('/main/') !== -1) {
//     store.dispatch('getCommonStore')
//     if (store.state.common.isLogin) {
//       next()
//     } else {
//       next('/')
//     }
//   } else {
//     next()
//   }
// })
// router.afterEach(route => {
//   store.commit('SET_SELECTED_TITLE', route.name)
// })

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
  router,
  // provide the store using the "store" option.
  // this will inject the store instance to all child components.
  store,
  render: h => h(App)
}).$mount('#app')
