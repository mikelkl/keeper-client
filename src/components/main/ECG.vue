<template>
  <!-- <drawer> -->
    <!-- <div class="mdl-layout__header-row mdl-color--cyan-600" slot="bottom-header">
      <span class="mdl-layout-title mdl-color-text--white">心电图记录</span>
    </div> -->
    <div class="mdl-grid content common-content">
      <div class='mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col'>
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text keeper-title">心电图测量数据</h2>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <div id="container" class="show-chart"></div>
        </div>
      </div>
    </div>
  <!-- </drawer> -->
</template>

<script>
  // import Drawer from '../utils/Drawer'

  export default {
    // components: {
    //   'drawer': Drawer
    // },
    created () {
        // 组件创建完后获取数据，
        // 此时 data 已经被 observed 了
      this.drawECG()
    },
    methods: {
      drawECG: function () {
        // this.loading = true
        this.$store.commit('SET_LOADING', true)
        this.$http.get('http://localhost:5000/api/v1.0/record/2.txt/1')
        .then(function (ret) {
          this.$store.commit('SET_LOADING', false)
          // this.loading = false
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
              data: ret.data.data,
              name: '测量数据'
            }]
          })
        })
        .then(function (err) {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
.keeper-title {
  padding-left: 15px;
  border-left: 5px solid #00ACC1;
  color: #00ACC1;
  font-weight: 500;
}
</style>
