<template>
  <div v-on:click="hide" class="drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
    <header class="drawer-header">
      <!-- <img v-bind:src="$store.state.userInfo.avatar" class="avatar"> -->
      <img v-bind:src="headUrl" class="avatar">
      <div class="avatar-dropdown">
        <!-- <span>{{ $store.state.userInfo.nickname }}</span> -->
        <span>{{ username }}</span>
        <div class="mdl-layout-spacer"></div>
        <button id="accbtn" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
          <i class="material-icons" role="presentation">arrow_drop_down</i>
          <span class="visuallyhidden">Accounts</span>
        </button>
        <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="accbtn">
          <li class="mdl-menu__item">{{ email }}</li>
          <li class="mdl-menu__item">info@example.com</li>
          <li class="mdl-menu__item"><i class="material-icons">add</i>Add another account...</li>
        </ul>
      </div>
    </header>
    <nav class="navigation mdl-navigation mdl-color--blue-grey-800">
      <router-link to="/home" class="mdl-navigation__link"><img class="icon" src="../../assets/images/icons/home.svg">首页</router-link>
      <router-link to="/treatment-record" class="mdl-navigation__link"><img class="icon" src="../../assets/images/icons/record.svg">就诊记录</router-link>
      <router-link to="/ecg" class="mdl-navigation__link"><img class="icon" src="../../assets/images/icons/ecg.svg">心电图记录</router-link>
      <router-link to="/aid" class="mdl-navigation__link"><img class="icon" src="../../assets/images/icons/aid.svg">一键急救</router-link>
      <router-link to="/user-info" class="mdl-navigation__link"><img class="icon" src="../../assets/images/icons/user.svg">个人信息</router-link>
      <div class="mdl-layout-spacer"></div>
    </nav>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: Bmob.User.current().get('username') || '请先登录',
        email: Bmob.User.current().get('email') || 'hello@example.com',
        headUrl: Bmob.User.current().get('headUrl') || '/static/images/user.jpg'
      }
    },
    methods: {
      // 当浏览器视口宽度小于1025px时点击侧边栏的链接时抽屉收回
      hide: function (event) {
        let target = event.target
        if (target.tagName === 'A') {
          // if (window.innerWidth < 1025) {
          let btn = document.querySelector('.mdl-layout__drawer-button')
          // console.log(target.tagName)
          btn.click()
          // }
        } else {
          return
        }
      }
    }
  }
</script>

<style scoped>
img.icon{
   width: 24px;
   height: 24px;
   margin-right: 32px;
}
.router-link-active{
  background-color: #00BCD4 !important;
  color: #37474F !important;
}
</style>
