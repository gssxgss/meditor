<!-- template for the modal component -->
<script type="x/template" id="modal_tpl">
  <div class="modal-mask" v-show="show" transition="modal">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header">
          <button class="modal-default-button"
            @click="show = false">
            OK
          </button>
        </div>

        <div class="modal-body">
          <slot name="code"></slot>
        </div>

        <div class="modal-footer">
          <button>コピー</button>
        </div>

      </div>
    </div>
  </div>
</script>
