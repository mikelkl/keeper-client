<template>
  <div id="scroll" @scroll="scrollHandler" class="layout mdl-layout mdl-js-layout">
    <div class="ribbon">
      <header class="mdl-layout__header mdl-layout__header--transparent">
      <div class="mdl-layout__header-row">
        <img src="../assets/images/logo.png">
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-cell--7-offset mdl-cell--3-offset-tablet mdl-cell--1-offset-phone">了解更多<i class="material-icons" role="presentation">arrow_drop_down</i></button>
        <router-link to="/login" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color--black mdl-color-text--white">登陆</router-link>
      </div>
      </header>
      <div class="intro mdl-cell--6-col mdl-cell--1-offset horizon-anim">
        <h3 class="mdl-color-text--cyan-600">Keeper <br> 心电医疗云平台 <br> 设备通过蓝牙模块将采集数据输出</h3>
        <h6>一款基于心电监护终端和医疗云平台的在线心电医疗平台，通过特征采集，数据分析，挂号复诊，应急抢救等功能，辅助医生，
          帮助心脏病人早日康复一款基于心电监护终端和医疗云平台的在线心电医疗平台，通过特征采集，数据分析，挂号复诊，应急抢救等功能，
          辅助医生，帮助心脏病人早日康复
        </h6>
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--black big-btn">下载APP</button>
      </div>
    </div>
    <main class="main mdl-layout__content">
      <div class="services mdl-grid">
        <div class="intro mdl-cell--3-col mdl-grid hide" id="intro1">
          <div class="mdl-cell--2-offset">
            <h3 class="mdl-color-text--cyan-600 mdl-cell--12-col">我们的设备</h3>
            <h6 class="mdl-color-text--white" style="padding-bottom: 2vh;">Keeper产品由手机客户端，web端，PC端、心电采集仪硬件端四部分组成。</h6>
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white big-btn">获取更多信息</button>
            <h6 class="mdl-color-text--grey-400" style="padding-top: 2vh;"><i>
              Keeper以产品+服务的方式，利用四川大学华西医院在全国的优势（我们的产品获得华西医院心内科的认证），一方面，面向心血管病人提供医疗服务，另一方面，面向医疗和科研机构提供第一手数据。</i></h6>
          </div>
        </div>
        <div class="mdl-cell--8-col mdl-grid detail">
          <div class="intro mdl-cell--6-col hide" id="device1">
            <svg class="icon" width="200" height="200" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g class="transform-group">
                <g transform="scale(0.1953125, 0.1953125)">
                  <path d="M223.106793 275.703622c39.23968 0 74.7776 15.907375 100.494895 41.626996 25.71776 25.717295 41.622807 61.248698 41.622807 100.486516 0 29.793745-9.165731 57.440349-24.832465 80.285789-4.093207-14.645993-10.041251-28.959651-17.207389-42.809716 4.374342-11.658705 6.765847-24.289745 6.765847-37.476073 0-29.500044-11.964975-56.211084-31.299956-75.541411-19.326604-19.334982-46.039505-31.291113-75.543738-31.291113-29.495855 0-56.208756 11.956596-75.543738 31.291113-19.334982 19.330327-31.291578 46.041367-31.291578 75.541411 0 29.504233 11.957062 56.213411 31.291578 75.547927 17.845527 17.847855 41.988655 29.4144 68.803491 31.083055 2.46784 9.352378 2.859287 18.432465-0.093556 26.525324-1.029585 2.808553-2.408262 5.672029-4.050851 8.552727-34.899316-2.646575-66.284916-17.896262-89.601862-41.222516C96.902516 492.592407 80.989091 457.060538 80.989091 417.816669c0-39.237818 15.913425-74.76736 41.631185-100.486516C148.337571 291.610996 183.866647 275.703622 223.106793 275.703622L223.106793 275.703622zM282.753396 455.522676c57.621411 95.118895 18.067084 140.179549-31.044422 196.064815-33.052858 37.623156-71.620422 81.517847-71.594822 160.056785 0.008378 40.82688 20.747171 76.539345 53.409047 103.482182 36.992931 30.495651 88.844567 49.843665 144.11776 53.409047 7.471476 0.476625 14.330415 0.719127 20.576815 0.723316 69.161425 0.008844 131.939607-22.857542 178.480873-63.888756 46.19264-40.733789 76.513745-99.716655 81.194356-172.298705 0.459404-7.105629 0.689338-13.785833 0.689338-20.002909l0.033978-139.534895c-26.619345-2.850909-52.847244-10.548131-77.194705-23.092131-63.187316-32.555287-113.047273-97.374022-122.78272-194.248145l-27.947287-277.999244c-0.765673-7.582255 0-14.843345 2.247215-21.687855 2.263505-6.893382 5.999244-13.252422 11.173236-18.967273 5.080436-5.616175 11.029411-9.939316 17.743593-12.922415 6.842182-3.033833 14.007389-4.574022 21.411375-4.574022l64.956975 0c8.050502-10.714298 20.857949-17.64352 35.282385-17.64352 24.35584 0 44.107869 19.745047 44.107869 44.101353 0 24.357702-19.752029 44.105076-44.107869 44.105076-14.424436 0-27.231884-6.931549-35.282385-17.64352l-64.956975 0c-0.034444 0-0.059578-0.002327-0.0768-0.008378l0.008378 0.072145 22.347404 222.360669c11.743884 46.6688 44.788364 79.277149 86.215215 97.77152 27.539084 12.290793 58.872553 18.435258 90.368465 18.435258 31.486604 0 62.829382-6.146793 90.359622-18.435258 41.435229-18.494371 74.479709-51.106909 86.223593-97.77152l22.355782-222.360669 0-0.072145c-0.016756 0.004189-0.042822 0.008378-0.0768 0.008378L816.034909 72.961862c-8.050502 10.709644-20.857949 17.641658-35.282851 17.641658-24.355375 0-44.09856-19.74784-44.09856-44.103215 0-24.353978 19.743185-44.101353 44.09856-44.101353 14.424902 0 27.231884 6.931549 35.282851 17.64352l64.956975 0c7.40352 0 14.577571 1.540189 21.411375 4.574022 6.714182 2.983098 12.662691 7.30624 17.743127 12.922415 5.173993 5.714851 8.910196 12.073425 11.173702 18.967273 2.246749 6.844044 3.012422 14.105135 2.246749 21.687855l-27.938444 277.999244c-9.743825 96.874124-59.604247 161.692858-122.791098 194.248145-22.611316 11.650327-46.848 19.117615-71.509644 22.402793l-0.034444 140.224233c0 8.446138-0.229469 16.207127-0.689338 23.313222-5.64224 87.499869-42.601193 158.980189-98.971462 208.674444-56.021644 49.401018-131.105978 76.930327-213.414633 76.913571-8.450327-0.004655-16.424029-0.242502-23.887593-0.723316-66.156916-4.263564-128.884364-27.955665-174.294109-65.399622-44.422516-36.631273-72.616029-86.292015-72.641164-144.202473-0.0256-98.443636 45.554502-150.321338 84.62336-194.786211 32.908567-37.448145 59.783447-68.063418 26.721745-130.220684-5.021324 1.138502-10.254895 1.742196-15.633222 1.742196-38.967855 0-70.556858-31.591331-70.556858-70.560582 0-38.965527 31.589469-70.559185 70.556858-70.559185 38.967389 0 70.565236 31.593658 70.565236 70.559185C293.672029 431.685818 289.663535 444.614749 282.753396 455.522676L282.753396 455.522676zM516.685731 384.119156c14.016233 58.468538 47.834764 98.2272 88.921367 119.396073 23.742836 12.235404 50.081513 18.353804 76.522124 18.353804 26.432233 0 52.779287-6.118865 76.522124-18.353804 41.086604-21.170735 74.905135-60.932189 88.921367-119.400262-17.241367 17.266967-37.963404 30.987636-60.744611 41.152698-32.270429 14.403025-68.565644 21.605004-104.69888 21.605004-36.133702 0-72.428916-7.201978-104.69888-21.605004C554.649135 415.102138 533.935942 401.383796 516.685731 384.119156L516.685731 384.119156zM881.110575 72.78592c-0.118691-0.053062-0.084713-0.023738-0.042356 0.027927C881.119418 72.800815 881.204596 72.826415 881.110575 72.78592L881.110575 72.78592zM483.147869 72.78592c-0.093556 0.040495-0.008378 0.014895 0.042822 0.027927C483.232582 72.762182 483.267025 72.732858 483.147869 72.78592L483.147869 72.78592z"
                      fill="#ff8f00"></path>
                </g>
              </g>
            </svg>
            <h4 class="mdl-color-text--cyan-600">心电采集仪</h4>
            <h6 class="mdl-color-text--white" style="padding-bottom: 2vh;">患者</h6>
          </div>
          <div class="intro mdl-cell--6-col hide" id="device2">
            <svg class="icon" width="200" height="200" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g class="transform-group">
                <g transform="scale(0.1953125, 0.1953125)">
                  <path d="M767.309418 770.106666 255.040892 770.106666 255.040892 126.656466l512.268526 0L767.309418 770.106666 767.309418 770.106666zM303.296135 721.846607l415.753224 0L719.049359 174.916525 303.296135 174.916525 303.296135 721.846607 303.296135 721.846607 303.296135 721.846607zM553.839514 849.562728c0 21.801197-17.681788 39.460107-39.478169 39.460107-21.79638 0-39.478169-17.657705-39.478169-39.460107s17.681788-39.492619 39.478169-39.492619C536.158929 810.070109 553.839514 827.760326 553.839514 849.562728M765.695852 979.225965 256.649641 979.225965c-45.241247 0-82.047399-36.825419-82.047399-82.047399L174.602241 128.266419c0-45.231614 36.806152-82.037766 82.047399-82.037766l509.046212 0c45.235226 0 82.047399 36.807357 82.047399 82.037766l0 768.912146C847.743252 942.400546 810.931079 979.225965 765.695852 979.225965L765.695852 979.225965zM256.649641 94.487508c-18.636682 0-33.78734 15.150658-33.78734 33.777707l0 768.912146c0 18.631865 15.155475 33.78734 33.78734 33.78734l509.046212 0c18.636682 0 33.78734-15.155475 33.78734-33.78734L799.483192 128.266419c0-18.627049-15.150658-33.777707-33.78734-33.777707L256.649641 94.488712 256.649641 94.487508zM256.649641 94.487508"
                      fill="#ff8f00"></path>
                </g>
              </g>
            </svg>
            <h4 class="mdl-color-text--cyan-600">手机App端</h4>
            <h6 class="mdl-color-text--white" style="padding-bottom: 2vh;">患者/医生</h6>
          </div>
          <div class="intro mdl-cell--6-col hide" id="device3">
            <svg class="icon" width="200" height="200" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g class="transform-group">
                <g transform="scale(0.1953125, 0.1953125)">
                  <path d="M806.278815 115.241674 200.983989 115.241674c-66.87613 0-121.039727 51.68208-121.039727 115.455545l0 451.616748c0 63.813375 54.16462 115.493407 121.039727 115.493407l292.199968 0c-0.963954 1.727341-1.518586 3.715625-1.518586 5.836939L491.665371 906.509099l-224.74874 0c-6.623861 0-11.976776 5.352915-11.976776 11.976776 0 6.624884 5.352915 11.975752 11.976776 11.975752l473.453079 0c6.622838 0 11.973706-5.350868 11.973706-11.975752 0-6.623861-5.350868-11.976776-11.973706-11.976776L515.617899 906.509099 515.617899 803.645336c0-2.121314-0.554632-4.110621-1.518586-5.836939l292.179502 0c66.875107 0 121.060193-51.680033 121.060193-115.493407L927.339008 230.698243C927.339008 166.923754 873.153922 115.241674 806.278815 115.241674zM503.642147 757.260913c-18.652825 0-33.772174-15.120372-33.772174-33.772174s15.120372-33.772174 33.772174-33.772174c18.651802 0 33.771151 15.120372 33.771151 33.772174S522.292925 757.260913 503.642147 757.260913zM870.531188 662.388149 136.746966 662.388149 136.746966 192.643532l733.784222 0L870.531188 662.388149z"
                      fill="#ff8f00"></path>
                </g>
              </g>
            </svg>
            <h4 class="mdl-color-text--cyan-600">PC端</h4>
            <h6 class="mdl-color-text--white" style="padding-bottom: 2vh;">医生/医疗机构</h6>
          </div>
          <div class="intro mdl-cell--6-col hide" id="device4">
            <svg class="icon" width="200" height="200" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g class="transform-group">
                <g transform="scale(0.1953125, 0.1953125)">
                  <path d="M175.107 657.652h-72.238c-16.602 0-30.099-13.497-30.099-30.099v-416.417c1.886 0.668 3.906 1.050 6.020 1.050h674.22c2.114 0 4.134-0.382 6.020-1.050v55.229c0 9.97 8.091 18.060 18.061 18.060 9.972 0 18.060-8.090 18.060-18.060v-120.398c0-36.518-29.723-66.219-66.219-66.219h-626.061c-36.496 0-66.219 29.699-66.219 66.219v481.586c0 36.519 29.723 66.218 66.219 66.218h72.238c9.971 0 18.060-8.087 18.060-18.060-0.001-9.969-8.090-18.060-18.061-18.060zM102.87 115.869h626.061c16.604 0 30.099 13.498 30.099 30.099v31.15c-1.885-0.668-3.905-1.050-6.020-1.050h-674.219c-2.114 0-4.134 0.382-6.020 1.050v-31.15c-0.001-16.601 13.497-30.099 30.099-30.099zM921.566 320.542h-626.062c-36.496 0-66.219 29.699-66.219 66.219v481.585c0 36.519 29.723 66.218 66.219 66.218h626.062c36.496 0 66.218-29.698 66.218-66.218v-481.585c0.001-36.518-29.722-66.219-66.218-66.219zM295.504 356.661h626.062c16.602 0 30.099 13.498 30.099 30.099v31.15c-1.886-0.668-3.906-1.050-6.021-1.050h-674.219c-2.114 0-4.134 0.382-6.020 1.050v-31.15c0-16.601 13.497-30.099 30.099-30.099zM921.566 898.444h-626.062c-16.602 0-30.099-13.497-30.099-30.099v-416.417c1.886 0.668 3.906 1.050 6.020 1.050h674.22c2.114 0 4.134-0.382 6.021-1.050v416.417c0 16.602-13.498 30.099-30.1 30.099z"
                      fill="#ff8f00"></path>
                </g>
              </g>
            </svg>
            <h4 class="mdl-color-text--cyan-600">Web端</h4>
            <h6 class="mdl-color-text--white" style="padding-bottom: 2vh;">医生</h6>
          </div>
        </div>
      </div>
      <div class="current mdl-grid">
        <div class="intro mdl-cell--12-col" style="margin-bottom: 8vh;">
          <h3 class="mdl-color-text--cyan-600">心血管疾病患者逐年增长</h3>
        </div>
        <div class="mdl-cell--4-col">
          <svg class="hide" width="480" height="560" viewbox="0 0 480 560">
            <text x="240" y="10" font-family="Roboto" font-size="50" fill="#757575" text-anchor="middle" dy="36">1700万</text>
            <line x1="240" y1="88" x2="240" y2="55" stroke="#9e9e9e" stroke-width="2" stroke-dasharray="2 2" />
            <circle cx="240" cy="94" r="3" fill="#9e9e9e"></circle>
            <circle cx="240" cy="240" r="130" stroke-width="20" stroke="#D1D3D7" fill="none"></circle>
            <circle id="circle1" cx="240" cy="240" r="130" stroke-width="20" stroke="#00A5E0" fill="none" transform="matrix(0,-1,1,0,0,480)" stroke-dasharray="0 817"></circle>
            <text x="240" y="240" font-family="Roboto" font-size="108" fill="#424242" text-anchor="middle" dy="36">30
              <tspan font-size="72" dy="-25.2">%</tspan>
            </text>
            <circle cx="240" cy="386" r="3" fill="#9e9e9e"></circle>
            <line x1="240" y1="392" x2="240" y2="425" stroke="#9e9e9e" stroke-width="2" stroke-dasharray="2 2" />
            <text data-v-ec220d74="" x="240" y="430" font-family="Roboto" font-size="20" fill="#757575" text-anchor="middle" dy="36">
              <tspan x="240" y="430">全球每年约有1700万人</tspan>
              <tspan x="240" y="500">死于心血管疾病，占全</tspan>
              <tspan x="240" y="535">球死亡人数的30%</tspan>
            </text>
          </svg>
        </div>
        <div class="mdl-cell--4-col">
          <svg class="hide" width="480" height="560" viewbox="0 0 480 560">
            <text x="240" y="10" font-family="Roboto" font-size="50" fill="#757575" text-anchor="middle" dy="36">2.9亿</text>
            <line x1="240" y1="88" x2="240" y2="55" stroke="#9e9e9e" stroke-width="2" stroke-dasharray="2 2" />
            <circle cx="240" cy="94" r="3" fill="#9e9e9e"></circle>
            <circle cx="240" cy="240" r="130" stroke-width="20" stroke="#D1D3D7" fill="none"></circle>
            <circle id="circle2" cx="240" cy="240" r="130" stroke-width="20" stroke="#00A5E0" fill="none" transform="matrix(0,-1,1,0,0,480)" stroke-dasharray="0 817"></circle>
            <text x="240" y="240" font-family="Roboto" font-size="108" fill="#424242" text-anchor="middle" dy="36">21
              <tspan font-size="72" dy="-25.2">%</tspan>
            </text>
            <circle cx="240" cy="386" r="3" fill="#9e9e9e"></circle>
            <line x1="240" y1="392" x2="240" y2="425" stroke="#9e9e9e" stroke-width="2" stroke-dasharray="2 2" />
            <text data-v-ec220d74="" x="240" y="430" font-family="Roboto" font-size="20" fill="#757575" text-anchor="middle" dy="36">
              <tspan x="240" y="430">在中国，有2.9亿心血管疾</tspan>
              <tspan x="240" y="500">病患者，占总人口的</tspan>
              <tspan x="240" y="535">21%，这个数字还在增长</tspan>
            </text>
          </svg>
        </div>
        <div class="mdl-cell--4-col">
          <svg class="hide" width="480" height="560" viewbox="0 0 480 560">
            <text x="240" y="10" font-family="Roboto" font-size="50" fill="#757575" text-anchor="middle" dy="36">4.6% -> 7.7%</text>
            <line x1="240" y1="88" x2="240" y2="55" stroke="#9e9e9e" stroke-width="2" stroke-dasharray="2 2" />
            <circle cx="240" cy="94" r="3" fill="#9e9e9e"></circle>
            <circle cx="240" cy="240" r="130" stroke-width="20" stroke="#D1D3D7" fill="none"></circle>
            <circle id="circle3" cx="240" cy="240" r="130" stroke-width="20" stroke="#00A5E0" fill="none" transform="matrix(0,-1,1,0,0,480)" stroke-dasharray="0 817"></circle>
            <text x="240" y="240" font-family="Roboto" font-size="108" fill="#424242" text-anchor="middle" dy="36">67
              <tspan font-size="72" dy="-25.2">%</tspan>
            </text>
            <circle cx="240" cy="386" r="3" fill="#9e9e9e"></circle>
            <line x1="240" y1="392" x2="240" y2="425" stroke="#9e9e9e" stroke-width="2" stroke-dasharray="2 2" />
            <text data-v-ec220d74="" x="240" y="430" font-family="Roboto" font-size="20" fill="#757575" text-anchor="middle" dy="36">
              <tspan x="240" y="430">09年，我国心血疾病死亡</tspan>
              <tspan x="240" y="500">率为4.6%，到14年为</tspan>
              <tspan x="240" y="535">7.7%，5年间增幅达到67%</tspan>
            </text>
          </svg>
        </div>
      </div>
      <footer class="mdl-mega-footer">
        <div class="mdl-mega-footer__bottom-section" style="text-align:center;">
          © 2016 . All rights reserved | Design by Hammer
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
        let that = this
        this.$store.commit('SET_LOADING', true)
        this.$store.dispatch('setBaseInfo', {
          data: {
            account: this.user.account,
            pass: this.user.pass
          },
          callback: function () {
            that.$router.push('/treatment-record')
          }
        })
      },
      scrollHandler (event) {
        let ribbonHeight = document.querySelector('.ribbon').clientHeight
        let servicesHeight = document.querySelector('.services').clientHeight
        let currentHeight = document.querySelector('.current').clientHeight

        let intro1 = document.querySelector('#intro1')
        let device1 = document.querySelector('#device1')
        let device2 = document.querySelector('#device2')
        let device3 = document.querySelector('#device3')
        let device4 = document.querySelector('#device4')
        let circle1 = document.querySelector('#circle1')
        let circle2 = document.querySelector('#circle2')
        let circle3 = document.querySelector('#circle3')

        let svgs = document.querySelectorAll('svg')

        let scrollTop = document.getElementById('scroll').scrollTop
        let scrollBottom = scrollTop + window.innerHeight

        if (scrollTop > 20 && scrollBottom < (ribbonHeight + servicesHeight / 2)) {
          intro1.classList.add('vertical-anim')
          device1.classList.add('vertical-anim')
          device2.classList.add('vertical-anim')
        } else if (scrollBottom >= (ribbonHeight + servicesHeight / 2) && scrollBottom < (ribbonHeight + servicesHeight)) {
          device3.classList.add('vertical-anim')
          device4.classList.add('vertical-anim')
        } else if (scrollBottom >= (ribbonHeight + servicesHeight + currentHeight / 2) && scrollBottom < (ribbonHeight + servicesHeight + currentHeight)) {
          svgs[4].classList.add('svg-anim')
          setTimeout(function () {
            svgs[5].classList.add('svg-anim')
          }, 150)
          setTimeout(function () {
            svgs[6].classList.add('svg-anim')
          }, 300)
          setTimeout(function () {
            circle1.setAttribute('stroke-dasharray', '244.92 817')
          }, 450)
          setTimeout(function () {
            circle2.setAttribute('stroke-dasharray', '171.444 817')
          }, 600)
          setTimeout(function () {
            circle3.setAttribute('stroke-dasharray', '546.988 817')
          }, 750)
        }
      }
    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.svg-anim {
  /*Deceleration curve*/
  animation: svg .2s cubic-bezier(0.0, 0.0, 0.2, 1);
  visibility:visible !important;
}
@keyframes svg {
  0% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(1);
  }
}
.hide {
  visibility:hidden;
}
circle {
  /*Standard curve*/
  transition: stroke-dasharray .2s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.horizon-anim {
  visibility:visible !important;
  position: relative;
  animation: horizon .2s cubic-bezier(0.4, 0.0, 0.2, 1);
}
@keyframes horizon {
  0% {
    left:-240px;
  }
  100% {
    left:0px;
  }
}

.vertical-anim{
  visibility:visible !important;
	position: relative;
  animation: vertical .2s cubic-bezier(0.0, 0.0, 0.2, 1);
}
@keyframes vertical {
  0% {
    top:-120px;
    opacity: 0.3;
  }
  100% {
    top:0px;
    opacity: 1;
  }
}
  .ribbon {
    height: 610px;
    background: url('../assets/images/banner.jpg');
    background-size: cover;
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
    width: auto;
    height: 48px;
  }

  .intro {
    padding-top: 5vh;
  }

  .intro h3 {
    line-height: 50px;
  }

  .intro h6 {
    font-weight: 100;
  }

  .intro .icon:hover {
    border-radius: 38px;
    border-color: #ff8f00;
    transition: .15s cubic-bezier(0.4, 0.0, 0.6, 1);
  }

  .intro .icon:hover g g path {
    fill: #fff;
    transition: .15s cubic-bezier(0.4, 0.0, 0.6, 1);
  }

  .intro .icon {
    width: 28px;
    height: 28px;
    padding: 24px;
    border: 1px solid #fff;
    transition: .15s cubic-bezier(0.4, 0.0, 0.6, 1);
  }

  .intro .icon g g path {
    transition: .15s cubic-bezier(0.4, 0.0, 0.6, 1);
  }

  .mdl-mega-footer__bottom-section .icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  .detail {
    padding-top: 5vh;
    text-align: center;
  }

  .main {
    margin-top: 0vh;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }

  .container {
    max-width: 1600px;
    width: calc(100% - 16px);
    margin: 0 auto;
  }

  .content {
    border-radius: 2px;
    padding: 80px 56px;
    margin-bottom: 80px;
  }

  .center {
    margin: 0 auto;
  }

  .big-btn {
    padding: 0px 36px;
    border: 1px solid #ff8f00;
    background-color: transparent;
    transition: .15s cubic-bezier(0.4, 0.0, 0.6, 1);
  }

  .big-btn:hover {
    background-color: #ff8f00;
    color: #fff !important;
    transition: .15s cubic-bezier(0.4, 0.0, 0.6, 1);
  }

  .img-above {
    position: absolute;
    top: 15vh;
    z-index: 1;
    height: 400px;
  }

  .services {
    padding-bottom: 10vh;
    background: url('../assets/images/pic2.jpg') center;
    background-size: cover;
  }

  .current {
    padding-bottom: 10vh;
    background: url('../assets/images/pic3.jpg') center;
    background-size: cover;
    text-align: center;
  }

  .footer {
    padding-left: 40px;
  }

  .footer .mdl-mini-footer--link-list a {
    font-size: 13px;
  }
</style>
