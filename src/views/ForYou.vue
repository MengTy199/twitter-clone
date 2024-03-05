<template>
  <!-- <div class="w-400 xs:w-450 md:w-450 xl:w-600 border-[1px]">
    <middle-nav />
    <loading-page />
  </div> -->
  <div class="w-400 xs:w-450 md:w-450 xl:w-600 border-[1px]">
      <InputForm />
    <div v-for="tweet in viewTweets" :key="tweet.id">
      <PostView :tweet="tweet" />
    </div>
    <loading-page/>
  </div>
</template>

<script setup>
import LoadingPage from '@/components/loading/LoadingPage.vue';
import InputForm from '@/components/InputForm.vue';
import PostView from '@/components/modal/PostView.vue';
import { useTweetStore } from '@/stores/tweets';
// import MiddleNav from "@/components/middles/MiddleNav.vue";
const tweetStore = useTweetStore();

    const viewTweets = tweetStore.tweets.reverse();
</script>
