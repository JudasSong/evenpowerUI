import Vue from 'vue';
import Router from 'vue-router';
import navConf from './router.json';
import demoConf from './demo.json';

Vue.use(Router);

let routes = [];

// 教程菜单
Object.keys(navConf).forEach((header) => {
  routes = routes.concat(navConf[header])
});

// 演示用例菜单
Object.keys(demoConf).forEach((header) => {
  routes = routes.concat(demoConf[header])
});

let addComponent = (router) => {
  router.forEach((route) => {
    if (route.items) {
      addComponent(route.items)
      routes = routes.concat(route.items)
    } else {
      if (route.type === 'other') {
        route.component = r => require.ensure([], () =>
          r(require(`../docs/${route.name}.vue`)))
        return
      }

      if (route.type === 'demo') {
        route.component = r => require.ensure([], () =>
          r(require(`@/views/${route.name}/${route.name}.vue`)))
        return
      }
      route.component = r => require.ensure([], () =>
        r(require(`../docs/${route.name}.md`)))
    }
  })
}

addComponent(routes);
routes.push({ path: '/', redirect: '/giud' });

export default new Router({
  // linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: routes
});
