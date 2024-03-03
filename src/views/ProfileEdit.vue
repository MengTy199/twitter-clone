<template>
  <div class="bg-white scroll-smooth ">
    <div class="flex flex-row justify-center items-top">
      <SideNav />
      <div class="flex flex-row items-center justify-around">
        <div class="flex flex-col items-center justify-center">          <!-- Profile -->
          <profile-middle/>
        </div>
        <RightNav />
      </div>
    </div>
  </div>
</template>

<script>
import RightNav from "../components/rights/RightNav.vue";
import SideNav from "../components/SideNav.vue";
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";
// import ProfileTap from "@/components/profiles/ProfileTap.vue";
import ProfileMiddle from "@/components/profiles/ProfileMiddle.vue";
export default {
  components: { SideNav, RightNav, ProfileMiddle },
  setup(){
        // initialize components based on data attribute selectors
      onMounted(() => {
      initFlowbite();
    });
  }
};
</script> 