import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AuthView from "../views/AuthView.vue";
import PageNotFound from "../components/PageNotFound.vue";

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
    component: () => import("../views/AnalyticsView.vue"),
  },
  { path: "*", component: PageNotFound },
];

const router = new VueRouter({
  mode: "hash",
  base: "/test-leadhit/",
  routes,
});

export default router;
