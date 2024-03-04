<template>
  <!-- follow who -->
  <box-right class="p-0">
    <div class="header">
      <h1 class="font-bold px-2 text-xl">Who to follow</h1>
      <div class="" v-for="follow in follows" :key="follow.id">
        <div
          class="w-full px-2 pt-2 hover:bg-gray-200 hover:cursor-pointer flex flex-row justify-between"
        >
          <div class="flex flex-row">
            <img :src="follow.pf" alt="pf" class="w-14 rounded-full" />
            <div class="flex flex-col ml-3">
              <h5
                class="text-sm font-bold tracking-tight text-gray-900 dark:text-white"
              >
                <span class="hover:border-b-[1px] border-black">
                  {{ follow.name }}
                </span>
              </h5>
              <p
                class="font-normal text-[14px] text-gray-700 dark:text-gray-400"
              >
                {{ follow.userName }}
              </p>
            </div>
          </div>
          <div>
            <button-black name="Follow"></button-black>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <button
        type="submit"
        class="w-full px-2 py-4 text-sm font-medium text-left text-blue-400 rounded-b-xl hover:bg-gray-200"
      >
        <span class="text-sm">See More</span>
      </button>
    </div>
  </box-right>
</template>

<script>
import BoxRight from "./BoxRight.vue";
export default {
  components: { BoxRight },
  data() {
    return {
      follows: [
        {
          id: 1,
          name: "Bill Gates",
          userName: "@billgates",
          pf: "https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg",
        },
        {
          id: 2,
          name: "Elon Musk",
          userName: "@elonmusk",
          pf: "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg",
        },
      ],
    };
  },
};
</script>
