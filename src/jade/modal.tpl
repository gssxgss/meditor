<!-- template for the modal component -->
<script type="x/template" id="modal_tpl">
  <div class="modal-mask" v-show="show" transition="modal">
    <div class="modal-container">
      <div class="modal-body">
        <slot name="code"></slot>
      </div>

      <div class="modal-menu">
        <button class="modal-btn btn-close"
          @click="show = false">
          <svg class="svg svg-cross"><use xlink:href="#svg-cross"></use></svg>
        </button>
        <header class="modal-title">HTML</header>
        <button id="copy" class="modal-btn btn-copy" data-clipboard-target="#sourcecode"><span class="first-letter">C</span><span class="rest-letters">opy</span></button>
      </div>

    </div>
  </div>
</script>
