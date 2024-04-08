<template>
  <transition appear name="fade">
    <div
      class="h-full w-auto flex flex-col justify-center hover:bg-gray-100 transition ease-in-out duration-150 p-2 border-t-[1px]"
    >
      <div class="flex flex-row justify-between">
        <div class="profile flex flex-row items-between px-2 py-2">
          <router-link to="/profile">
            <img
              src="https://pbs.twimg.com/profile_images/1761779790766301184/ewiRdecM_400x400.jpg"
              class="rounded-[50%] min-h-12 min-w-12 max-w-12 max-h-12"
            />
          </router-link>
          <div class="text mx-2 flex flex-col">
            <div>
              <span
                class="font-bold capitalize hover:border-b-2 text-gray-600 hover:border-gray-900 hover:cursor-pointer"
                >{{ tweet.byUser }}</span
              >
              <span class="text-sm">.{{ tweet.createdDate }}</span>
            </div>
            <span class="">{{ tweet.text }}</span>
          </div>
        </div>
        <div>
          <i
            class="fa-solid fa-ellipsis hover:text-blue-400 hover:bg-blue-100 p-2 hover:cursor-pointer rounded-full transition ease-in-out duration-150"
          ></i>
        </div>
      </div>
      <div class="postImage p-4 ml-10">
        <img :src="tweet.image" class="rounded-xl object-contain w-30" />
      </div>
      <div
        class="action flex flex-row align-center justify-between ml-10 xl:text-xl md:text-md text-ls"
      >
        <icon-text
          nameButton="637"
          :colorIcon="'hover:text-blue-600'"
          :icon="'fa-regular fa-comment'"
        >
        </icon-text>
        <icon-text
          nameButton="637"
          :colorIcon="'hover:text-green-600'"
          :icon="'fa-solid fa-retweet'"
        >
        </icon-text>
        <icon-text
          nameButton="637"
          :colorIcon="'hover:text-red-600'"
          :icon="'fa-regular fa-heart'"
        >
        </icon-text>
        <icon-text nameButton="637" :icon="'fa-solid fa-chart-column'">
        </icon-text>
        <div class="flex flex-row relative w-20">
          <icon-text
            nameButton=""
            class="absolute top-0 left-0"
            :colorIcon="''"
            :icon="'fa-regular fa-bookmark'"
          >
          </icon-text>
          <icon-text
            nameButton=""
            class="absolute top-0 left-9"
            :colorIcon="''"
            :icon="'fa-solid fa-arrow-up-from-bracket'"
          >
          </icon-text>
        </div>
      </div>
      <!-- <modal-delete /> -->
    </div>
  </transition>
</template>

<script>
import IconText from "../buttons/IconText.vue";
export default {
  props: ["tweet"],
  components: { IconText },
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
