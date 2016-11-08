<template>
  <transition name="spinner-move">
    <div v-show="$store.state.common.loading">
      <div class="mdl-spinner mdl-js-spinner is-active loading"></div>
    </div>
  </transition>
</template>

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
  display:block;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 20px;
  margin: 50px auto;
}
</style>
