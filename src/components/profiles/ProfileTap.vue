<template>
  <div class="flex flex-col justify-center w-600">
    <div
      class="border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-gray-50 z-10 shadow-md"
    >
      <ul
        class="flex flex-row justify-center items-center w-full -mb-px text-sm font-medium text-center text-md"
        id="default-tab"
        data-tabs-toggle="#default-tab-content"
        role="tablist"
      >
        <li class="me-2 w-200" role="presentation">
          <button
            class="inline-block p-4 border-b-4 rounded-t-lg"
            id="Posts-tab"
            data-tabs-target="#Posts"
            type="button"
            role="tab"
            aria-controls="Posts"
            aria-selected="false"
          >
            Posts
          </button>
        </li>
        <li class="me-2 w-200" role="presentation">
          <button
            class="inline-block p-4 border-b-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="Replies-tab"
            data-tabs-target="#Replies"
            type="button"
            role="tab"
            aria-controls="Replies"
            aria-selected="false"
          >
            Replies
          </button>
        </li>
        <li class="me-2 w-200" role="presentation">
          <button
            class="inline-block p-4 border-b-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="Highlight-tab"
            data-tabs-target="#Highlight"
            type="button"
            role="tab"
            aria-controls="Highlight"
            aria-selected="false"
          >
            Highlight
          </button>
        </li>

        <li class="me-2 w-200" role="presentation">
          <button
            class="inline-block p-4 border-b-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="Articles-tab"
            data-tabs-target="#Articles"
            type="button"
            role="tab"
            aria-controls="Articles"
            aria-selected="false"
          >
            Articles
          </button>
        </li>
        <li class="me-2 w-200" role="presentation">
          <button
            class="inline-block p-4 border-b-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="Media-tab"
            data-tabs-target="#Media"
            type="button"
            role="tab"
            aria-controls="Media"
            aria-selected="false"
          >
            Media
          </button>
        </li>

        <li class="me-2 w-200" role="presentation">
          <button
            class="inline-block p-4 border-b-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="Likes-tab"
            data-tabs-target="#Likes "
            type="button"
            role="tab"
            aria-controls="Likes"
            aria-selected="false"
          >
            Likes
          </button>
        </li>
      </ul>
    </div>
    <div id="default-tab-content" class="flex flex-col">
      <div
        class="hidden rounded-lg bg-gray-50 dark:bg-gray-800"
        id="Posts"
        role="tabpanel"
        aria-labelledby="Posts-tab"
      >
        <profile-post />
      </div>
      <div
        class="hidden rounded-lg bg-gray-50 dark:bg-gray-800"
        id="Replies"
        role="tabpanel"
        aria-labelledby="Replies-tab"
      >
        <profile-post />
      </div>
      <div
        class="hidden rounded-lg bg-gray-50 dark:bg-gray-800 h-screen"
        id="Highlight"
        role="tabpanel"
        aria-labelledby="Highlight-tab"
      >
        <!-- <FollowingPost /> -->
        Highlight
      </div>

      <div
        class="hidden rounded-lg bg-gray-50 dark:bg-gray-800 h-screen"
        id="Articles"
        role="tabpanel"
        aria-labelledby="Articles-tab"
      >
        Articles
      </div>
      <div
        class="hidden rounded-lg bg-gray-50 dark:bg-gray-800 h-screen"
        id="Media"
        role="tabpanel"
        aria-labelledby="Media-tab"
      >
        Media
      </div>
      <div
        class="hidden rounded-lg bg-gray-50 dark:bg-gray-800 h-screen"
        id="Likes"
        role="tabpanel"
        aria-labelledby="Likes-tab"
      >
        Likessffsdfdsdfdfsd
      </div>
    </div>
  </div>
</template>

<script setup>
// import ProfileMiddle from "../profiles/ProfileMiddle.vue";
import ProfilePost from "../profiles/ProfilePost.vue";
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
