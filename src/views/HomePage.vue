<template>
  <div class="bg-white-200 w-full scroll-smooth xl:w-4/5 mx-auto xl:px-0 overflow-x-hidden">
    <div
      class="flex flex-row md:justify-center justify-center items-start w-full"
    >
      <SideNav :class="' '" />
      <div class="flex flex-col xl:flex-row min-w-72 md:max-w-7xl ">
        <SmProfile  />
        <div class="flex xl:flex-row ">
          <middle-tap class="w-full"> </middle-tap>
          <RightNav class="max-w-7xl top-0 " />
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
import SmProfile from "../components/SmProfile.vue";

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
