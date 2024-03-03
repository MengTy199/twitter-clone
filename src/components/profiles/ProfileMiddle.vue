<template>
  <div class="middle w-450 md:w-450 xl:w-600 border-[1px]">
    <div class="sticky top-0 left-0 z-40 bg-gray-50 shadow-md">
      <div class="h-14 flex flex-row items-center justify-between w-32 px-2">
        <router-link class="arrow" to="/homePage">
          <i class="fa-solid fa-arrow-left cursor-pointer"></i>
        </router-link>

        <div class="flex flex-col items-start justify-between">
          <h1 class="text-md font-bold">{{ userStore.getCurrentUser.username }}</h1>
          <p class="text-sm">{{ tweetStore.getTweetsPost }} Post</p>
        </div>
      </div>
    </div>
    <div class="h-44 bg-gray-400 w"></div>

    <div class="h-20 relative">
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
          <span class="text-md">Edit Profile</span>
        </button>
      </div>
    </div>

    <div class="h-28 bg-white px-4">
      <div class="name">
        <h1 class="text-md font-bold">{{ userStore.getCurrentUser.username }}</h1>
        <p class="text-sm text-gray-400">@Limmengty</p>
      </div>
      <div class="following flex flex-col mt-2 justify-start">
        <p class="text-gray-400 text-sm">Joined February 2024</p>
        <div class="flex flex-row gap-6">
          <h1>
            <span class="text-md font-bold">100</span>
            <span class="text-gray-400 text-sm">Following</span>
          </h1>
          <h1>
            <span class="text-md font-bold">5</span>
            <span class="text-gray-400 text-sm">Follwers</span>
          </h1>
        </div>
      </div>
    </div>

    <!-- profile tap  -->
    <div>
      <profile-tap />
    </div>

    <profile-modal />
  </div>
</template>

<script setup>
import ProfileTap from "../profiles/ProfileTap.vue";
import ProfileModal from "../profiles/ProfileModal.vue";

// export default {
//   components: { ButtonCustom },
// };
import { useTweetStore } from "@/stores/tweets";
import { useUserStore } from "@/stores/user";


const userStore = useUserStore();
const tweetStore = useTweetStore();

</script>
