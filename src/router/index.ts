import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AuthView from "../views/AuthView.vue";
// import AnalyticsView from "../views/AnalyticsView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: AuthView,
  },
  {
    path: "/analytics",
    name: "analytics",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AnalyticsView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
