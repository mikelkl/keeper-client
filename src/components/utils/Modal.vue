<template>
  <transition name="modal">
    <div v-if="$store.state.doc.modal.show" @click="$emit('close')" class="modal-mask">
      <div class="modal-wrapper">
        <div @click.stop class="modal-container">

          <div class="modal-main">

            <div class="modal-header">
              <h5>
                <slot name="header">
                  default header
                </slot>
              </h5>
            </div>

            <div class="modal-body">
              <slot name="body">
                default body
              </slot>
            </div>

          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="mdl-button mdl-js-button mdl-button--primary" @click="$emit('close')">
                DISAGREE
              </button>
              <button class="mdl-button mdl-js-button mdl-button--primary">
                AGREE
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  /*Sharp curve*/
  transition: opacity .3s cubic-bezier(0.4, 0.0, 0.6, 1);
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, .33);
  /*Sharp curve*/
  transition: all .3s cubic-bezier(0.4, 0.0, 0.6, 1);
  font-family: Helvetica, Arial, sans-serif;
}

.modal-main {
  padding: 24px;
}

.modal-footer {
  padding: 8px;
  text-align: right;
}

.modal-header h5 {
  margin-top: 0;
  opacity: 0.87;
}

.modal-body {
  margin: 20px 0 0 0;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
