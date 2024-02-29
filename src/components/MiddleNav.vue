<template>
  <div class="middle w-450 md:w-450 xl:w-600 border-[1px]">

    <input-form />

    <!-- post view -->
    <div v-for="tweet in viewTweets" :key="tweet.id">
    <post-view :tweet="tweet"/>

    </div>
  </div>


</template>

//
<script>
import { useTweetStore } from "@/stores/tweets";

import PostView from "./PostView.vue";
import InputForm from './InputForm.vue';

export default {
  components: { PostView, InputForm },
  setup() {
    const tweetStore = useTweetStore();


const viewTweets = tweetStore.tweets.reverse();
    return {viewTweets };
  },
};
</script>
