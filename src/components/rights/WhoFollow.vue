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
          name: "Mengty",
          userName: "@mengty",
          pf: "https://scontent.fpnh8-1.fna.fbcdn.net/v/t39.30808-6/393743317_287659637446687_8247362444497115158_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFwjqNW28QSC4AzI6ELCkYhY3N5DB73P19jc3kMHvc_X_3zPMLdI3aMLJ5jycAj2ah3ufhAoHrp9degGGFiol-o&_nc_ohc=9FrNovSIULoAX_AgF7B&_nc_zt=23&_nc_ht=scontent.fpnh8-1.fna&oh=00_AfA4ICvHukXUGu8EGcD62k6Ib0ViE0YrTAPilKuQ-eSnuA&oe=65E40DC9",
        },
        {
          id: 2,
          name: "Mengty",
          userName: "@mengty",
          pf: "https://scontent.fpnh8-1.fna.fbcdn.net/v/t39.30808-6/393743317_287659637446687_8247362444497115158_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFwjqNW28QSC4AzI6ELCkYhY3N5DB73P19jc3kMHvc_X_3zPMLdI3aMLJ5jycAj2ah3ufhAoHrp9degGGFiol-o&_nc_ohc=9FrNovSIULoAX_AgF7B&_nc_zt=23&_nc_ht=scontent.fpnh8-1.fna&oh=00_AfA4ICvHukXUGu8EGcD62k6Ib0ViE0YrTAPilKuQ-eSnuA&oe=65E40DC9",
        },
      ],
    };
  },
};
</script>
