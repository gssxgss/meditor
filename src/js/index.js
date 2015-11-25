const MD_CONF = {breaks: true};

const Vue = require("vue"),
      marked = require("marked").setOptions(MD_CONF),
      {html: tidyHtml, css: tidyCss} = require('js-beautify'),
      Clipboard = require("clipboard");

const DEMO = require("./demo.js");

const tidy = (str) => {
  let htmlStr = `<html><head><title>利用規約</title></head><body>${marked(str)}</body></html>`
  return tidyHtml(htmlStr);
};

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
    includeCss: false,
    showModal: false
  },
  filters: {
    marked: marked,
    tidy: tidy,
  }
});

const clipboard = new Clipboard("#copy");
