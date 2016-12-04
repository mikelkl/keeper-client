<template>
  <div id="app">
    <div class="layout mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <!-- <div class="layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header"> -->
      <my-header v-show="showHeaderDrawer" @show="showModal = true"></my-header>
      <my-drawer v-show="showHeaderDrawer"></my-drawer>
      <main class="mdl-layout__content mdl-color--grey-100 my-main">
        <my-loading></my-loading>
        <my-modal v-if="showModal" @close="showModal = false">
          <h3 slot="header">添加就诊记录</h3>
          <form action="#" slot="body">
            <!-- <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="account">
              <label class="mdl-textfield__label" for="account">用户名</label>
            </div><br>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="password" id="pass">
              <label class="mdl-textfield__label" for="pass">密码</label>
            </div> -->
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" v-bind:class="{'is-upgraded': showText1, 'is-focused': showText1}">
              <input @input="showText1 = true" @focus="showText1 = true" @blur="showText1 = showText1 && record.date" class="mdl-textfield__input" type="text" id="date" v-model="record.date">
              <label class="mdl-textfield__label" for="date">就诊日期</label>
            </div><br>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" v-bind:class="{'is-upgraded': showText2, 'is-focused': showText2}">
              <input @input="showText2 = true" @focus="showText2 = true" @blur="showText2 = showText2 && record.hospital" class="mdl-textfield__input" type="text" id="hospital" v-model="record.hospital">
              <label class="mdl-textfield__label" for="hospital">就诊医院</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" v-bind:class="{'is-upgraded': showText3, 'is-focused': showText3}">
              <input @input="showText3 = true" @focus="showText3 = true" @blur="showText3 = showText3 && record.doctor" class="mdl-textfield__input" type="text" id="doctor" v-model="record.doctor">
              <label class="mdl-textfield__label" for="doctor">就诊医生</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" v-bind:class="{'is-upgraded': showText4, 'is-focused': showText4}">
              <input @input="showText4 = true" @focus="showText4 = true" @blur="showText4 = showText4 && record.office" class="mdl-textfield__input" type="text" id="office" v-model="record.office">
              <label class="mdl-textfield__label" for="office">就诊科室</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" v-bind:class="{'is-upgraded': showText5, 'is-focused': showText5}">
              <input @input="showText5 = true" @focus="showText5 = true" @blur="showText5 = showText5 && record.diagnose" class="mdl-textfield__input" type="text" id="diagnose" v-model="record.diagnose">
              <label class="mdl-textfield__label" for="diagnose">病情诊断</label>
            </div>
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" @click.prevent="">提交</button>
            <input type="reset" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" value="取消" @click.prevent="reset()">
          </form>
          <div slot="footer">
          </div>
        </my-modal>
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

  const Header = resolve => require(['./components/common/Header'], resolve)
  const Drawer = resolve => require(['./components/common/Drawer'], resolve)
  const Loading = resolve => require(['./components/utils/Loading'], resolve)
  const Tip = resolve => require(['./components/utils/Tip'], resolve)
  const Modal = resolve => require(['./components/utils/Modal'], resolve)

  export default {
    components: {
      'my-header': Header,
      'my-loading': Loading,
      'my-tip': Tip,
      'my-drawer': Drawer,
      'my-modal': Modal
    },
    computed: {
      showHeaderDrawer: function () {
        return this.$route.name !== 'home' && this.$route.path !== '/login'
      }
    },
    data () {
      return {
        record: {},
        showModal: false,
        showText1: false,
        showText2: false,
        showText3: false,
        showText4: false,
        showText5: false
      }
    },
    methods: {
      reset () {
        this.record = {}
        this.showText1 = this.showText2 = this.showText3 = this.showText4 = this.showText5 = false
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
