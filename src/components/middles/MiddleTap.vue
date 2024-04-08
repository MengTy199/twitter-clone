<template>
  <transition appear name="fade">
    <div class="flex flex-col justify-start  ">
      <div
        class="border-b border-gray-200 dark:border-gray-700 md:sticky md:top-0 xl:sticky xl:top-0 bg-gray-50 z-10 shadow-md "
      >
        <ul
          class="flex flex-row justify-center items-center w-full -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li class="me-2 w-150 xl:w-200" role="presentation">
            <button
              class="inline-block p-4 border-b-4 rounded-t-lg"
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              For You
            </button>
          </li>
          <li class="me-2 w-15 xl:w-200 " role="presentation">
            <button
              class="inline-block p-4 border-b-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="Followings-tab"
              data-tabs-target="#Followings"
              type="button"
              role="tab"
              aria-controls="Followings"
              aria-selected="false"
            >
              Followings
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content" class="flex flex-col">
        <div
          class="hidden rounded-lg bg-gray-50 dark:bg-gray-800"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <ForYou />
        </div>
        <div
          class="hidden rounded-lg bg-gray-50 dark:bg-gray-800"
          id="Followings"
          role="tabpanel"
          aria-labelledby="Followings-tab"
        >
          <FollowingPost />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ForYou from "@/views/ForYou.vue";
import FollowingPost from "@/views/FollowingPost.vue";

export default {
  components: { FollowingPost,ForYou },
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
