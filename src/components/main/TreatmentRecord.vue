<template>
  <div class="mdl-grid content">
    <!-- side panel -->
    <div class="cards mdl-cell mdl-cell--3-col mdl-cell--8-col-tablet mdl-grid">
      <my-card class="options mdl-card mdl-color--deep-purple-500">
        <div slot="title">
        </div>
        <div slot="media">
        </div>
        <div slot="supporting-text" class="mdl-card__supporting-text mdl-color-text--blue-grey-50">
          <h3>就诊记录</h3>
          <ul class="mdl-list mdl-color-text--blue-grey-50">
            <li @click="getDetail(record)" v-for="record in treatmentRecords" class="mdl-list__item mdl-list__item--three-line mdl-color-text--blue-grey-50 keeper-list__item_font">
              <span>
                <span><b>患者：{{ record.get('patient').get('username') }}</b></span>
              <span style="display:block;">
                  就诊原因：{{ record.get('treatmentReason').split('，')[0] }}&nbsp;……
                </span>
              <span><em>就诊日期：{{ record.get('date') }}</em></span>
              </span>
            </li>
          </ul>
        </div>
        <div slot="actions" class="mdl-card__actions mdl-card--border">
          <a href="#" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--blue-grey-50">更多信息</a>
          <div class="mdl-layout-spacer"></div>
          <i class="material-icons">expand_more</i>
        </div>
      </my-card>
      <div class="separator mdl-cell--1-col"></div>
      <my-card class="mdl-card horizon-center">
        <div slot="title" class="mdl-card__title patient-banner">
          <h2 class="mdl-card__title-text keeper-title mdl-color-text--white">病人资料</h2>
        </div>
        <div slot="media">
        </div>
        <div slot="supporting-text">
        </div>
        <div slot="actions" class="mdl-card__actions mdl-card--border mdl-color-text--grey-600">
          <img v-bind:src="headUrl" class="aid-avatar">
          <p class="patient-name">{{ patientUsername }}</p>
          <ul class="mdl-list">
            <li class="mdl-list__item">
              <span class="mdl-list__item-primary-content">
                年龄：{{ age }}
              </span>
            </li>
            <li class="mdl-list__item">
              <span class="mdl-list__item-primary-content">
                性别：{{ sex }}
              </span>
            </li>
            <li class="mdl-list__item">
              <span class="mdl-list__item-primary-content">
                手机：{{ mobilePhoneNumber }}
              </span>
            </li>
          </ul>
        </div>
      </my-card>
    </div>
    <!-- main panel -->
    <div class="cards mdl-cell mdl-cell--9-col mdl-grid">
      <my-card class='mdl-card mdl-cell--12-col'>
        <div slot="title" class="mdl-card__title mdl-color--deep-purple-500">
          <h2 class="mdl-card__title-text keeper-title mdl-color-text--white">就诊详情</h2>
        </div>
        <div slot="media">
        </div>
        <div slot="supporting-text">
        </div>
        <div slot="actions">
          <div v-if="currentRecord" class="mdl-card__actions mdl-card--border">
            <div class="mdl-grid">
              <div class="mdl-cell mdl-cell--3-col" style="text-align:center;">
                <h4><img src="/static/images/37.png" width=50 heigth=50 class="img-rounded" alt="">就诊日期</h4>
                <span class="text-muted">{{ currentRecord.get('date') }}</span>
              </div>
              <div class="mdl-cell mdl-cell--3-col" style="text-align:center;">
                <h4><img src="/static/images/72.png" width=50 heigth=50 class="img-rounded" alt="">就诊医院</h4>
                <span class="text-muted">四川大学华西医院</span>
              </div>
              <div class="mdl-cell mdl-cell--3-col" style="text-align:center;">
                <h4><img src="/static/images/71.png" width=50 heigth=50 class="img-rounded" alt="">就诊医生</h4>
                <span class="text-muted">{{ currentRecord.get('doctor').get('username') }}</span>
              </div>
              <div class="mdl-cell mdl-cell--3-col" style="text-align:center;">
                <h4><img src="/static/images/76.png" width=50 heigth=50 class="img-rounded" alt="">诊断科室</h4>
                <span class="text-muted">{{ currentRecord.get('doctor').get('administrative') }}</span>
              </div>
            </div>
            <div class="mdl-grid">
              <table class="mdl-data-table mdl-js-data-table mdl-cell mdl-cell--12-col">
                <thead>
                  <tr>
                    <th class="mdl-data-table__cell--non-numeric">医生职称</th>
                    <th class="mdl-data-table__cell--non-numeric">病情诊断</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="mdl-data-table__cell--non-numeric">{{ currentRecord.get('doctor').get('professional') }}</td>
                    <td class="mdl-data-table__cell--non-numeric" style="white-space: normal;">
                      {{ currentRecord.get('treatmentReason') }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div v-else class="mdl-color--deep-purple-500 keeper-empty-state" style="height: 400px;">
            <h5 class="mdl-color-text--white" style="align-self: center;opacity:0.87;">请先选择一项记录！</h5>
            <img src="/static/images/doctor.png" alt="" style="align-self: center;height:250px;">
            <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
              <i class="material-icons">add</i>
            </button>
          </div>
        </div>
      </my-card>
      <!-- <div class="separator mdl-cell--1-col"></div> -->
      <my-card class='mdl-card mdl-cell--12-col'>
        <div slot="title" class="mdl-card__title">
          <h2 class="mdl-card__title-text keeper-title">诊后随访</h2>
        </div>
        <div slot="media">
        </div>
        <div slot="supporting-text">
        </div>
        <div slot="actions" class="mdl-card__actions mdl-grid">
          <table class="mdl-data-table mdl-js-data-table mdl-cell mdl-cell--12-col">
            <tbody>
              <tr v-for="(item, index) in followups">
                <th class="mdl-data-table__cell--non-numeric">{{ item.get('date') }}</th>
                <td class="mdl-data-table__cell--non-numeric">
                  <router-link :to="{ name: 'followup-info', params: { id: index }}" class="mdl-color-text--deep-purple-500">诊后第{{ index + 1 }}次随访</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </my-card>
    </div>
  </div>
</template>

<script>
  import Card from '../utils/Card'
  import { SET_FOLLOWUP, SET_MODAL, SET_MODAL_MSG } from '../../vuex/mutation_types'

  export default {
    components: {
      'my-card': Card
    },
    data () {
      return {
        treatmentRecords: this.$store.state.patient.treatmentRecords,
        currentRecord: null,
        followups: null,
        headUrl: this.$store.state.patient.currentPatient ? this.$store.state.patient.currentPatient.get('headUrl') : '/static/images/user.jpg',
        patientUsername: this.$store.state.patient.currentPatient ? this.$store.state.patient.currentPatient.get('username') : '请先搜索病人',
        age: this.$store.state.patient.currentPatient ? this.$store.state.patient.currentPatient.get('age') : '',
        sex: this.$store.state.patient.currentPatient ? (this.$store.state.patient.currentPatient.get('sex') === 0 ? '男' : '女') : '',
        mobilePhoneNumber: this.$store.state.patient.currentPatient ? this.$store.state.patient.currentPatient.get('mobilePhoneNumber') : ''
      }
    },
    methods: {
      getDetail (record) {
        this.currentRecord = record
        // this.headUrl = record.get('patient').get('headUrl')
        // this.patientUsername = record.get('patient').get('username')
        // this.age = record.get('patient').get('age')
        // this.sex = record.get('patient').get('sex')
        // this.mobilePhoneNumber = record.get('patient').get('mobilePhoneNumber')

        // 查询诊后随访记录
        let Followup = Bmob.Object.extend('TreatmentFollowup')
        let query = new Bmob.Query(Followup)
        query.equalTo('treatment', record)
        query.ascending('date')
        query.include('treatment')

        let that = this
        query.find({
          success: function (followups) {
            console.info('共查询到 ' + followups.length + ' Followup条记录.')
            that.followups = followups
            that.$store.commit([SET_FOLLOWUP], followups)
          },
          error: function (error) {
            console.log(error.message)
          }
        })
      }
    },
    // beforeRouteEnter (to, from, next) {
    //   // 在渲染该组件的对应路由被 confirm 前调用
    //   // 不！能！获取组件实例 `this`
    //   // 因为当钩子执行前，组件实例还没被创建
    //   let TreatmentRecord = Bmob.Object.extend('TreatmentBean')

    //   let query = new Bmob.Query(TreatmentRecord)
    //   query.equalTo('doctor', Bmob.User.current())
    //   query.include('patient')
    //   query.include('doctor')

    //   query.find({
    //     success: function (results) {
    //       next(vm => {
    //         console.log('共查询到 ' + results.length + ' 条记录.')
    //         vm.treatmentRecords = results
    //         // vm.getDetail(results[0])
    //       })
    //     },
    //     error: function (error) {
    //       console.log(error.message)
    //     }
    //   })
    // },
    beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
      if (to.path === '/treatment-record/followup-info/-1') {
        this.$store.commit([SET_MODAL], true)
        this.$store.commit([SET_MODAL_MSG], {
          title: '警告',
          body: '请先选中一条诊后随访！'
        })
        next(false)
      } else {
        next()
      }
    }
  }
</script>

<style scoped>
  .patient-banner {
    height: 150px;
    background-image: url('/static/images/iceland.jpg');
    background-position: center;
    background-size: cover;
  }

  .aid-avatar {
    width: 100px;
    position: absolute;
    ;
    top: 100px;
    left: 50%;
    margin-left: -50px;
    border-radius: 100%;
    border: 3px solid #fff;
  }

  .patient-name {
    margin-top: 50px;
    text-align: center;
  }

  .text-center {
    text-align: center;
  }

  .text-muted {
    color: #777;
    font-size: 1em;
  }

  .keeper-title {
    align-self: flex-start;
    padding-left: 15px;
    border-left: 5px solid #673ab7;
    color: #673ab7;
    font-weight: 500;
  }

  .keeper-list__item_font {
    font-size: small;
  }
  .keeper-list__item_font:hover {
    background: rgba(0,0,0,0.4);
    cursor: pointer;
  }
  .keeper-empty-state {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
</style>
