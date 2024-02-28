<template>
  <div class="middle w-450 md:w-450 xl:w-600 border-[1px]">
    <form @submit.prevent="handleSubmit">
      <!-- container form -->
      <div
        class="w-full mb-4 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
      >
        <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
          <label for="text" class="sr-only">Publish post</label>
          <textarea
            v-model="newTweet.text"
            id="text"
            rows="2"
            class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 resize-none overflow-hidden"
            placeholder="Write an article..."
            required
          />
        </div>

        <!-- icon -->
        <div
          class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600"
        >
          <div
            class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600"
          >
            <div
              class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4"
            >
              <button
                type="button"
                data-modal-target="authentication-modal-1"
                data-modal-toggle="authentication-modal-1"
                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                  />
                </svg>
                <span class="sr-only">Attach file</span>
              </button>
              <button
                type="button"
                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path
                    d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                  />
                </svg>
                <span class="sr-only">Embed map</span>
              </button>
              <button
                type="button"
                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path
                    d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
                  />
                  <path
                    d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
                  />
                </svg>
                <span class="sr-only">Upload image</span>
              </button>
              <button
                type="button"
                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path
                    d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"
                  />
                  <path
                    d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z"
                  />
                </svg>
                <span class="sr-only">Format code</span>
              </button>
              <button
                type="button"
                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z"
                  />
                </svg>
                <span class="sr-only">Add emoji</span>
              </button>
            </div>
          </div>
          <button
            type="button"
            data-tooltip-target="tooltip-fullscreen"
            class="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 19 19"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5"
              />
            </svg>
            <span class="sr-only">Full screen</span>
          </button>
          <div
            id="tooltip-fullscreen"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Show full screen
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
      <!-- button -->
      <div class="flex flex-row items-center justify-end mr-4">
        <button
          type="submit"
          class="inline-flex items-end px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-3xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          <span class="text-sm">post</span>
        </button>
      </div>
    </form>

    <!-- post view -->

    <post-view />
    <!-- <div
      class="w-600 bg-red-400 block"
      v-for="tweet in tweetStore.getTweets"
      :key="tweet.id"
    >



      <p>{{ tweet.text }}</p>
      <img :src="tweet.image" alt="" /> -->
    <!-- </div>  -->

    <!-- <p>{{ tweetStore.getTweets }}</p> -->
  </div>

  <!-- Main modal -->
  <div
    id="authentication-modal-1"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Image Url
          </h3>
          <button
            type="button"
            class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal-1"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5">
          <div>
            <label
              for="image"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Your Image</label
            >
            <input
              type="text"
              v-model="newTweet.image"
              id="image"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

//
<script setup>
import { useTweetStore } from "@/stores/tweets";
import { useUserStore } from "@/stores/user";
import { ref } from "vue";
const tweetStore = useTweetStore();
const userStore = useUserStore();
import PostView from "./PostView.vue";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
// store in ref
const newTweet = ref({
  byUser: userStore.currentUsers.username,
  text: "",
  image: "",
});
const handleSubmit = () => {
  tweetStore.addTweet(newTweet.value);
  newTweet.value = {
    // Reset the form (optional)
    byUser: "",
    text: "",
    image: "",
  };
};
</script>

// import { useTweetStore } from "@/stores/tweets"; // import { useUserStore }
from "@/stores/user"; // import { computed } from 'vue'; // // Import 'ref' from
Vue only if it's not already imported elsewhere // // import { ref } from "vue";
// Optional import // export default { // setup() { // const tweetStore =
useTweetStore(); // const userStore = useUserStore(); // // Using a computed
property for cleaner state access // const newTweet = computed(() => ({ //
byUser: userStore.currentUsers.username, // text: "", // })); // const
handleSubmit = () => { // tweetStore.addTweet(newTweet.value); //
newTweet.value.text = ""; // Reset only the text field // }; // return { //
newTweet, // handleSubmit, // tweetStore, // userStore // }; // }, // }; // //
import { mapState, mapActions, mapStores } from "pinia"; // import useTweetStore
from '../stores/tweets'; // import { useUserStore } from "../stores/user";export
default { // data(){ // return{ // text: '' // } // }, // methods:{ //
...mapActions(useTweetStore, ['addTweets']) // }, // computed:{ //
...mapState(useTweetStore, ["getTweets"]), // ...mapStores(useTweetStore,
["addTweets"]), // ...mapState(useUserStore, ["getCurrentUser"]), // } // };
