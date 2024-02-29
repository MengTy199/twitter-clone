<template>
  <div class="hidden md:block xl:block w-450 max-h-screen sticky top-0">
    <div
      class="hidden md:flex flex-col px-8 md:w-350 xl:w-450 h-screen fixed top-2 right-30"
    >
      <div
        class="flex flex-col justify-center items-center sticky h-14 top-0 z-20 bg-white"
      >
        <div class="form w-full">
          <form class="block">
            <label
              for="default-search"
              class="mb-0 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >Search</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-150 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
      </div>

      <div class="overflow-y-scroll overflow-hidden example">
        <!-- subscribe -->
        <box-right>
          <div class="h-[150px] flex flex-col justify-center">
            <h1 class="font-bold text-xl mb-3">Subscribe to Premium</h1>
            <p class="text-sm mb-4">
              Subscribe to unlock new features and if eligible, receive a share
              of ads revenue.
            </p>
            <div class="w-20">
              <button-black name="Subscribe" />
            </div>
          </div>
        </box-right>
        <!-- Trends for you  -->
        <box-right class="p-0">
          <div class="header" v-for="trend in trends" :key="trend.id">
            <h1 class="font-bold p-2 text-md">Trends for you</h1>
            <div class="flex flex-row items-start hover:bg-gray-200 hover:cursor-pointer ">
              <div
                class="w-full pt-2 "
              >
                <p
                  class="font-normal text-[14px] text-gray-700 dark:text-gray-400"
                >
                  {{ trend.trendName }}
                </p>
                <h5
                  class="text-sm font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  {{ trend.country }}
                </h5>
                <p
                  class="font-normal text-[14px] text-gray-700 dark:text-gray-400"
                >
                  {{ trend.postLikes }}
                </p>
              </div>

              <div
                class=""
              >
              <i class="fa-solid fa-ellipsis hover:text-blue-400 hover:bg-blue-100 p-2 hover:cursor-pointer rounded-full  transition ease-in-out duration-150"></i>

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
        <div class="footer pb-10 pt-4">
          <p class="text-[12px] flex flex-row justify-evenly">
            <a href="https://twitter.com/en/tos" target="_blank" class="hover:border-b-[1px] border-black"
              >Terms of Service</a
            >
            <a href="#" class="hover:border-b-[1px] border-black"
              >Privacy Policy</a
            >
            <a href="#" class="hover:border-b-[1px] border-black"
              >Cookie Policy</a
            >
          </p>
          <div class="box ">
            <p class="text-[12px] flex flex-row justify-evenly mt-2">
            <a href="#" class="hover:border-b-[1px] border-black"
              >Accessibility</a
            >
            <a href="#" class="hover:border-b-[1px] border-black">Ads info</a>
            <a href="#" class="hover:border-b-[1px] border-black">More</a>
            <span> © 2024 X Corp. </span>
          </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import BoxRight from "./BoxRight.vue";
import ButtonBlack from "./buttons/ButtonCustom.vue";

const trends = [
  {
    id: 1,
    trendName: "Trending in Cambodia",
    country: "Cambodia",
    postLikes: "1214.90k",
  },
  {
    id: 2,
    trendName: "Trending in Cambodia",
    country: "Cambodia",
    postLikes: "1214.90k",
  },
  {
    id: 3,
    trendName: "Trending in Cambodia",
    country: "Cambodia",
    postLikes: "1214.90k",
  },
  {
    id: 4,
    trendName: "Trending in Cambodia",
    country: "Cambodia",
    postLikes: "1214.90k",
  },
  {
    id: 5,
    trendName: "Trending in Cambodia",
    country: "Cambodia",
    postLikes: "1214.90k",
  },
  {
    id: 6,
    trendName: "Trending in Cambodia",
    country: "Cambodia",
    postLikes: "1214.90k",
  },
  {
    id: 7,
    trendName: "Trending in Cambodia",
    country: "Cambodia",
    postLikes: "1214.90k",
  },
];
const follows = [
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
];
</script>

<style>
.example::-webkit-scrollbar {
  display: none;
}
</style>
