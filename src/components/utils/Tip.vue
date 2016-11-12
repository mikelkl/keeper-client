<template>
  <div id="snackbar" class="mdl-js-snackbar mdl-snackbar">
    <div class="mdl-snackbar__text"></div>
    <button class="mdl-snackbar__action" type="button"></button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // 将Store.state绑定在data上
        data: this.$store.state
      }
    },
    watch: {
      'data.doc.tip': 'showTip'
    },
    methods: {
      showTip () {
        let snackbarContainer = document.querySelector('#snackbar')
        snackbarContainer.MaterialSnackbar.showSnackbar(this.data.doc.tip)
      }
    }
  }
</script>
