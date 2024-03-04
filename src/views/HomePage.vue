<template>

    <div class="bg-white scroll-smooth">
      <div class="container mx-auto h-screen">
        <div class="flex flex-row justify-center items-top">
          <SideNav :class="'hidden xl:block '"/>
          <div class="flex flex-col xl:flex-row ">
            <SmProfile/>
            <middle-tap class=""> </middle-tap>
            <!-- <MiddleNav class="overflow-x-hidden "/> -->
            <RightNav />
          </div>
        </div>
      </div>
    </div>
    <button class="bg-red-600 w-60 hidden">{{ userStore.getpf }}</button>
</template>

<script setup>
import SideNav from "@/components/SideNav.vue";
import RightNav from "@/components/rights/RightNav.vue";
// import MiddleNav from "@/components/MiddleNav.vue";
import MiddleTap from "../components/middles/MiddleTap.vue";
import SmProfile from "../components/SmProfile.vue"

import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
// const find = userStore.users
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 3s ease;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 3s ease;
}
</style>
