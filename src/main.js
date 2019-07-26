import Vue from 'vue'
import carousel from './carousel.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(carousel),
}).$mount('#app')
