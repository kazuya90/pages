"use strict";

Vue.component("my-tag", {
  props: ["text"],
  template: "<div class='c-article__tag__text'>{{text}}</div>",
});

var v = new Vue({
  el: "#app",
  data: {
    items: [
      { key: 1, value: "test" },
      { key: 2, value: "check" },
      { key: 2, value: "hello" },
    ],
  },
});
