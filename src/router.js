import Vue from 'vue'
import VueRouter from 'vue-router'

// 0. 如果使用模块化机制编程， 要调用 Vue.use(VueRouter)
Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// 路由懒加载
const Aid = resolve => require(['./components/main/Aid'], resolve)
const ECG = resolve => require(['./components/main/ECG'], resolve)
const TreatmentRecord = resolve => require(['./components/main/TreatmentRecord'], resolve)
const UserInfo = resolve => require(['./components/main/UserInfo'], resolve)
const FollowupInfo = resolve => require(['./components/main/FollowupInfo'], resolve)
const Home = resolve => require(['./components/Home'], resolve)
const Login = resolve => require(['./components/login/Login'], resolve)

const routes = [{
  path: '/treatment-record',
  name: '就诊记录',
  component: TreatmentRecord
}, {
  path: '/user-info',
  name: '个人信息',
  component: UserInfo
}, {
  path: '/aid',
  name: '一键急救',
  component: Aid
}, {
  path: '/ecg',
  name: '心电图记录',
  component: ECG
}, {
  path: '/followup-info',
  name: '诊后随访',
  component: FollowupInfo
}, {
  path: '/login',
  name: '登陆',
  component: Login
}, {
  path: '/home',
  name: 'home',
  component: Home
}, {
  // 重定向任意未匹配路径到 /home
  path: '*',
  redirect: '/home'
}]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你 还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

export default router
