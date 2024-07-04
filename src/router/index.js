import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/aboutus",
      name: "aboutcom",
      component: () => import("../pages/AboutCompany.vue"),
    },
    {
      path: "/delivery",
      name: "dastavka",
      component: () => import("../pages/Dostavka.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../pages/Contact.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("../pages/NotFound.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (
        to.matched.length > 1 &&
        from.matched.length > 1 &&
        to.matched[0].path === from.matched[0].path
      ) {
        return {};
      }
      return { top: 0 };
    }
  },
});

export default router;
