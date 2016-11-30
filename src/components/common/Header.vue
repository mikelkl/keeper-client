<template>
  <header class="header mdl-layout__header tab-header mdl-color--white">
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
      <router-link to="/treatment-record" class="mdl-layout__tab mdl-color-text--grey-600">就诊记录</router-link>
      <router-link to="/ecg" class="mdl-layout__tab mdl-color-text--grey-600">心电图记录</router-link>
      <router-link to="/aid" class="mdl-layout__tab mdl-color-text--grey-600">一键急救</router-link>
      <router-link to="/user-info" class="mdl-layout__tab mdl-color-text--grey-600">个人信息</router-link>
    </div>
  </header>
</template>

<style scoped>
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
.router-link-active {
  font-weight: 500;
  color: #666 !important;
}
.router-link-active:after {
  height: 2px;
  width: 100%;
  display: block;
  content: " ";
  bottom: 0;
  left: 0;
  position: absolute;
  background: rgb(255,64,129);
  animation: border-expand 0.2s cubic-bezier(0.4, 0, 0.4, 1) 0.01s alternate forwards;
  transition: all 1s cubic-bezier(0.4, 0, 1, 1);
}
label.mdl-button.mdl-js-button.mdl-button--icon {
  top: -20px
}
</style>
