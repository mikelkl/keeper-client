<template>
  <div class="mdl-grid content">
    <my-card class="mdl-cell--2-col mdl-cell--top" style="margin-right: 10px;">
      <div slot="title" class="mdl-card__title" style="padding-bottom: 0px;">
        <div class="">账户设置</div>
      </div>
      <div slot="media">
      </div>
      <div slot="supporting-text">
        <ul class="mdl-list" style="margin-top: 0px;">
          <li class="mdl-list__item selected">
            <a href="is-active">
                Overview
              </a>
          </li>
          <li class="mdl-list__item">
            <span>
              Connected accounts
            </span>
          </li>
          <li class="mdl-list__item">
            <span class="mdl-list__item-primary-content">
              Privacy
            </span>
          </li>
          <li class="mdl-list__item">
            <span class="mdl-list__item-primary-content">
              Notifications
            </span>
          </li>
          <li class="mdl-list__item">
            <span class="mdl-list__item-primary-content">
              Playback
            </span>
          </li>
          <li class="mdl-list__item">
            <span class="mdl-list__item-primary-content">
              Connected TVs
            </span>
          </li>
        </ul>
      </div>
      <div slot="actions">
      </div>
    </my-card>
    <my-card class="user-info-card mdl-cell--10-col mdl-cell--top">
      <div slot="title" class="mdl-card__title mdl-card--border">
        <div class="mdl-card__title-text">概览</div>
      </div>
      <div slot="media">
      </div>
      <div slot="supporting-text">
        <div class="mdl-card__supporting-text mdl-grid" style="margin: 16px;">
          <div class="mdl-cell--2-col">
            <p>
              账户信息
            </p>
            <p>
              用户名
            </p>
            <p>
              用户类型
            </p>
            <p>
              用户设置
            </p>
            <p>
              其他特性
            </p>
            <p>
              <a href="">View additional features</a>
            </p>
            <p>
              <a href="">Create a new channel</a>
            </p>
          </div>
          <div class="mdl-cell--9-col">
            <p>&nbsp;</p>
            <p>{{ $store.state.userInfo.email }} <a href="">Create a channel Advanced</a></p>
            <p>
              <span>Standard</span>
              <a href="">Learn about Keeper Red</a>
            </p>
            <p>
              <a href="">View or change your account settings</a>
            </p>
          </div>
        </div>
      </div>
      <div slot="actions">
      </div>
    </my-card>
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
.user-info-card {

}
.mdl-list__item {
  padding: 4px 16px;
  min-height: 0px;
}
.selected {
  background-color: #cc181e;
}
.selected > a {
  font-weight: 300;
  color: white;
  text-decoration: none;
}
</style>
