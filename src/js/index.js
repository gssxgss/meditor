const MD_CONF = {breaks: true};

const Vue = require("vue"),
      marked = require("marked").setOptions(MD_CONF),
      {html: tidyHtml} = require('js-beautify'),
      Clipboard = require("clipboard");

const DEMO = require("./demo.js");

Vue.component("modal", {
  template: "#modal_tpl",
  props: {
    show: {
      type: Boolean,
      requried: true,
      twoWay: true,
    }
  }
});

new Vue({
  el: '#app',
  data: {
    input: DEMO,
    includeCss: true,
    showModal: false,
    styles: null
  },
  filters: {
    marked: marked,
    tidy: function(str) {
      let styles = this.includeCss ? this.styles : "",
          htmlStr = `
        <!Doctype html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>利用規約</title>
            <style>${styles}</style>
          </head>
          <body>${marked(str)}</body>
        </html>
      `;
      return tidyHtml(htmlStr);
    },
  },
  created: function() {
    this.fetchData();
  },
  watch: {
    styles: "fetchData"
  },
  methods: {
    fetchData: function() {
      let url = $("#ui_css").attr("href");
      $.get(url).done((data) => {
        this.styles = data;
      });
    },
  },
});

if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
  $("#copy").hide();
} else {
  new Clipboard("#copy");
}
