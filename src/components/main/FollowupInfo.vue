<template>
  <div class="mdl-grid content">
    <my-card class='mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col'>
      <div slot="title" class="mdl-card__title" style="display: none;">
      </div>
      <div slot="media">
      </div>
      <div slot="supporting-text">
      </div>
      <div slot="actions" class="mdl-card__actions mdl-grid" style="padding:0px;">
        <div class="mdl-cell--3-col mdl-color--grey-100">
          <div style="text-align:center;">
            <h4>诊后第1次随访</h4>
            <span class="text-muted">2015-11-24</span>
          </div>
          <hr>
          <ul class="mdl-list">
            <li class="mdl-list__item router-link-active">
              <a href="is-active">
                  乳酸脱氢酶(iu/L)&nbsp;&nbsp;&nbsp;&nbsp;200&nbsp;>
                </a>
            </li>
            <li class="mdl-list__item">
              <a href="is-active">
                  谷草转氨酶(iu/L)&nbsp;&nbsp;&nbsp;&nbsp;30.4&nbsp;>
                </a>
            </li>
            <li class="mdl-list__item">
              <a href="is-active">
                  谷丙转氨酶(iu/L)&nbsp;&nbsp;&nbsp;&nbsp;28.5&nbsp;>
                </a>
            </li>
            <li class="mdl-list__item">
              <a href="is-active">
                  磷酸肌酸激酶同酶(iu/L)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21.3&nbsp;>
                </a>
            </li>
            <li class="mdl-list__item">
              <a href="is-active">
                  外周血白细胞总数&nbsp;&nbsp;4^10&nbsp;>
                </a>
            </li>
            <li class="mdl-list__item">
              <a href="is-active">
                  中性粒细胞比率&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;61.2%&nbsp;>
                </a>
            </li>
          </ul>
        </div>
        <div id="container" class="mdl-cell mdl-cell--9-col"></div>
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
    created () {
        // 组件创建完后获取数据，
        // 此时 data 已经被 observed 了
      this.drawECG()
    },
    methods: {
      drawECG: function () {
        this.$store.commit('SET_LOADING', true)
        this.$http.get('http://localhost:5000/api/v1.0/record/2.txt/1')
        .then(function (ret) {
          this.$store.commit('SET_LOADING', false)
          console.info(Highcharts)
          var chart = new Highcharts.Chart({
            chart: {
              renderTo: 'container',
              type: 'line'
            },
            title: {
              text: '数据走势图'
            },
            xAxis: {
              // 一页图里最大显示的横坐标
              max: 6,
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
              data: [280, 260, 200, 220, 180, 200, 190],
              name: '乳酸脱氢酶'
            }]
          })
        }).catch(err => {
          console.log(err)
          this.$store.commit([SET_TIP], {
            message: err || 'Error!',
            actionHandler: function (event) {},
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
  background: #337ab7;
}
.router-link-active > a {
  color: #fff;
}
a {
  text-decoration: none;
  color: #337ab7;
}
.text-muted {
  color: #777;
  font-size: 10px;
}
</style>
