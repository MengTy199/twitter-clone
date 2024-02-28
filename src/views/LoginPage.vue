<template>
  <div class="h-screen flex flex-col justify-center">
    <div class="mx-auto w-450 h-64 md:w-600 shadow-xl border-2 rounded-lg">
      <div
        class="container flex flex-col justify-stretch text-center space-y-6"
      >
        <p
          class="w-full bg-gray-700 text-gray-50 py-1 px-10 cursor-pointer rounded-lg"
        >
          Welcom to Twitter 
        </p>
        <form @submit.prevent="handleLogin" class="space-y-4 w-300 mx-auto">
          <div class="w-full flex flex-row justify-between">
            <label for="username" class="left-0">username</label>
            <input
              class="rounded-md border-none hover:border-gray-600 py-1"
              type="text"
              placeholder="Enter your Email"
              v-model="username"
              id="username"
            />
          </div>
          <div class="w-full flex flex-row justify-between">
            <label for="password" class="text-left">Password</label>
            <input
              class="rounded-md border-none hover:border-gray-600 py-1"
              type="password"
              placeholder="Enter your Password"
              v-model="password"
              id="password"
            />
          </div>
          <div class="flex flex-col w-full">
            <button
              type="submit"
              class="w-full bg-gray-700 text-gray-50 py-1 px-10 cursor-pointer rounded-lg"
            >
              <p class="text-cente">Login</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState , mapActions} from "pinia";

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
      console.log(this.getUser[0]);
      if (this.checkLogin(this.username, this.password)) {
        this.$router.push('/homePage')
      }

      this.username = "";
      this.password = "";
    },
    ...mapActions(useUserStore, ['setCurrentUser']),
    checkLogin(username, password) {
      let ckeck = false;
      this.getUser.forEach((item) => {
        if (item.username === username && item.password === password) {
          this.setCurrentUser(item)
          ckeck = true;
        }
      });
      return ckeck;
    },
  },

  computed: {
    ...mapState(useUserStore, ["getUser"]),
  },
};
</script>
