// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import 'common/stylus/index.styl';

Vue.config.productionTip = false;

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [{
  // 设定url路径
  path: '/',
  redirect: '/goods'
}, {
  // 设定url路径
  path: '/goods',
  // 设定url路径的映射文件
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}];
// }, {
//   path: '/ratings',
//   component: ratings
// }, {
//   path: '/seller',
//   component: seller

const router = new VueRouter({
  // 配置激活项的类名
  linkActiveClass: 'active',
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
