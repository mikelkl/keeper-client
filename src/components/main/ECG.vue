<template>
  <div class="mdl-grid content">
    <!-- side panel -->
    <my-card class='mdl-card mdl-cell mdl-cell--12-col'>
      <div slot="title" class="mdl-card__title" style="background:#00ACC1;">
        <h2 class="mdl-card__title-text keeper-title mdl-color-text--white">心电图测量数据</h2>
      </div>
      <div slot="media">
      </div>
      <div slot="supporting-text">
      </div>
      <div slot="actions" class="mdl-card__actions mdl-card--border mdl-grid" style="padding:0px;">
        <div class="mdl-cell--3-col mdl-cell--8-col-tablet mdl-color--grey-100">
          <div style="text-align:center;">
            <h4>心电监测记录</h4>
          </div>
          <hr>
          <ul class="mdl-list">
            <li @click="drawECG(ecg)" v-for="ecg in ECGs" class="mdl-list__item">
              <a href="is-active">
                {{ ecg }}
              </a>
            </li>
            <!--<li class="mdl-list__item">
              <a href="is-active">
                2016/10/16&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15:02&nbsp;>
                </a>
            </li>
            <li class="mdl-list__item">
              <a href="is-active">
                2016/10/16&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15:14&nbsp;>
                </a>
            </li>
            <li class="mdl-list__item">
              <a href="is-active">
                2016/10/16&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15:27&nbsp;>
                </a>
            </li>
            <li class="mdl-list__item">
              <a href="is-active">
                2016/10/16&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15:33&nbsp;>
                </a>
            </li>
            <li class="mdl-list__item">
              <a href="is-active">
                2016/10/16&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15:41&nbsp;>
                </a>
            </li>-->
          </ul>
        </div>
        <div id="container" class="show-chart mdl-cell mdl-cell--9-col"></div>
      </div>
    </my-card>
  </div>
</template>

<script>
  import { SET_TIP } from '../../vuex/mutation_types.js'
  import Card from '../utils/Card'

  export default {
    components: {
      'my-card': Card
    },
    data () {
      return {
        ECGs: this.$store.state.patient.currentPatient ? this.$store.state.patient.currentPatient.get('ecgRecords') : ''
      }
    },
    mounted () {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.drawECG()
    },
    methods: {
      drawECG: function () {
        this.$store.commit('SET_LOADING', true)
        this.$http.get('/static/ecg/2.txt')
          // this.$http.get('http://localhost:5000/api/v1.0/record/2.txt/1')
          .then(function (ret) {
            this.$store.commit('SET_LOADING', false)
            var chart = new Highcharts.Chart({
              chart: {
                renderTo: 'container',
                type: 'line'
              },
              title: {
                text: '患者心电图'
              },
              xAxis: {
                // 一页图里最大显示的横坐标
                max: 1200,
                min: 0
              },
              yAxis: {
                title: {
                  text: '值'
                }
              },
              credits: {
                enabled: false
              },
              // 设置滚动条
              scrollbar: {
                enabled: true
              },
              series: [{
                // data: ret.data.data,
                data: ret.body.split('\n').map(Number), // convert string array to number array
                name: '测量数据'
              }]
            })
          }).catch(err => {
            console.log(err)
            this.$store.commit([SET_TIP], {
              message: err || 'Error!',
              actionHandler: function (event) { },
              timeout: 2000,
              actionText: 'Undo'
            })
          })
      }
    }
  }

</script>

<style scoped>
  .router-link-active {
    color: #fff;
    background: #00ACC1;
  }

  .router-link-active>a {
    color: #fff;
  }

  a {
    text-decoration: none;
    color: #00ACC1;
  }

  .keeper-title {
    padding-left: 15px;
    border-left: 5px solid #00ACC1;
    color: #00ACC1;
    font-weight: 500;
  }
</style>