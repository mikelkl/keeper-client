<template>
  <div>
    <transition name="spinner-move">
      <div v-show="$store.state.doc.loading" class="loading-wrapper">
        <div class="mdl-spinner mdl-js-spinner is-active loading"></div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.loading-wrapper {
  text-align: center;
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
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 20px;
  position: relative;
  top: 5vh;
  z-index: 5;
  box-shadow: #666 0px 0px 10px;
}
</style>
