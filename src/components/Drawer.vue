<template>
  <div>
    <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
      <header class="demo-header mdl-layout__header mdl-layout__header--waterfall mdl-layout__header--waterfall-hide-top">
        <div class="mdl-layout__header-row mdl-color--grey-100 mdl-color-text--grey-600">
          <img src="../assets/images/logo2.png" width="30" height="30" style="margin-right: 5px;">
          <!-- <span class="mdl-layout-title header-font">Keeper</span> -->
          <span class="mdl-layout-title">Keeper</span>
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
        </div>
        <div class="mdl-layout__header-row">
        <!-- <div class="mdl-layout__header-row mdl-color--teal-600"> -->
          <span class="mdl-layout-title header-font">{{ $store.state.selectedTitle }}</span>
        </div>
      </header>
      <!-- <header class="demo-header mdl-layout__header mdl-layout__header--waterfall mdl-color--teal-600 mdl-color-text--grey-600">
        <div class="mdl-layout__header-row">
          <img src="../assets/images/logo.png" width="30" height="30">
          <span class="mdl-layout-title header-font">Keeper</span>
          <div class="mdl-layout-spacer"></div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
            <label class="mdl-button mdl-js-button mdl-button--icon header-font" for="search">
              <i class="material-icons">search</i>
            </label>
            <div class="mdl-textfield__expandable-holder">
              <input class="mdl-textfield__input" type="text" id="search">
              <label class="mdl-textfield__label" for="search">Enter your query...</label>
            </div>
          </div>
        </div>
        <div class="mdl-layout__header-row">
          <span class="header-title">{{ selectedTitle }}</span>
        </div>
      </header> -->
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
        <nav v-on:click="activate" class="demo-navigation mdl-navigation mdl-color--blue-grey-800">
          <!-- <router-link to="/home" class="mdl-navigation__link"><img class="icon" src="../assets/images/icons/home.svg">首页</router-link> -->
          <router-link to="/treatment-record" class="mdl-navigation__link"><img class="icon" src="../assets/images/icons/record.svg">就诊记录</router-link>
          <router-link to="/ecg" class="mdl-navigation__link"><img class="icon" src="../assets/images/icons/ecg.svg">心电图记录</router-link>
          <router-link to="/aid" class="mdl-navigation__link"><img class="icon" src="../assets/images/icons/aid.svg">一键急救</router-link>
          <router-link to="/user-info" class="mdl-navigation__link"><img class="icon" src="../assets/images/icons/user.svg">个人信息</router-link>
          <div class="mdl-layout-spacer"></div>
        </nav>
      </div>
      <main class="mdl-layout__content mdl-color--grey-100">
        <div class="mdl-spinner mdl-js-spinner is-active loading" v-show="$store.state.loading"></div>
      <!-- <div class="mdl-spinner mdl-js-spinner is-active loading" v-bind:style="{ display: loadingDisplay }"></div> -->
      <!-- <div class="mdl-spinner mdl-js-spinner is-active loading"></div> -->
      <!-- <div>{{ loadingDisplay }}</div> -->
        <!-- <div class="mdl-grid demo-content"> -->
        <!-- 下一级视图 -->
        <transition name="component-fade" mode="out-in">
          <router-view></router-view>
        </transition>
        <!-- </div> -->
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        lastElement: null,
        activate: false
      }
    },
    methods: {
      // 当浏览器视口宽度小于1025px时点击侧边栏的链接时抽屉收回
      hide: function (event) {
        let target = event.target
        if (target.tagName === 'A') {
          if (window.innerWidth < 1025) {
            let btn = document.querySelector('.mdl-layout__drawer-button')
            // console.log(target.tagName)
            btn.click()
          }
          // this.selectedTitle = target.innerText
        } else {
          return
        }
      },
      activate: function (event) {
        let target = event.target
        if (target.tagName === 'A') {
          if (this.lastElement !== null) {
            this.lastElement.classList.remove('activate')
          }
          this.lastElement = event.target
          event.target.classList.add('activate')
        }
      }
    }
  }
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-active {
  opacity: 0;
}

/*.header-title {
  font-size:56px;
  color:white;
  margin:0 auto;
}*/
.header-font {
  color: white;
}

.activate {
  background-color: #00BCD4 !important;
  color: #37474F !important;
}

label.mdl-button.mdl-js-button.mdl-button--icon {
  top: -20px
}

img.icon{
   width: 24px;
   height: 24px;
   margin-right: 32px;
}

.loading {
  display:block;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 20px;
  margin: 50px auto;
}
</style>
