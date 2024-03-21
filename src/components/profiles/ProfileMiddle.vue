<template>
  <transition appear name="fade">
  <div class="w-400 xs:w-450 md:w-450 xl:w-600 border-[1px] ">
    <div class="sticky top-0 left-0 z-40 bg-gray-50 shadow-md">
      <div class="h-14 flex flex-row items-center justify-start   ">
        <router-link class="arrow" to="/homePage">
          <i class="fa-solid fa-arrow-left cursor-pointer px-2"></i>
        </router-link>

        <div class="flex flex-col items-start justify-center w-100 xs:w-100  xs:px-2 md:w-100 xl:w-100 ">
          <h1 class="text-[13px] xl:text-md font-bold ">{{ userStore.getCurrentUser.username }}</h1>
          <p class="text-[11px] xl:text-sm">{{ tweetStore.getTweetsPost }} Post</p>
        </div>
      </div>
    </div>
    <div class="h-44 bg-gray-400 "></div>

    <div class="h-20 relative w-400 px-2 xs:w-450 md:w-450 xl:w-600 ">
      <div class="absolute -top-[100%] left-5">
        <img
          :src="userStore.getpf"
          class="border-4 border-white rounded-full w-32 h-32 top-0 left-0 hover:cursor-pointer transition-all"
        />
      </div>
      <div class="float-end mt-3">
        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          type="submit"
          class="px-5 py-2.5 text-sm font-medium text-center border-[1px] border-gray-300 text-gray-700 bg-gray-50 rounded-3xl dark:focus:ring-gray-900 hover:bg-gray-100"
        >
          <span class="xl:text-md text-sm">Edit Profile</span>
        </button>
      </div>
    </div>

    <div class="h-28 bg-white px-4 w-300 xs:w-350  xs:px-2 md:w-450 xl:w-full">
      <div class="name">
        <h1 class="text-sm xl:text-md font-bold">{{userStore.getCurrentUser.username  }}</h1>
        <p class="text-ls xl:text-sm text-gray-400">@Limmengty</p>
      </div>
      <div class="following flex flex-col mt-2 justify-start">
        <p class="text-gray-400 text-ls xl:text-sm">Joined February 2024</p>
        <div class="flex flex-row gap-6">
          <h1 class="space-x-2">
            <span class="text-ls xl:text-md font-bold">100</span>
            <span class="text-gray-400 text-ls xl:text-sm">Following</span>
          </h1>
          <h1 class="space-x-2">
            <span class="text-ls md:text-md font-bold ">5</span>
            <span class="text-gray-400 text-ls md:text-sm">Follwers</span>
          </h1>
        </div>
      </div>
    </div>

    <!-- profile tap  -->
    <div  >
      <profile-tap />
    </div>

    <profile-modal />
  </div>
  </transition>
</template>

<script>
import ProfileTap from "../profiles/ProfileTap.vue";
import ProfileModal from "../profiles/ProfileModal.vue";
import { useUserStore } from "@/stores/user";
import { useTweetStore } from "@/stores/tweets";
// import {mapActions, mapState} from "pinia";

export default {
  components: { ProfileModal, ProfileTap },
  setup(){
    const userStore = useUserStore();
    const tweetStore = useTweetStore();
    return {userStore, tweetStore}
  }
};

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
