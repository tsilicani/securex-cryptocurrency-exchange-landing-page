import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7de59714 = () => interopDefault(import('../pages/blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _767f07fc = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _db11756a = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _23f9cbb1 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _6e60bb98 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/blank-page",
    component: _7de59714,
    name: "blank-page___en"
  }, {
    path: "/contact",
    component: _767f07fc,
    name: "contact___en"
  }, {
    path: "/login",
    component: _db11756a,
    name: "login___en"
  }, {
    path: "/register",
    component: _23f9cbb1,
    name: "register___en"
  }, {
    path: "/ar/",
    component: _6e60bb98,
    name: "index___ar"
  }, {
    path: "/ar/blank-page",
    component: _7de59714,
    name: "blank-page___ar"
  }, {
    path: "/ar/contact",
    component: _767f07fc,
    name: "contact___ar"
  }, {
    path: "/ar/login",
    component: _db11756a,
    name: "login___ar"
  }, {
    path: "/ar/register",
    component: _23f9cbb1,
    name: "register___ar"
  }, {
    path: "/de/",
    component: _6e60bb98,
    name: "index___de"
  }, {
    path: "/de/blank-page",
    component: _7de59714,
    name: "blank-page___de"
  }, {
    path: "/de/contact",
    component: _767f07fc,
    name: "contact___de"
  }, {
    path: "/de/login",
    component: _db11756a,
    name: "login___de"
  }, {
    path: "/de/register",
    component: _23f9cbb1,
    name: "register___de"
  }, {
    path: "/id/",
    component: _6e60bb98,
    name: "index___id"
  }, {
    path: "/id/blank-page",
    component: _7de59714,
    name: "blank-page___id"
  }, {
    path: "/id/contact",
    component: _767f07fc,
    name: "contact___id"
  }, {
    path: "/id/login",
    component: _db11756a,
    name: "login___id"
  }, {
    path: "/id/register",
    component: _23f9cbb1,
    name: "register___id"
  }, {
    path: "/pt/",
    component: _6e60bb98,
    name: "index___pt"
  }, {
    path: "/pt/blank-page",
    component: _7de59714,
    name: "blank-page___pt"
  }, {
    path: "/pt/contact",
    component: _767f07fc,
    name: "contact___pt"
  }, {
    path: "/pt/login",
    component: _db11756a,
    name: "login___pt"
  }, {
    path: "/pt/register",
    component: _23f9cbb1,
    name: "register___pt"
  }, {
    path: "/zh/",
    component: _6e60bb98,
    name: "index___zh"
  }, {
    path: "/zh/blank-page",
    component: _7de59714,
    name: "blank-page___zh"
  }, {
    path: "/zh/contact",
    component: _767f07fc,
    name: "contact___zh"
  }, {
    path: "/zh/login",
    component: _db11756a,
    name: "login___zh"
  }, {
    path: "/zh/register",
    component: _23f9cbb1,
    name: "register___zh"
  }, {
    path: "/",
    component: _6e60bb98,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
