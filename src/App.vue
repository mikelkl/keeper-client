<template>
  <div id="app">
    <div class="layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
      <my-header v-show="$route.name !== 'home' && $route.path !== '/login'"></my-header>
      <my-sidebar v-show="$route.name !== 'home' && $route.path !== '/login'"></my-sidebar>
      <main class="mdl-layout__content mdl-color--grey-100 my-main">
      <!-- <main v-if="$route.name !== 'home'" class="mdl-layout__content mdl-color--grey-100"> -->
        <div class="mdl-spinner mdl-js-spinner is-active loading" v-show="$store.state.common.loading"></div>
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
  import mdl from 'material-design-lite/material.js'
  import Header from './components/common/Header'
  import Sidebar from './components/common/Sidebar'

  export default {
    components: {
      'my-header': Header,
      'my-sidebar': Sidebar
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

.loading {
  display:block;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 20px;
  margin: 50px auto;
}
</style>
