<template>
  <div class="h-screen flex flex-col justify-center xl:justify-center items-center w-screen ">
    <div class=" grid gird-cols-1  md:grid-cols-2 xl:grid-cols-2 w-full">
      <div class="mx-auto w-full  md:w-600">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f8dc5431091769.5640f77be5837.png"
          alt=""
        />
      </div>
      <div class="mx-auto  shadow-xl border-2 rounded-lg p-5 md:p-5 xl:p-10 flex flex-col justify-center">
        <div
          class="container flex flex-col justify-stretch text-center space-y-6"
        >
          <form @submit.prevent="handleLogin" class="space-y-6 w-350 mx-auto   ">
            <div class="w-full flex flex-col xl:flex-row items-start justify-start xl:justify-center ">
              <label for="username" class="left-0 space-y-2">Username</label>
              <input
                class="rounded-md border-[1px] w-full hover:border-gray-600 py-1 space-y-2"
                type="text"
                placeholder="Enter your Email"
                v-model="username"
                id="username"
                required
              />
            </div>
            <div class="w-full flex flex-col xl:flex-row items-start justify-start xl:justify-center">
              <label for="password" class="text-left">Password</label>
              <input
                class="rounded-md border-[1px] w-full hover:border-gray-600 py-1"
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
