<template>
  <div>
    <transition name="spinner-move">
      <div v-show="$store.state.doc.loading && forLogin" class="loading-wrapper loading-login-wrapper">
        <div class="mdl-spinner mdl-js-spinner is-active loading"></div>
      </div>
    </transition>
    <transition name="spinner-move">
      <div v-show="$store.state.doc.loading && !forLogin" class="loading-wrapper">
        <div class="mdl-spinner mdl-js-spinner is-active loading loading-common"></div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    computed: {
      forLogin: function () {
        return this.$route.path === '/login'
      }
    }
  }
</script>

<style scoped>
.loading-wrapper {
  /*height: 0px;*/
  text-align: center;
}
.loading-login-wrapper {
  height: 0px;
  text-align: center;
}
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
    top: -50px;
  }
  50% {
    top: 10px;
  }
  100% {
    top: 0px;
  }
}
@keyframes move-out {
  0% {
    top: 0px;
  }
  50% {
    top: 10px;
  }
  100% {
    top: -50px;
  }
}

.loading {
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 20px;
  position: relative;
  top: 5vh;
  z-index: 5;
}
.loading-common {
  display:block;
  margin: 50px auto;
  top: 0;
}
</style>
