<template>
  <header class="header mdl-layout__header tab-header mdl-color--grey-100 mdl-layout__header--waterfall mdl-layout__header--waterfall-hide-top keeper-header-shadow">
  <!-- <header class="header mdl-layout__header tab-header mdl-color--white"> -->
    <div class="mdl-layout__header-row secondary-text my-underline">
      <img src="../../assets/images/logo2.png" width="30" height="30" style="margin-right: 5px;">
      <span class="mdl-layout-title primary-text">Keeper - 心电医疗服务云平台</span>
      <div class="mdl-layout-spacer"></div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
        <label class="mdl-button mdl-js-button mdl-button--icon" for="search">
          <i class="material-icons inactive-icon" id="search-icon">search</i>
        </label>
        <div class="mdl-textfield__expandable-holder space-right">
          <input class="mdl-textfield__input" type="text" id="search" v-model="searchUsername" @keydown="search()">
          <label class="mdl-textfield__label" for="search">输入病人姓名...</label>
        </div>
      </div>
      <div class="mdl-tooltip" data-mdl-for="search-icon">
        搜索病人
      </div>
      <i id="notifications" class="material-icons inactive-icon">notifications_none</i>
      <div class="mdl-tooltip" data-mdl-for="notifications">
        You have no unread notifications
      </div>
      <button id="add-group" class="mdl-button mdl-js-button mdl-button--icon add-group space-right">
        <i class="material-icons inactive-icon">add</i>
        <i class="material-icons inactive-icon" style="margin-left:15px;">arrow_drop_down</i>
      </button>
      <div class="mdl-tooltip" data-mdl-for="add-group">
      Create new ...
      </div>
      <!-- <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
          for="add-group"> -->
        <!-- emit event on the App.vue -->
        <!-- <li class="mdl-menu__item" @click="$emit('show')">New record</li>
      </ul> -->
      <img id="s-avatar" v-bind:src="headUrl" class="s-avatar">
      <div class="mdl-tooltip" data-mdl-for="s-avatar">
      View profile and more
      </div>
      <!-- <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
          for="s-avatar">
          <li class="mdl-menu__item mdl-menu__item--full-bleed-divider">Another Action</li>
      </ul> -->
    </div>
    <!-- Tabs -->
    <div class="mdl-layout__tab-bar mdl-js-ripple-effect my-tab-bar mdl-color--grey-100">
      <router-link to="/treatment-record" class="mdl-layout__tab secondary-text">就诊记录</router-link>
      <span v-if="$store.state.patient.currentPatient">
        <router-link to="/ecg" class="mdl-layout__tab secondary-text">心电图记录</router-link>
        <router-link to="/aid" class="mdl-layout__tab secondary-text">一键急救</router-link>
      </span>
      <router-link to="/user-info" class="mdl-layout__tab secondary-text">个人信息</router-link>
    </div>

  </header>
</template>

<script>
  import * as types from '../../vuex/mutation_types'

  export default {
    data () {
      return {
        headUrl: Bmob.User.current() ? Bmob.User.current().get('headUrl') : '/static/images/user.jpg',
        searchUsername: ''
      }
    },
    methods: {
      search () {
        // console.log(event.keyCode)
        if (event.keyCode === 13) {
          let query = new Bmob.Query(Bmob.User)
          query.equalTo('username', this.searchUsername)

          // 查询单条数据
          let that = this
          query.first({
            success: function (user) {
              // Do stuff
              if (user.get('Role') === 1) {
                that.$store.commit(types.SET_CURRENT_PATIENT, user)
                that.$router.push('/ecg')
              } else {
                that.$store.commit(types.SET_TIP, {
                  message: '只支持搜索病人!',
                  actionHandler: function (event) {},
                  timeout: 2000,
                  actionText: 'Undo'
                })
              }
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
.keeper-header-shadow {
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
}
.is-compact {
  max-height: 49px;
}
/*.mdl-menu {
  padding:0px 0px;
}*/
/*.avatar-menu-bottom {
  background: #f5f5f5;
  width: 100px;
  padding: 15px;
}*/
.add-group {
  min-width: 52px;
}
.space-right {
  margin-right: 16px;
}
.s-avatar {
  width: 27px;
  height: 27px;
  border-radius: 100%;
  cursor: pointer;
}
.s-avatar:focus {
  outline: none;
}
.my-underline {
  border-bottom: 1px solid #e8e8e8;
}
.tab-header {
  min-height: 0px;
}
.my-tab-bar {
  justify-content: center;
  height: auto;
  padding: 0;
}
.router-link-active {
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
}
.router-link-active:after {
  height: 2px;
  width: 100%;
  display: block;
  content: " ";
  bottom: 0;
  left: 0;
  position: absolute;
  background: rgb(255,64,129);
  animation: border-expand 0.2s cubic-bezier(0.4, 0, 0.4, 1) 0.01s alternate forwards;
  transition: all 1s cubic-bezier(0.4, 0, 1, 1);
}
label.mdl-button.mdl-js-button.mdl-button--icon {
  top: -20px
}
</style>
