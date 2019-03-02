import Vue from 'vue';
import VueRouter, { RouterMode } from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

// tslint:disable-next-line:no-console
console.log('router loaded...');
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function(/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0, x: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE as RouterMode,
    base: process.env.VUE_ROUTER_BASE,
  });

  return Router;
}
