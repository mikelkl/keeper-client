<template>
  <div class="mdl-grid content">

    <!-- side panel -->
    <div class="cards mdl-cell mdl-cell--3-col mdl-cell--8-col-tablet mdl-grid">
      <my-card class="mdl-card mdl-shadow--2dp horizon-center">
        <div slot="title" class="mdl-card__title patient-banner">
          <h2 class="mdl-card__title-text keeper-title mdl-color-text--white">病人资料</h2>
        </div>
        <div slot="media">
        </div>
        <div slot="supporting-text">
        </div>
        <div slot="actions" class="mdl-card__actions mdl-card--border mdl-color-text--grey-600">
          <img src="../../assets/images/user.jpg" class="aid-avatar">
          <p class="patient-name">mxm</p>
          <ul class="mdl-list">
            <li class="mdl-list__item">
              <span class="mdl-list__item-primary-content">
                年龄：20
              </span>
            </li>
            <li class="mdl-list__item">
              <span class="mdl-list__item-primary-content">
                性别：男
              </span>
            </li>
            <li class="mdl-list__item">
              <span class="mdl-list__item-primary-content">
                手机：18978784358
              </span>
            </li>
          </ul>
        </div>
      </my-card>
      <div class="separator mdl-cell--1-col"></div>
      <my-card class="options mdl-card mdl-color--deep-purple-500 mdl-shadow--2dp">
        <div slot="title">
        </div>
        <div slot="media">
        </div>
        <div slot="supporting-text" class="mdl-card__supporting-text mdl-color-text--blue-grey-50">
          <h3>就诊记录</h3>
          <ul class="demo-list-three mdl-list mdl-color-text--blue-grey-50">
            <li class="mdl-list__item mdl-list__item--three-line mdl-color-text--blue-grey-50 keeper-list__item_font">
              <span>
                <span><b>患者：莫绪旻</b></span>
                <span  style="display:block;">
                  就诊原因：心律不齐，脉搏絮乱，生活作息不规律
                </span>
                <span><em>就诊日期：2015-11-24</em></span>
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
    </div>
    <!-- main panel -->
      <div class="cards mdl-cell mdl-cell--9-col mdl-grid">
        <my-card class='mdl-card mdl-shadow--2dp mdl-cell--12-col'>
          <div slot="title" class="mdl-card__title mdl-color--deep-purple-500">
            <h2 class="mdl-card__title-text keeper-title mdl-color-text--white">就诊详情</h2>
          </div>
          <div slot="media">
          </div>
          <div slot="supporting-text">
          </div>
          <div slot="actions" class="mdl-card__actions mdl-card--border">
            <div class="mdl-grid">
              <div class="mdl-cell mdl-cell--3-col" style="text-align:center;">
                <h4><img src="/static/images/37.png" width=50 heigth=50 class="img-rounded" alt="">就诊日期</h4>
                <span class="text-muted">2015-11-24</span>
              </div>
              <div class="mdl-cell mdl-cell--3-col" style="text-align:center;">
                <h4><img src="/static/images/72.png" width=50 heigth=50 class="img-rounded" alt="">就诊医院</h4>
                <span class="text-muted">四川大学华西医院</span>
              </div>
              <div class="mdl-cell mdl-cell--3-col" style="text-align:center;">
                <h4><img src="/static/images/71.png" width=50 heigth=50 class="img-rounded" alt="">就诊医生</h4>
                <span class="text-muted">陈钊医生</span>
              </div>
              <div class="mdl-cell mdl-cell--3-col" style="text-align:center;">
                <h4><img src="/static/images/76.png" width=50 heigth=50 class="img-rounded" alt="">诊断科室</h4>
                <span class="text-muted">儿科</span>
              </div>
            </div>
            <div class="mdl-grid">
              <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp mdl-cell mdl-cell--12-col">
                <thead>
                  <tr>
                    <th class="mdl-data-table__cell--non-numeric">就诊医生</th>
                    <th class="mdl-data-table__cell--non-numeric">诊断科室</th>
                    <th class="mdl-data-table__cell--non-numeric">医生职称</th>
                    <th class="mdl-data-table__cell--non-numeric">就诊日期</th>
                    <th class="mdl-data-table__cell--non-numeric">就诊医院</th>
                    <th class="mdl-data-table__cell--non-numeric">病情诊断</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="mdl-data-table__cell--non-numeric">陈钊医生</td>
                    <td class="mdl-data-table__cell--non-numeric">儿科</td>
                    <td class="mdl-data-table__cell--non-numeric">主治医师</td>
                    <td class="mdl-data-table__cell--non-numeric">2015-11-24</td>
                    <td class="mdl-data-table__cell--non-numeric">四川大学华西医院</td>
                    <td class="mdl-data-table__cell--non-numeric" style="white-space: normal;">
                      以胸闷、心慌2天来诊，自诉前几天曾熬夜，工作较忙而发病，并觉乏力、纳差。查体：脉搏90次/分，脉率不齐，即查心电图提示：窦性心律不齐，心率88次/分，st-t轻度改变。询问病史，既往体健。考虑：劳累所致心律失常，心肌供血不足。建议患者注意休息，避免劳累，多食富含维生素、蛋白质及微量元素的瓜果蔬菜，如有不适，及时就诊，以免发生严重的心脏疾患。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </my-card>
        <!-- <div class="separator mdl-cell--1-col"></div> -->
        <my-card class='mdl-card mdl-shadow--2dp mdl-cell--12-col'>
          <div slot="title" class="mdl-card__title">
            <h2 class="mdl-card__title-text keeper-title">诊后随访</h2>
          </div>
          <div slot="media">
          </div>
          <div slot="supporting-text">
          </div>
          <div slot="actions" class="mdl-card__actions mdl-grid">
            <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp mdl-cell mdl-cell--12-col">
              <thead>
                <tr>
                  <th class="mdl-data-table__cell--non-numeric">2015-11-24</th>
                  <th class="mdl-data-table__cell--non-numeric">2015-11-24</th>
                  <th class="mdl-data-table__cell--non-numeric">2015-11-26</th>
                  <th class="mdl-data-table__cell--non-numeric">2015-11-27</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="mdl-data-table__cell--non-numeric">
                    <router-link to="/followup-info" class="mdl-color-text--deep-purple-500">诊后第1次随访</router-link>
                    <!-- <a href="" class="mdl-color-text--deep-purple-500"  @click.prevent="showModal = true">诊后第1次随访</a> -->
                  </td>
                  <td class="mdl-data-table__cell--non-numeric"><a href="" class="mdl-color-text--deep-purple-500">诊后第2次随访</a></td>
                  <td class="mdl-data-table__cell--non-numeric"><a href="" class="mdl-color-text--deep-purple-500">诊后第3次随访</a></td>
                  <td class="mdl-data-table__cell--non-numeric"><a href="" class="mdl-color-text--deep-purple-500">诊后第4次随访</a></td>
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

  export default {
    components: {
      'my-card': Card
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
  position: absolute;;
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
</style>
