<template>
    <div class="w-450 md:w-450 xl:w-600 border-[1px]">
      <InputForm />
    <div v-for="tweet in taskFollowing" :key="tweet.id">
      <PostView :tweet="tweet" />
    </div>
  </div>
</template>

<script>
import PostView from "@/components/PostView.vue";
import InputForm from "../components/InputForm.vue";
export default {
  components: { PostView, InputForm },
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
