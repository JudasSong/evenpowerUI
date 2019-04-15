import Vue from 'vue'
import App from './App'
import router from './router'
import 'highlight.js/styles/color-brewer.css' //导入高亮样式
import 'vue2-animate/dist/vue2-animate.min.css'
import './assets/css/index.less'; //导入基本样式
import CodeBlock from './components/CodeBlock.vue'//高亮代码块组件

import Evenpower from '../package/index'
import '../package/theme-set/lib/index.css' //导入UI样式
// import Evenpower from 'evenpower-ui'

Vue.component('code-block', CodeBlock)
Vue.use(Evenpower);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  window.scrollTo({top: 0, behavior: "smooth"})
  next();
})
