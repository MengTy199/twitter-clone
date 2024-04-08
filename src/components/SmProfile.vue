<template>
  <div
    class="min-w-full h-14 bg-gray-100 xs:hidden flex flex-row items-center justify-between px-2"
  >
    <router-link to="/" @click="userStore.logout">
      <img :src="userStore.getpf" class="w-12 rounded-full" />
    </router-link>
    <img
      src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f8dc5431091769.5640f77be5837.png"
      class="w-14 md:w-12 xl:w-12  "
    />
    <div class="text-xl">
      <i class="fa-solid fa-gear "></i>
    </div>


  </div>
</template>

<script setup>
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
</script>
