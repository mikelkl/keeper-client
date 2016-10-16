<template>
  <div>
    <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
      <header class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">Home</span>
          <div class="mdl-layout-spacer"></div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
            <label class="mdl-button mdl-js-button mdl-button--icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <div class="mdl-textfield__expandable-holder">
              <input class="mdl-textfield__input" type="text" id="search">
              <label class="mdl-textfield__label" for="search">Enter your query...</label>
            </div>
          </div>
          <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
            <i class="material-icons">more_vert</i>
          </button>
          <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" for="hdrbtn">
            <li class="mdl-menu__item">About</li>
            <li class="mdl-menu__item">Contact</li>
            <li class="mdl-menu__item">Legal information</li>
          </ul>
        </div>
      </header>
      <div v-on:click="hide"  class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        <header class="demo-drawer-header">
          <img src="../assets/images/user.jpg" class="demo-avatar">
          <div class="demo-avatar-dropdown">
            <span>hello@example.com</span>
            <div class="mdl-layout-spacer"></div>
            <button id="accbtn" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
              <i class="material-icons" role="presentation">arrow_drop_down</i>
              <span class="visuallyhidden">Accounts</span>
            </button>
            <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="accbtn">
              <li class="mdl-menu__item">hello@example.com</li>
              <li class="mdl-menu__item">info@example.com</li>
              <li class="mdl-menu__item"><i class="material-icons">add</i>Add another account...</li>
            </ul>
          </div>
        </header>
        <nav class="demo-navigation mdl-navigation mdl-color--blue-grey-800">
          <a class="mdl-navigation__link" href=""><img class="icon" src="../assets/images/icons/home.svg">首页</a>
          <router-link to="/treatment-record" class="mdl-navigation__link"><img class="icon" src="../assets/images/icons/record.svg">就诊记录</router-link>
          <router-link to="/ecg" class="mdl-navigation__link"><img class="icon" src="../assets/images/icons/ecg.svg">心电图记录</router-link>
          <router-link to="/aid" class="mdl-navigation__link"><img class="icon" src="../assets/images/icons/aid.svg">一键急救</router-link>
          <router-link to="/user-info" class="mdl-navigation__link"><img class="icon" src="../assets/images/icons/user.svg">个人信息</router-link>
          <div class="mdl-layout-spacer"></div>
        </nav>
      </div>
      <main class="mdl-layout__content mdl-color--grey-100">
        <div class="mdl-grid demo-content">
          <!-- 下一级视图 -->
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      // 当浏览器视口宽度小于1025px时点击侧边栏的链接时抽屉收回
      hide: function (event) {
        if (window.innerWidth < 1025) {
          let btn = document.querySelector('.mdl-layout__drawer-button')
          let target = event.target
          // console.log(target.tagName)
          if (target.tagName === 'A') {
            btn.click()
          }
        } else {
          return
        }
      }
    }
  }
</script>

<style scoped>

label.mdl-button.mdl-js-button.mdl-button--icon {
  top: -20px
}

img.icon{
   width: 24px;
   height: 24px;
   margin-right: 32px;
}
</style>
