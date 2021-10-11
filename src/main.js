import Vue from "vue";
import Quiz from "./Quiz.vue";
import questions from "./questions";

import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Quiz, { props: { questions } })
}).$mount("#app");
