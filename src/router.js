import Vue from 'vue'
import VueRouter from 'vue-router'

// 0. 如果使用模块化机制编程， 要调用 Vue.use(VueRouter)
Vue.use(VueRouter)

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
  name: '一键急救',
  component: Aid
}, {
  path: '/ecg',
  name: '心电图记录',
  component: ECG
}, {
  path: '/treatment-record',
  name: '就诊记录',
  component: TreatmentRecord
}, {
  path: '/user-info',
  name: '个人信息',
  component: UserInfo
}]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你 还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

export default router
