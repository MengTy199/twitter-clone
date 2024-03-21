<template>
  <!-- <div class="w-400 xs:w-450 md:w-450 xl:w-600 border-[1px]">
    <middle-nav />
    <loading-page />
  </div> -->
  <div class="w-400 xs:w-450 md:w-450 xl:w-600 border-[1px]">
      <InputForm />
    <div v-for="(tweet, index) in tweets" :key="index">
      <PostView :tweet="tweet"/>
    </div>
    <loading-page/>
  </div>
</template>

<script>
import LoadingPage from '@/components/loading/LoadingPage.vue';
import InputForm from '@/components/InputForm.vue';
import PostView from '@/components/modal/PostView.vue';
import { useTweetStore } from '@/stores/tweets';
import {mapActions, mapState} from "pinia";
export  default {
  name: "ForYou",
  components: {LoadingPage,InputForm,PostView},
  async created(){
    await this.fetchTweets();
  },
  computed:{
    ...mapState(useTweetStore, ["tweets"]),
  },

  methods:{
    ...mapActions(useTweetStore, ['fetchTweets'])
  }
}

</script>
