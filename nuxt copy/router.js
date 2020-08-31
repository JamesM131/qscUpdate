import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6cf60ce6 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _250f0c03 = () => interopDefault(import('../pages/areas-of-practice.vue' /* webpackChunkName: "pages/areas-of-practice" */))
const _7b524195 = () => interopDefault(import('../pages/barristers/index.vue' /* webpackChunkName: "pages/barristers/index" */))
const _0a233fb9 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _ce02bd1a = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _1e8e402d = () => interopDefault(import('../pages/barristers/_name.vue' /* webpackChunkName: "pages/barristers/_name" */))
const _e6a430aa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6cf60ce6,
    name: "about"
  }, {
    path: "/areas-of-practice",
    component: _250f0c03,
    name: "areas-of-practice"
  }, {
    path: "/barristers",
    component: _7b524195,
    name: "barristers"
  }, {
    path: "/contact",
    component: _0a233fb9,
    name: "contact"
  }, {
    path: "/inspire",
    component: _ce02bd1a,
    name: "inspire"
  }, {
    path: "/barristers/:name",
    component: _1e8e402d,
    name: "barristers-name"
  }, {
    path: "/",
    component: _e6a430aa,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
