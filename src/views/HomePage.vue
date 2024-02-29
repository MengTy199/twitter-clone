<template>
  <div class="bg-white scroll-smooth">
    <div class="container mx-auto h-screen">
      <div class="flex flex-row justify-center items-top ">
        <SideNav />
        <div class="flex ">
          <middle-tap class=""></middle-tap>
          <!-- <MiddleNav class="overflow-x-hidden "/> -->
          <RightNav />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideNav from "@/components/SideNav.vue";
import RightNav from "@/components/RightNav.vue";
// import MiddleNav from "@/components/MiddleNav.vue";
import MiddleTap from "../components/buttons/MiddleTap.vue";

</script>
