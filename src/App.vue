<template>
  <div id="app">
    <div class="layout mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <!-- <div class="layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header"> -->
      <my-header v-show="showHeaderDrawer"></my-header>
      <my-drawer v-show="showHeaderDrawer"></my-drawer>
      <main class="mdl-layout__content mdl-color--grey-100 my-main">
        <my-loading></my-loading>
        <!-- 下一级视图 -->
        <transition name="component-fade" mode="out-in">
          <router-view></router-view>
        </transition>
        <my-tip></my-tip>
      </main>
    </div>
  </div>
</template>

<script>
  import mdl from 'material-design-lite/material.js'
  import Header from './components/common/Header'
  import Drawer from './components/common/Drawer'
  import Loading from './components/utils/Loading'
  import Tip from './components/utils/Tip'

  export default {
    components: {
      'my-header': Header,
      'my-loading': Loading,
      'my-tip': Tip,
      'my-drawer': Drawer
    },
    computed: {
      showHeaderDrawer: function () {
        return this.$route.name !== 'home' && this.$route.path !== '/login'
      }
    }
  }
</script>

<style src="material-design-lite/material.css"></style>
<style src="../static/css/styles.css"></style>
<style scoped>
.my-main {
  margin-left: 0px;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-active {
  opacity: 0;
}
</style>
