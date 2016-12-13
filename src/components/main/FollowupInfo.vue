<template>
  <div class="mdl-grid content">
    <my-card class='mdl-card mdl-shadow--2dp mdl-cell mdl-cell--9-col mdl-cell--top'>
      <div slot="title" class="mdl-card__title" style="display: none;">
      </div>
      <div slot="media">
      </div>
      <div slot="supporting-text">
      </div>
      <div slot="actions" class="mdl-card__actions mdl-grid" style="padding:0px;">
        <div class="mdl-cell--3-col mdl-cell--8-col-tablet mdl-color--grey-100">
          <div style="text-align:center;">
            <h4>诊后第{{ index + 1 }}次随访</h4>
            <span class="text-muted">{{ followup.get('date') }}</span>
          </div>
          <hr>
          <ul class="mdl-list" @click="drawTrend">
            <router-link class="mdl-list__item" id="AST" :to="linkAST">
              谷草转氨酶(iu/L) >
            </router-link>
            <router-link class="mdl-list__item" id="ALT" :to="linkALT">
              谷丙转氨酶(iu/L) >
            </router-link>
            <router-link class="mdl-list__item" id="CK" :to="linkCK">
              肌酸激酶(iu/L) >
            </router-link>
            <router-link class="mdl-list__item" id="CKMB" :to="linkCKMB">
              磷酸肌酸激酶同工酶(iu/L) >
            </router-link>
            <router-link class="mdl-list__item" id="CTN" :to="linkCTN">
              心肌肌钙蛋白(iu/L) >
            </router-link>
            <router-link class="mdl-list__item" id="HBDH" :to="linkHBDH">
              羟丁酸脱氢酶(iu/L) >
            </router-link>
            <router-link class="mdl-list__item" id="NEU" :to="linkNEU">
              中性粒细胞百分比(%) >
            </router-link>
            <router-link class="mdl-list__item" id="MB" :to="linkMB">
              肌红蛋白(iu/L) >
            </router-link>
          </ul>
        </div>
        <div class="mdl-cell mdl-cell--9-col mdl-cell--middle">
          <router-view :collection="collection"></router-view>
        </div>
      </div>
    </my-card>
    <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp mdl-cell mdl-cell--3-col mdl-cell--top">
      <tbody>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">随访时间</th>
          <td class="mdl-data-table__cell--non-numeric">{{ followup.get('date') }}</td>
        </tr>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">AST</th>
          <td class="mdl-data-table__cell--non-numeric">{{ followup.get('AST') }}</td>
        </tr>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">CK</th>
          <td class="mdl-data-table__cell--non-numeric">{{ followup.get('CK') }}</td>
        </tr>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">CKMB</th>
          <td class="mdl-data-table__cell--non-numeric">{{ followup.get('CKMB') }}</td>
        </tr>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">CTN</th>
          <td class="mdl-data-table__cell--non-numeric">{{ followup.get('CTN') }}</td>
        </tr>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">HBDH</th>
          <td class="mdl-data-table__cell--non-numeric">{{ followup.get('HBDH') }}</td>
        </tr>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">MB</th>
          <td class="mdl-data-table__cell--non-numeric">{{ followup.get('MB') }}</td>
        </tr>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">NEU</th>
          <td class="mdl-data-table__cell--non-numeric">{{ followup.get('NEU') }}</td>
        </tr>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">PBCC</th>
          <td class="mdl-data-table__cell--non-numeric">{{ followup.get('PBCC') }}</td>
        </tr>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">ALT</th>
          <td class="mdl-data-table__cell--non-numeric">{{ followup.get('ALT') }}</td>
        </tr>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">医生诊断</th>
          <td class="mdl-data-table__cell--non-numeric">{{ followup.get('describeByDoctor') }}</td>
        </tr>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">病人自述</th>
          <td class="mdl-data-table__cell--non-numeric">{{ followup.get('describeByPatient') }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { SET_TIP } from '../../vuex/mutation_types.js'
  import Card from '../utils/Card'
  import Chart from './Chart'

  export default {
    components: {
      'my-card': Card,
      'my-chart': Chart
    },
    data () {
      return {
        index: this.$route.params.id,
        linkAST: '/followup-info/' + this.$route.params.id + '/chart/AST',
        linkALT: '/followup-info/' + this.$route.params.id + '/chart/ALT',
        linkCK: '/followup-info/' + this.$route.params.id + '/chart/CK',
        linkCKMB: '/followup-info/' + this.$route.params.id + '/chart/ckMB',
        linkCTN: '/followup-info/' + this.$route.params.id + '/chart/CTN',
        linkHBDH: '/followup-info/' + this.$route.params.id + '/chart/HBDH',
        linkMB: '/followup-info/' + this.$route.params.id + '/chart/MB',
        linkNEU: '/followup-info/' + this.$route.params.id + '/chart/NEU',
        followup: this.$store.state.followup.currentFollowupList[this.$route.params.id],
        collection: []
      }
    },
    methods: {
      drawTrend: function (event) {
        let id = event.target.id
        let array = this.$store.state.followup.currentFollowupList
        this.collection = []
        for (let i = 0; i < array.length; i++) {
          this.collection[i] = array[i].get(id)
        }
      }
    }
  }
</script>

<style scoped>
a {
  text-decoration: none;
}
.router-link-active {
  color: #fff !important;
  background: #337ab7;
}
.mdl-list > .mdl-list__item {
  cursor: pointer;
  color: #337ab7;
}
.text-muted {
  color: #777;
  font-size: 10px;
}
</style>
