import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      // redirect: "/product-list",

      component: () => import("../components/adminDashboard/Dashboard.vue"),
      children: [
        {
          path: "/create-product",
          name: "create-product",
          component: () => import("../components/adminDashboard/create-products.vue"),
        },
        {
          path: "/update-product/:id",
          name: "update-product",
          component: () => import("../components/adminDashboard/update-products.vue"),
        },
        {
          path: "/product-list",
          name: "product-list",
          component: () => import("../components/adminDashboard/Product-list.vue"),
        },
        {
          path: "/create-category/",
          name: "create-category",
          component: () => import("../components/adminDashboard/create-categories.vue"),
        },
        {
          path: "/update-category/:id",
          name: "update-category",
          component: () => import("../components/adminDashboard/update-category.vue"),
        },
        {
          path: "/categories-list",
          name: "categories",
          component: () => import("../components/adminDashboard/categories-list.vue"),
        },
        {
          path: "/order-list",
          name: "orders",
          component: () => import("../components/adminDashboard/order-list.vue"),
        },
      ],
    },
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
      path: "/blog",
      name: "blog",
      component: () => import("../pages/Blog.vue"),
    },
    {
      path: "/vozvrat",
      name: "vozvrat",
      component: () => import("../pages/Vozvrat.vue"),
    },
    {
      path: "/guarantee",
      name: "guarantee",
      component: () => import("../pages/Guarantee.vue"),
    },

    {
      path: "/catalog",
      name: "catalog",
      component: () => import("../pages/Catalog.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../pages/Products.vue"),
    },
    {
      path: "/products/:id",
      name: "product-details",
      component: () => import("../pages/ProductDetails.vue"),
    },

    {
      path: "/cart",
      name: "cart",
      component: () => import("@/pages/Cart.vue"),
    },

    {
      path: "/liked",
      name: "Liked",
      component: () => import("@/pages/Liked.vue"),
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
