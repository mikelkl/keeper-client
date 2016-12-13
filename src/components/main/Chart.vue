<template>
  <div>
    <span style="display:none;">
      {{collection}}
    </span>
    <div id="container"></div>
  </div>
</template>

<script>
  export default {
    props: ['collection'],
    updated () {
      // props中的值只有在updated钩子中才能正常访问
      this.drawChart()
    },
    methods: {
      drawChart: function () {
        let chart = new Highcharts.Chart({
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
            data: this.collection,
            name: this.$route.params.type
          }]
        })
      }
    }
  }
</script>

<style scoped>
</style>
