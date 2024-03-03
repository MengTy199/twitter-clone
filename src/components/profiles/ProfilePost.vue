<template>
  <div class="w-600 overflow-hidden">
    <div class="px-4 pt-2 pb-1">
      <h1 class="font-bold text-xl text-black">Let's get you set up</h1>
    </div>
    <!-- slide -->
    <div class="w-full">
      <div
        id="controls-carousel"
        class="relative w-full"
        data-carousel="static "
      >
        <!-- Carousel wrapper -->
        <div class="relative h-44 overflow-hidden rounded-lg md:h-44 w-400">
          <!-- Item 1 -->
          <div
            class="duration-700 ease-in-out grid grid-cols-3 gap-3 mt-4"
            data-carousel-item
          >
            <follow-post
              :title="'Trun on notifications'"
              :icon="'fa-solid fa-bell'"
              :className="'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'"
            />
            <follow-post
              :title="'Using X'"
              :icon="'fa-solid fa-circle-xmark'"
              :className="'bg-gradient-to-r from-green-400 to-blue-500'"
            />
            <follow-post
              :title="'Satfety and securtiy'"
              :icon="'fa-solid fa-unlock-keyhole'"
              :className="'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'"
            />
          </div>
          <!-- Item 2 -->
          <div
            class="duration-700 ease-in-out grid grid-cols-3 gap-3 mt-4"
            data-carousel-item="active"
          >
            <follow-post
              :title="'Follow 5 accounts'"
              :className="'bg-gradient-to-r from-cyan-500 to-blue-500'"
              :icon="'fa-solid fa-user-plus'"
            />
            <follow-post
              :title="'Complete you profile'"
              :className="'bg-gradient-to-r from-indigo-500 '"
              :icon="'fa-solid fa-user'"
            />
            <follow-post
              :title="'Follow 3 Topics'"
              :className="'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-5000'"
              :icon="'fa-solid fa-comment'"
            />
          </div>
        </div>
        <!-- Slider controls -->
        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
    <!-- post view -->
    <div v-for="tweet in viewTweets" :key="tweet.id">
      <post-view :tweet="tweet" />
    </div>

    <!-- who follow -->
    <who-follow />
    <loading-page/>
  </div>
</template>

<script>
import { useTweetStore } from "@/stores/tweets";
import PostView from "../modal/PostView.vue";
import FollowPost from "./FollowPost.vue";
import WhoFollow from "../rights/WhoFollow.vue";
import LoadingPage from "../loading/LoadingPage.vue";
export default {
  props: ["tweet"],
  components: { PostView, FollowPost, WhoFollow,LoadingPage },
  setup() {
    const tweetStore = useTweetStore();

    function singleItem(name) {
      return name.id === 1;
    }

    const viewTweets = tweetStore.tweets.filter(singleItem);

    return { tweetStore, viewTweets };
  },
};
</script>
