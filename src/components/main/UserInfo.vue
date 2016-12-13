<template>
  <div class="mdl-grid content">
    <div class="cards mdl-cell--10-col mdl-cell--1-offset-desktop mdl-cell--0-offset-tablet mdl-grid">
      <my-card class="user-info-card show-chart mdl-cell mdl-cell--12-col">
        <div slot="title">
        </div>
        <div slot="media">
          <div class="mdl-card__media mdl-color--blue-grey-200">
            <div style="height:100px;">&nbsp;</div>
          </div>
        </div>
        <div slot="supporting-text">
        </div>
        <div slot="actions">
          <div class="keeper-grid">
            <div class="avatar-wrapper" @mouseover="showMask = true" @mouseout="showMask = false">
              <img v-bind:src="headUrl" width="160" height="160">
              <transition name="fade">
                <div class="mask" v-show="showMask">
                  <i class="material-icons" style="color:#fff;">camera</i>
                </div>
              </transition>
            </div>
            <div class="user-text-info-group">
              <div class="user-intro">
                <span class="username">{{ username }}</span>
                <span class="professional">{{ professional }}</span>
              </div>
              <div class="detail-intro">
                <div>
                  <span class="title">科室</span>
                  <span class="content">{{ administrative }}</span>
                </div>
                <div>
                  <span class="title">医院</span>
                  <span class="content">{{ hospital }}</span>
                </div>
                <div>
                  <span class="title">地址</span>
                  <span class="content">{{ province }}&nbsp;{{ county }}&nbsp;{{ city }}&nbsp;</span>
                </div>
                <span class="title">简介</span>
                <span class="content">{{ introduction }}</span>
              </div>
              <button class="mdl-button mdl-js-button mdl-js-ripple-effect big-btn">编辑个人资料</button>
            </div>
          </div>
        </div>
      </my-card>
    </div>
    <div class="separator mdl-cell--1-col"></div>
    <div class="mdl-cell--10-col mdl-cell--1-offset-desktop mdl-cell--0-offset-tablet mdl-grid">
      <my-card class="user-info-card mdl-cell mdl-cell--9-col mdl-cell--top" style="margin-right:0px;">
        <div slot="title">
        </div>
        <div slot="media">
        </div>
        <div slot="supporting-text">
        </div>
        <div slot="actions">
        </div>
      </my-card>
      <my-card class="user-info-card mdl-cell mdl-cell--3-col mdl-cell--top">
        <div slot="title" class="mdl-card__title  mdl-card--border">
          <h2 class="mdl-card__title-text">个人成就</h2>
        </div>
        <div slot="media">
        </div>
        <div slot="supporting-text">
        </div>
        <div slot="actions" class="mdl-card__actions">
        </div>
      </my-card>
    </div>
  </div>
</template>

<script>
  import Card from '../utils/Card'
  export default {
    components: {
      'my-card': Card
    },
    data () {
      return {
        username: Bmob.User.current() ? Bmob.User.current().get('username') : '请先登录',
        professional: Bmob.User.current() ? Bmob.User.current().get('professional') : '',
        administrative: Bmob.User.current() ? Bmob.User.current().get('administrative') : '',
        introduction: Bmob.User.current() ? Bmob.User.current().get('introduction') : '',
        headUrl: Bmob.User.current() ? Bmob.User.current().get('headUrl') : '/static/images/user.jpg',
        email: Bmob.User.current().get('email') || 'hello@example.com',
        role: Bmob.User.current() ? (Bmob.User.current().get('Role') === 1 ? '病人' : '医生') : '',
        hospital: '',
        county: '',
        city: '',
        province: '',
        showMask: false
      }
    },
    beforeRouteEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当钩子执行前，组件实例还没被创建
      let Hospital = Bmob.Object.extend('HospitalBean')
        // 创建查询对象，入口参数是对象类的实例
      var query = new Bmob.Query(Hospital)
        // 查询单条数据，第一个参数是这条数据的objectId值
      query.get(Bmob.User.current().get('hospital')['objectId'], {
        success: function (result) {
          // 查询成功，调用get方法获取对应属性的值
          next(vm => {
            vm.hospital = result.get('name')
            vm.county = result.get('county')
            vm.city = result.get('city')
            vm.province = result.get('province')
          })
        },
        error: function (object, error) {
          // 查询失败
        }
      })
    },
    // 路由改变前，组件就已经渲染完了
    // 逻辑稍稍不同
    watch: {
      $route () {
        this.hospital = null

        let Hospital = Bmob.Object.extend('HospitalBean')
          // 创建查询对象，入口参数是对象类的实例
        var query = new Bmob.Query(Hospital)
          // 查询单条数据，第一个参数是这条数据的objectId值
        query.get(Bmob.User.current().get('hospital')['objectId'], {
          success: function (result) {
            // 查询成功，调用get方法获取对应属性的值
            this.hospital = result.get('name')
          },
          error: function (object, error) {
            // 查询失败
          }
        })
      }
    }
  }
</script>

<style scoped>
  .keeper-grid {
    padding: 16px;
    display: flex;
    flex-direction: row;
  }

  .avatar-wrapper {
    position: absolute;
    top: 80px;
    border: 4px solid #fff;
    border-radius: 8px;
  }

  .user-text-info-group {
    margin-left: 192px;
    line-height: 30px;
    width: 100%;
  }

  .username {
    font-size: 26px;
    font-weight: 500;
    color: #404040;
  }

  .professional {
    margin-left: 12px;
    font-size: 18px;
  }

  .detail-intro {
    font-size: 14px;
    line-height: 28px;
    color: #404040;
    margin-top: 8px;
  }

  .title {
    margin-right: 36px;
  }

  .big-btn {
    float: right;
    margin-top: 10px;
    padding: 0px 36px;
    border: 1px solid #b0bec5;
    color: #b0bec5;
    background-color: transparent;
    transition: .3s;
  }

  .big-btn:hover {
    background-color: rgba(13, 121, 209, .06);
    transition: .3s
  }

  .mask {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
    opacity: 0.4;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
