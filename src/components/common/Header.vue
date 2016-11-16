<template>
  <header class="header mdl-layout__header tab-header mdl-color--white">
  <!-- <header class="header mdl-layout__header"> -->
  <!-- <header class="header mdl-layout__header mdl-layout__header--waterfall mdl-layout__header--waterfall-hide-top"> -->
    <div class="mdl-layout__header-row mdl-color--white mdl-color-text--grey-600 my-underline">
      <img src="../../assets/images/logo2.png" width="30" height="30" style="margin-right: 5px;">
      <span class="mdl-layout-title">Keeper</span>
      <div class="mdl-layout-spacer"></div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
        <label class="mdl-button mdl-js-button mdl-button--icon" for="search">
          <i class="material-icons">search</i>
        </label>
        <div class="mdl-textfield__expandable-holder">
          <input class="mdl-textfield__input" type="text" id="search">
          <label class="mdl-textfield__label" for="search">Enter your query...</label>
        </div>
      </div>
    </div>
    <!-- Tabs -->
    <div class="mdl-layout__tab-bar mdl-js-ripple-effect my-tab-bar mdl-color--white">
      <a href="" class="mdl-layout__tab mdl-color-text--grey-600">就诊记录</a>
      <a href="" class="mdl-layout__tab mdl-color-text--grey-600">心电图记录</a>
      <a href="" class="mdl-layout__tab mdl-color-text--grey-600">一键急救</a>
      <a href="" class="mdl-layout__tab is-active">个人信息</a>
    </div>
    <!-- <div v-if="$route.path === '/treatment-record'" class="mdl-layout__header-row">
      <span class="mdl-layout-title mdl-color-text--white">就诊记录</span>
    </div>
    <div v-if="$route.path === '/ecg'" class="mdl-layout__header-row mdl-color--cyan-600">
      <span class="mdl-layout-title mdl-color-text--white">心电图记录</span>
    </div>
    <div v-if="$route.path === '/aid'" class="mdl-layout__header-row mdl-color--teal-600">
      <span class="mdl-layout-title mdl-color-text--white">一键急救</span>
    </div>
    <div v-if="$route.path === '/user-info'" class="mdl-layout__header-row">
      <span class="mdl-layout-title mdl-color-text--white">个人信息</span>
    </div> -->
  </header>
</template>

<style scoped>
/*.mdl-layout__header {
  box-shadow: none;
}*/
.my-underline {
  border-bottom: 1px solid #e8e8e8;
}
.tab-header {
  min-height: 0px;
}
.my-tab-bar {
  justify-content: center;
  height: auto;
  padding: 0;
}
.is-active {
  font-weight: 500;
  color: #666 !important;
}
label.mdl-button.mdl-js-button.mdl-button--icon {
  top: -20px
}
</style>
