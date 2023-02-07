import Vue from "vue";
import VueRouter from "vue-router";
import { testRoutes } from "./testRouter";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/home.vue"),
  },
  ...testRoutes,
];

export default new VueRouter({
  routes,
});
