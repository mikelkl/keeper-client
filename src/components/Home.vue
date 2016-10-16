<template>
  <div class="demo-layout mdl-layout mdl-js-layout mdl-color--grey-100">
    <div class="demo-ribbon">
      <header class="mdl-grid">
        <img src="../assets/images/logo.png" class="mdl-cell--2-offset mdl-cell--1-offset-tablet">
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-cell--6-offset mdl-cell--4-offset-tablet mdl-cell--1-offset-phone">了解更多<i class="material-icons" role="presentation">arrow_drop_down</i></button>
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color--black">联系我们</button>
      </header>
      <div class="intro mdl-cell--8-col mdl-cell--6-col-tablet mdl-cell--2-offset mdl-cell--1-offset-tablet">
        <h1>Keeper - 心电医疗云平台</h1>
        <h4>完整的生态体系</h4>
        <h6>Windows&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;Android&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;Web</h6>
        <div class="icons">
          <img class="icon" src="../assets/images/icons/github.svg">
          <img class="icon" src="../assets/images/icons/weibo.svg">
          <img class="icon" src="../assets/images/icons/in.svg">
          <img class="icon" src="../assets/images/icons/facebook.svg">
          <img class="icon" src="../assets/images/icons/twitter.svg">
          <img class="icon" src="../assets/images/icons/skype.svg">
        </div>
        <h7>一款基于心电监护终端和医疗云平台的在线心电医疗平台，通过特征采集，数据分析，挂号复诊，应急抢救等功能，辅助医生，
          帮助心脏病人早日康复一款基于心电监护终端和医疗云平台的在线心电医疗平台，通过特征采集，数据分析，挂号复诊，应急抢救等功能，
          辅助医生，帮助心脏病人早日康复
        </h7>
      </div>
    </div>
    <main class="demo-main mdl-layout__content">
      <div class="demo-container mdl-grid">
        <div class="demo-content mdl-color--white mdl-shadow--2dp content mdl-color-text--grey-800 mdl-cell mdl-cell--10-col center">
          <div class="mdl-card mdl-shadow--8dp mdl-cell--10-col mdl-cell--7-col-tablet center">
            <div class="mdl-card__title mdl-color-text--indigo-400">
              <h3 style="border-bottom: solid 2px;">请先登陆</h3>
            </div>
            <form action="#">
              <div class="mdl-card__supporting-text">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input class="mdl-textfield__input" type="text" id="account" v-model="user.account">
                  <label class="mdl-textfield__label" for="account">用户名</label>
                </div><br>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input class="mdl-textfield__input" type="password" id="pass" v-model="user.pass">
                  <label class="mdl-textfield__label" for="pass">密码</label>
                </div>
              </div>
              <div class="mdl-card__actions">
              <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color--indigo-400 mdl-color-text--white big-btn" @click="login()">登陆</button>
              </div>
            </form>
          </div>
          <img class="img-above mdl-cell--1-offset mdl-cell--1-offset-tablet" src="../assets/images/doctor.png" alt="" />
          <h6 style="margin-top: 15vh;">想要加入我们？</h6>
          <div style="margin-top: 5vh;">
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color--black mdl-color-text--white big-btn" style="margin-right:8px;">了解更多</button>
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color--indigo-400 mdl-color-text--white big-btn">联系我们</button>
          </div>
        </div>
      </div>
      <div class="more">
        <h6 style="margin-top: 15vh;">观看演示</h6>
        <div class="card-square mdl-card mdl-shadow--8dp mdl-cell--3-col" style="margin-right: 30px;margin-top: 5vh;">
          <div class="mdl-card__title mdl-card--expand">
            <h2 class="mdl-card__title-text">Demo</h2>
          </div>
          <div class="mdl-card__supporting-text">
            the the the the the the the the the the the
            the the the the
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              查看详情
            </a>
          </div>
        </div>
        <div class="card-square mdl-card mdl-cell--3-col">
          <div class="mdl-card__title mdl-card--expand">
            <h2 class="mdl-card__title-text">Demo</h2>
          </div>
          <div class="mdl-card__supporting-text">
            the the the the the the the the the the the the
            the the the the the the
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              查看详情
            </a>
          </div>
        </div>
      </div>
      <footer class="demo-footer mdl-mini-footer">
        <div class="mdl-mini-footer--left-section">
          <ul class="mdl-mini-footer--link-list">
            @CopyRight Hammer
          </ul>
        </div>
      </footer>
    </main>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {}
      }
    },
    methods: {
      login () {
        this.$http.post('http://www.163.com', {
          account: this.user.account,
          pass: this.user.pass
        }).then(function (ret) {
          console.log(ret)
          let user = this.user
          console.log(user)
          // this.$dispatch('timeUpdate', timeEntry)
          this.$store.commit('login', user)
          this.user = {}
        })
      }
    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo-ribbon {
  width: 100%;
  height: 90%;
  background-color: #5C6BC0;
  font-family: "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, Verdana, sans-serif;
  -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
          flex-shrink: 0;
}

header {
  width: 100%;
  padding-top: 20px;
  overflow: visible;
}

header img {
  width: 48px;
  height: 48px;
}

header button {
  color: white;
  font-weight: 400;
}

.intro {
  color: white;
  padding-top: 5vh;
}

.intro h1{
  line-height: 6vh;
}

.icons {
  line-height: 12vh;
}
.intro .icons .icon{
   width: 24px;
   height: 24px;
   margin-right: 8px;
}

.demo-main {
  margin-top: -15vh;
  text-align:center;
  -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
          flex-shrink: 0;
}

@media screen and (max-height: 600px) {
  .demo-main {
    margin-top: 5vh;
    transition: 1s;
  }
}

@media screen and (min-height: 600px) {
  .demo-main {
    transition: 1s;
  }
}


.demo-container {
  max-width: 1600px;
  width: calc(100% - 16px);
  margin: 0 auto;
}

.demo-content {
  border-radius: 2px;
  padding: 80px 56px;
  /*margin: 0 auto;*/
  margin-bottom: 80px;
  position:relative;
  animation:move-up 1s ease-out;
}

@keyframes move-up {
  0% {top:55vh;}
  100% {top:0px;}
}

.center {
  margin: 0 auto;
}

.big-btn {
  padding: 0px 36px;
}

.img-above {
  position: absolute;
  top: 15vh;
  z-index: 1;
  height: 400px;
}

.more {
  margin: 10vh;
}

.mdl-card {
  text-align: left;
}

.demo-content .mdl-card {
  padding-left: 75px;
}

.more .mdl-card {
  display: inline-block;
}

.card-square > .mdl-card__title {
  color: #fff;
  background:
    url('../assets/images/dog.png') bottom right 15% no-repeat #46B6AC;
}

.card-square > .mdl-card--expand {
  height: 199px;
}

.demo-layout.is-small-screen .demo-content {
  padding: 40px 28px;
}

.demo-content h3 {
  margin-top: 48px;
}

.demo-footer {
  padding-left: 40px;
}

.demo-footer .mdl-mini-footer--link-list a {
  font-size: 13px;
}
</style>
