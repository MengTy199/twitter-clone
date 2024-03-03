import { createRouter, createWebHistory } from "vue-router";

// Import your components
import LoginPage from "./../views/LoginPage.vue";
import HomePage from "./../views/HomePage.vue";
import ProfileEditVue from "@/views/ProfileEdit.vue";
import { useUserStore } from "@/stores/user";
import PageNotFound from "@/components/notfounds/PageNotFound.vue";
// import { turn } from "core-js/core/array";
const routes = [
    { path: '/:pathMatch(.*)*', name: 'notfound', component: PageNotFound,  meta: { requiresAuth: true }},
  { path: "/", component: LoginPage },
  { path: "/homePage", component: HomePage, meta: { requiresAuth: true } },
  { path: "/profile", component: ProfileEditVue, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const userStore = useUserStore()

  // Check if route requires authentication
  if (to.meta.requiresAuth && !userStore.isLoggedIn) return '/'
});


export default router