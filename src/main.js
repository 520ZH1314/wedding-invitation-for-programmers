import Vue from 'vue'
import router from './route/index'
import Wedding from './Wedding.vue'
import Bus from './utils/bus'     // 引入Bus组件

Vue.prototype.$bus = Bus

/* eslint-disable no-new */
new Vue({

  el: '#app',
  router,
  render: h => h(Wedding)
})
