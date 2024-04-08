<template>
    <div class="w-auto xs:w-450 md:w-450 xl:w-600 border-[1px]">
      <InputForm />
    <div v-for="tweet in taskFollowing" :key="tweet.id">
      <PostView :tweet="tweet" />
    </div>
    <loading-page/>
  </div>
</template>

<script>
import PostView from "@/components/modal/PostView.vue";
import InputForm from "../components/InputForm.vue";
import LoadingPage from '@/components/loading/LoadingPage.vue';
export default {
  components: { PostView, InputForm, LoadingPage },
  data() {
    return {
      taskFollowing: [
        {
          id: 1,
          byUser: "Tola", // Set default value if not provided
          text: "Good night",
          image: "https://cdn-icons-png.flaticon.com/512/1809/1809597.png",
          date: new Date().toDateString(), // Use current date/time if not provided
        },{
          id: 2,
          byUser: "SeyHa", // Set default value if not provided
          text: "Good night",
          image: "https://cdn-icons-png.flaticon.com/512/1809/1809597.png",
          date: new Date().toDateString(), // Use current date/time if not provided
        },
      ],
    };
  },
};
</script>
