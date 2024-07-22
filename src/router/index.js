import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout/index.vue";
import Login from "@/views/login/login.vue";

const Identify = () => import('@/views/identify/index.vue')
const IdentifyCase = () => import('@/views/identify/case/index.vue')

const Confirm = () => import('@/views/confirm/index.vue')
const ConfirmCase = () => import('@/views/confirm/case/index.vue')

const Follow = () => import('@/views/follow/index.vue')
const FollowCase = () => import('@/views/follow/case/index.vue')

const Review = () => import('@/views/review/index.vue')
const ReviewCase = () => import('@/views/review/case/index.vue')
Vue.use(VueRouter);

const constantRoutes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "/",
        redirect: "identify/identify-case",
      },
      {
        path: "/identify",
        name: "identify",
        component: Identify,
        children: [
          {
            path: "identify-case",
            name: "IdentifyCase",
            component: IdentifyCase,
          },
        ],
      },
      {
        path: "/follow-up",
        name: "ollowUp",
        component: Follow,
        children: [
          {
            path: "follow-case",
            name: "FollowUpCase",
            component: FollowCase,
          },
        ],
      },
      {
        path: "/confirm",
        name: "Confirm",
        component: Confirm,
        children: [
          {
            path: "confirm-case",
            name: "ConfirmCase",
            component: ConfirmCase,
          },
        ],
      },
      {
        path: "/review",
        name: "Review",
        component: Review,
        children: [
          {
            path: "review-case",
            name: "ReviewCase",
            component: ReviewCase,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRoutes,
});

export default router;
