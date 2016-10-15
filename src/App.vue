<template>
  <div id="app">
    <drawer v-if="$store.state.isLogin"></drawer>
    <home v-else></home>
  </div>
</template>

<script>
  import Drawer from './components/Drawer'
  import Home from './components/Home'

  export default {
    components: {
      'drawer': Drawer,
      'home': Home
    }
  }
</script>
