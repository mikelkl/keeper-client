<template>
  <div id="app">
    <div class="layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
      <my-header v-show="$route.name !== 'home' && $route.path !== '/login'"></my-header>
      <my-sidebar v-show="$route.name !== 'home' && $route.path !== '/login'"></my-sidebar>
      <main class="mdl-layout__content mdl-color--grey-100 my-main">
        <transition name="spinner-move">
          <div v-show="$store.state.common.loading">
            <div class="mdl-spinner mdl-js-spinner is-active loading"></div>
          </div>
        </transition>
        <!-- 下一级视图 -->
        <transition name="component-fade" mode="out-in">
          <router-view></router-view>
        </transition>
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
.spinner-move-enter-active {
  position: relative;
  animation: move-in .5s;
}
.spinner-move-leave-active {
  position: relative;
  animation: move-out .5s;
}
@keyframes move-in {
  0% {
    /*margin-top: -50px;*/
    top: -50px;
  }
  50% {
    /*margin-top: 10px;*/
    top: 10px;
  }
  100% {
    /*margin-top: 0px;*/
    top: 0px;
  }
}
@keyframes move-out {
  0% {
    /*margin-top: 0px;*/
    top: 0px;
  }
  50% {
    /*margin-top: 10px;*/
    top: 10px;
  }
  100% {
    /*margin-top: -50px;*/
    top: -50px;
  }
}
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
