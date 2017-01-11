<template>
  <div class="mdl-card mdl-shadow--2dp">
    <slot name="title">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Auckland Sky Tower<br>Auckland, New Zealand</h2>
      </div>
    </slot>
    <slot name="media">
      <div class="mdl-card__media">
        <img src="skytower.jpg" width="173" height="157" border="0" alt=""
        style="padding:10px;">
      </div>
    </slot>
    <slot name="supporting-text">
      <div class="mdl-card__supporting-text">
        The Sky Tower is an observation and telecommunications tower located in Auckland,
        New Zealand. It is 328 metres (1,076 ft) tall, making it the tallest man-made structure
        in the Southern Hemisphere.
      </div>
    </slot>
    <slot name="actions">
      <div class="mdl-card__actions mdl-card--border">
        <a href="http://en.wikipedia.org/wiki/Sky_Tower_%28Auckland%29">Wikipedia entry</a>
      </div>
    </slot>
  </div>
</template>

<style scoped>
.mdl-card {
  transition: .2s;
}

.mdl-card:hover {
  transition: .2s;
  box-shadow: 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12), 0 5px 5px -3px rgba(0,0,0,.2);
}
</style>
