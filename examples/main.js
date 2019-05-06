import Vue from 'vue'
import App from './App'
import router from './router'
import 'highlight.js/styles/color-brewer.css' //导入高亮样式
import 'vue2-animate/dist/vue2-animate.min.css'
import './assets/css/index.less'; //导入基本样式
import './demo-styles/index.less'; // 导入组件demo样式
import DemoBlock from './components/DemoBlock.vue' //高亮代码块组件

// ElementUI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// EvenpowerUI自己的组件库
// import EvenpowerUI from 'main/index';
// import 'packages/theme-set/lib/index.css'; //导入UI样式
import EvenpowerUI from 'evenpowerui';
import 'evenpowerui/lib/theme-set/index.css'; //导入UI样式

Vue.component('demo-block', DemoBlock);
Vue.use(EvenpowerUI);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
});
// new Vue({
//   ...App,
//   router,
// }).$mount('#app');

router.beforeEach((to, from, next) => {
  window.scrollTo({ top: 0, behavior: "smooth" })
  next();
})
