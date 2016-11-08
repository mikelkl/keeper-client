<template>
    <header class="header mdl-layout__header mdl-layout__header--waterfall mdl-layout__header--waterfall-hide-top">
      <div class="mdl-layout__header-row mdl-color--grey-100 mdl-color-text--grey-600">
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
      <div v-if="$route.path === '/treatment-record'" class="mdl-layout__header-row">
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
      </div>
    </header>
</template>

<style scoped>
label.mdl-button.mdl-js-button.mdl-button--icon {
  top: -20px
}
</style>
