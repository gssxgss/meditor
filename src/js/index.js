const MD_CONF = {breaks: true};

const Vue = require("vue"),
      marked = require("marked").setOptions(MD_CONF),
      {html: tidyHtml, css: tidyCss} = require('js-beautify');

const DEMO = require("./demo.js");


const tidy = (str) => {
  return tidyHtml(marked(str));
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
    includeCss: true,
    showModal: false
  },
  filters: {
    marked: marked,
    tidy: tidy,
  }
});
