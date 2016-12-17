<template>
  <div class="login-box">
    <my-card class="login-card">
      <div slot="title" class="mdl-card__title login-title">
        <div class="mdl-card__title-text login-title-text">LOGIN</div>
      </div>
      <div slot="media">
      </div>
      <div slot="supporting-text">
      </div>
    <div style="padding: 16px;" slot="actions">
      <form action="#">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" v-bind:class="{'is-upgraded': showText1, 'is-focused': showText1}">
          <input @input="showText1 = true" @focus="showText1 = true" @blur="showText1 = showText1 && account" class="mdl-textfield__input" type="text" id="account" v-model="account">
          <label class="mdl-textfield__label" for="account">用户名</label>
        </div><br>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" v-bind:class="{'is-upgraded': showText2, 'is-focused': showText2}">
          <input @input="showText2 = true" @focus="showText2 = true" @blur="showText2 = showText2 && pass" class="mdl-textfield__input" type="password" id="pass" v-model="pass">
          <label class="mdl-textfield__label" for="pass">密码</label>
        </div>
        <div  class="login-btn-group">
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect login-btn" @click.prevent="login()">Go</button>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect login-btn" @click.prevent="reset()">Reset</button><br>
        </div>
      </form>
    </div>
    </my-card>
  </div>
</template>

<script>
  import Card from '../utils/Card'
  import * as types from '../../vuex/mutation_types'

  export default {
    components: {
      'my-card': Card
    },
    data () {
      return {
        account: '',
        pass: '',
        showText1: false,
        showText2: false
      }
    },
    methods: {
      login () {
        this.$store.commit(types.SET_LOADING, true)

        // design by vuex
        // this.$store.dispatch('setBaseInfo', {
        //   data: {
        //     account: this.account,
        //     pass: this.pass
        //   },
        //   callback: {
        //     success: this.success,
        //     fail: this.reset
        //   }
        // })

        // user bomb
        let that = this
        Bmob.User.logIn(this.account, this.pass, {
          success: function (user) {
            // Do stuff after successful login.
            if (user.get('Role') === 2) {
              that.$router.push('/user-info')
            } else {
              that.$store.commit(types.SET_TIP, {
                message: '只有医生有权限登录Web端!',
                actionHandler: function (event) {},
                timeout: 2000,
                actionText: 'Undo'
              })
            }
            that.$store.commit('SET_LOADING', false)
          },
          error: function (user, error) {
            // The login failed. Check error to see why.
            that.$store.commit('SET_LOADING', false)
            that.$store.commit(types.SET_TIP, {
              message: error.message || 'Error!',
              actionHandler: function (event) {},
              timeout: 2000,
              actionText: 'Undo'
            })
          }
        })
      },
      success () {
        this.$router.push('/user-info')
      },
      reset (event) {
        this.account = ''
        this.pass = ''
        this.showText1 = false
        this.showText2 = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-box {
    background-image: url('../../assets/images/Android-Lollipop-wallpapers-Google-Now-Wallpaper-2.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    overflow: hidden;
  }
  .login-card {
    margin: 15vh auto;
    border-radius: 10px;
    overflow: visible;
    max-width: 460px;
    width: 430px;
    padding: 44px 34px 24px 34px;
  }
  .login-card::before {
    content: "";
    width: 100%;
    height: 30px;
    border-radius: 10px;
    position: absolute;
    top: -10px;
    background: rgba(255, 255, 255, .6);
    left: 0;
    transform: scale(.95);
    -webkit-transform: scale(.95);
    -ms-transform: scale(.95);
    z-index: -1;
  }
  .login-title-text {
    color: rgb(63,81,181);
    font-size: 34px;
    font-weight: 700;
    letter-spacing: 2px;
  }
  .login-title-text::before {
    content: "";
    position: absolute;
    left: 0px;
    width: 5px;
    height: 45px;
    background: rgb(63,81,181);
  }
  .login-btn-group {
    text-align: center;
    margin-top: 10px;
    line-height: 84px;
  }
  .login-btn {
    width: 60%;
    background-color: transparent;
    font-weight: 900;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.2);
    line-height: 64px;
    height: auto !important;
    border-width: 3px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.1);
    transition: 0.2s;
  }
  .login-btn:hover {
    color: rgb(63,81,181);
    border-color: rgb(63,81,181);
    transition: 0.2s;
  }
</style>
