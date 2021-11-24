import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user-create",
    name: "user",
    component: () => import("../components/user/create.vue"),
  },
  {
    path: "/role",
    name: "role",
    component: () => import("../views/Role.vue"),
  },
  {
    path: "/role-create",
    name: "rolecreate",
    component: () => import("../components/role/create.vue"),
  },
  {
    path: "/partner",
    name: "partner",
    component: () => import("../views/Partner.vue"),
  },
  {
    path: "/partner-create",
    name: "partnercreate",
    component: () => import("../components/partner/create.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
