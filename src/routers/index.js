import { createRouter, createWebHistory } from "vue-router";

// Import your components
import LoginPage from "./../views/LoginPage.vue";
import HomePage from "./../views/HomePage.vue";
import ProfileEdit from "@/views/ProfileEdit.vue";
// import { useAuthStore } from "@/stores/auth";
import PageNotFound from "@/components/notfounds/PageNotFound.vue";
import GoogleLogin from "@/views/GoogleLogin.vue";
import UserLogin from "@/views/UserLogin.vue";
// import { turn } from "core-js/core/array";
const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: PageNotFound,
    // meta: { requiresAuth: true },
  },
  // { path: "/", component: LoginPage },
  // { path: "/homePage", component: HomePage, meta: { requiresAuth: true } },
  // { path: "/profile", component: ProfileEdit, meta: { requiresAuth: true } },
  // { path: "/google-login", component: GoogleLogin, meta: { requiresAuth: true } },
  { path: "/", component: LoginPage },
  { path: "/homePage", component: HomePage,  },
  { path: "/profile", component: ProfileEdit, },
  { path: "/google-login", component: GoogleLogin,  },
  { path: "/user-login", component: UserLogin,  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to) => {
//   const userStore = useUserStore();
//
//   // Check if route requires authentication
//   if (to.meta.requiresAuth && !userStore.isLoggedIn) return "/";
// });
// router.beforeEach((to) => {
//   const authStore = useAuthStore();
//
//   // Check if route requires authentication
//   if (to.meta.requiresAuth && !authStore.loggedUser == null) return "/";
// });

export default router;
