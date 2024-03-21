<template>
  <div class="h-screen flex flex-col justify-center xl:justify-center items-center xl:w-[80%] w-full xl:p-0 px-4  overflow-y-hidden">
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
              <label for="email" class="left-0 space-y-2 xl:space-y-2 xl:pr-3 font-medium capitalize text-md text-center">Email</label>
              <input
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                type="email"
                placeholder="Enter your Email"
                v-model="user_obj.email"
                id="email"
                required
              />
            </div>
            <div class="w-full flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-center">
              <label for="password" class="left-0 space-y-2 xl:space-y-2 xl:pr-4 font-medium capitalize text-md text-center">Password</label>
              <input
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                type="password"
                placeholder="Enter your Password"
                v-model="user_obj.password"
                id="password"
                required
              />
            </div>
            <div class="flex flex-col w-full">
              <button
                type="submit"
                class="w-full bg-gray-700 text-gray-50 x-1 px-10 py-1 xl:py-2 cursor-pointer rounded-lg"
              >
                <p class="text-center">Login</p>
              </button>

            </div>


          </form>
          <div class="space-y-6 xl:w-350 w-300  mx-auto   ">
            <button
                @click="handleGoogleLogin"
                type="submit"
                class="flex flex-row items-center justify-evenly w-full bg-gray-700 text-gray-50 x-1 px-10 py-1 xl:py-2 cursor-pointer rounded-lg"
            >
              <i class="fa-brands fa-google"></i>
              <p class="text-center">{{name}}</p>
            </button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "pinia";
// import axios from "axios";

import { useAuthStore } from "../stores/auth";
// import IconTextButton from "@/components/buttons/IconTextButton.vue";
// import axios from "axios";
export default {
  components: {},
  data() {

    return {
      name: "Login With Google",
      // username: "",
      // password: "",
      user_obj: {
        email: "",
        password: ""
      },
      loginFail: false,
    };
  },
  computed:{
    ...mapState(useAuthStore, ["token"]),
  },
  created() {
    console.log(process.env.VUE_APP_GOOGLE_CLIENT_ID)
    console.log(process.env.VUE_APP_GOOGLE_CALLBACK)
  },

  methods: {
    ...mapActions(useAuthStore, ["login"]),
    async handleLogin(){
      await this.login(this.user_obj.email, this.user_obj.password)
      console.log(this.token + "token will save")
      if(this.token){
        this.$router.push('/user-login')
      }
    },
    handleGoogleLogin(){
      const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.VUE_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.VUE_APP_GOOGLE_CALLBACK}&response_type=code&scope=profile email`;
    //   open new window
      window.location.href = url


    }
    // async handleLogin(){
    //   const {data} = await axios.post("/api/auth/login",{
    //     email: this.user_obj.email,
    //     password: this.user_obj.password
    //   })
    //   console.log(data)
    //   console.log(this.user_obj.email + this.user_obj.password)
    // }

    // handleLogin() {
    //   // console.log(this.email , this.password) return true or false
    //   // console.log(this.getUser[0]);
    //   if (this.checkLogin(this.username, this.password)) {
    //     this.$router.push("/homePage");
    //   }
    //
    //   this.username = "";
    //   this.password = "";
    // },
    // ...mapActions(useUserStore, ["setCurrentUser", "updateUser"]),
    // updateUser(id) {
    //   this.id === id;
    // },
    // checkLogin(username, password) {
    //   let ckeck = false;
    //   this.getUser.forEach((item) => {
    //     if (item.username === username && item.password === password) {
    //       this.setCurrentUser(item);
    //       this.isLoggedIn = true;
    //       ckeck = true;
    //     }
    //   });
    //   return ckeck;
    // },
  },
};
</script>
