<template>
  <div class="h-screen flex flex-col justify-center xl:justify-center items-end xl:w-[80%] w-full xl:p-0 p-2 overflow-hidden mx-auto ">
    <div class=" grid gird-cols-1  md:grid-cols-2 xl:grid-cols-2 w-full">
      <div class="mx-auto xl:w-600">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f8dc5431091769.5640f77be5837.png"
          class="xl:w-600 md:w-450 w-350"
        />
      </div>
      <div class="mx-auto  w-350 md:w-450 xl:w-500 shadow-xl border-2 rounded-lg p-5 md:p-5 xl:p-10 flex flex-col justify-center">
        <div class="text-center py-4">
          <h1 class="text-xl font-medium xl:text-3xl xl:font-bold">
            <span class="text-gray-700">
              Login
            </span>
          </h1>
        </div>
        <div
          class=" flex flex-col justify-stretch text-center space-y-6"
        >
          <form @submit.prevent="handleLogin" class="space-y-6 xl:w-350 w-300  mx-auto   ">
            <div class="w-full flex flex-col xl:flex-row  items-start xl:items-center justify-start xl:justify-center ">
              <label for="username" class="left-0 space-y-2 xl:space-y-2 xl:pr-3 font-medium capitalize text-md text-center">Username</label>
              <input
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                type="text"
                placeholder="Enter your Email"
                v-model="username"
                id="username"
                required
              />
            </div>
            <div class="w-full flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-center">
              <label for="password" class="left-0 space-y-2 xl:space-y-2 xl:pr-4 font-medium capitalize text-md text-center">Password</label>
              <input
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                type="password"
                placeholder="Enter your Password"
                v-model="password"
                id="password"
                required
              />
            </div>
            <div class="flex flex-col w-full">
              <button
                type="submit"
                class="w-full bg-gray-700 text-gray-50 x-1 px-10 py-1 xl:py-2 cursor-pointer rounded-lg"
              >
                <p class="text-cente">Login</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";

import { useUserStore } from "../stores/user";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    handleLogin() {
      // console.log(this.email , this.password) return true or false
      // console.log(this.getUser[0]);
      if (this.checkLogin(this.username, this.password)) {
        this.$router.push("/homePage");
      }

      this.username = "";
      this.password = "";
    },
    ...mapActions(useUserStore, ["setCurrentUser", "updateUser"]),
    updateUser(id) {
      this.id === id;
    },
    checkLogin(username, password) {
      let ckeck = false;
      this.getUser.forEach((item) => {
        if (item.username === username && item.password === password) {
          this.setCurrentUser(item);
          this.isLoggedIn = true;
          ckeck = true;
        }
      });
      return ckeck;
    },
  },

  computed: {
    ...mapState(useUserStore, ["getUser", "isLoggedIn"]),
  },
};
</script>
