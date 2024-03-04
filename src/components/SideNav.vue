<template>
  <transition appear name="fade">
    <div
      :class="cl"
      class="block md:w-[200px] xl:w-600 md:flex xl:flex xl:flex-row justify-end sticky top-0 h-screen md:sticky xl:sticky overflow-auto"
    >
      <div class="flex justify-between flex-col h-screen items-center">
        <div
          class="flex flex-col justify-center xl:space-y-2 md:w-auto items-center xl:items-start md:items-start xl:x-10"
        >
          <router-link @click="userStore.logout" to="/">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f8dc5431091769.5640f77be5837.png"
              class="w-16 md:w-20 xl:w-20 -left-5 hidden md:block xl:block"
            />
          </router-link>

          <!-- Home -->
          <IconTextButton nameButton="Home" @click="toggleModal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 18 18"
              class="self-center"
            >
              <title>house-2</title>
              <g fill="#212121" stroke="#212121">
                <line
                  x1="9"
                  y1="16"
                  x2="9"
                  y2="12.75"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></line>
                <path
                  d="M3.145,6.2l5.25-3.99c.358-.272,.853-.272,1.21,0l5.25,3.99c.249,.189,.395,.484,.395,.796v7.254c0,1.105-.895,2-2,2H4.75c-1.105,0-2-.895-2-2V6.996c0-.313,.146-.607,.395-.796Z"
                  fill="none"
                  stroke="#212121"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
              </g>
            </svg>
          </IconTextButton>
          <!-- Explore -->
          <IconTextButton nameButton="Explore">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 18 18"
            >
              <title>magnifier</title>
              <g fill="#212121" stroke="#212121">
                <line
                  x1="15.25"
                  y1="15.25"
                  x2="11.285"
                  y2="11.285"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></line>
                <circle
                  cx="7.75"
                  cy="7.75"
                  r="5"
                  fill="none"
                  stroke="#212121"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></circle>
              </g>
            </svg>
          </IconTextButton>
          <!-- Notifications -->
          <IconTextButton nameButton="Notifications">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 18 18"
            >
              <title>bell</title>
              <g fill="#212121" stroke="#212121">
                <path
                  d="M15.75,13.25c-1.105,0-2-.895-2-2V6.5c0-2.623-2.127-4.75-4.75-4.75h0c-2.623,0-4.75,2.127-4.75,4.75v4.75c0,1.105-.895,2-2,2H15.75Z"
                  fill="none"
                  stroke="#212121"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M10.588,15.185c-.095-.117-.237-.185-.388-.185h-2.399c-.151,0-.293,.068-.388,.185-.095,.117-.132,.271-.101,.418,.173,.822,.868,1.397,1.689,1.397s1.516-.575,1.689-1.397c.031-.147-.006-.301-.101-.418Z"
                  data-stroke="none"
                  stroke="none"
                ></path>
              </g>
            </svg>
          </IconTextButton>
          <!-- Messages -->
          <IconTextButton nameButton="Messages ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
            >
              <title>envelope-open</title>
              <g fill="#212121" stroke="#212121">
                <path
                  d="M2.43 7.99c0-1.01 0.55-1.89 1.44-2.38l7.97-4.4c0.42-0.23 0.92-0.23 1.34 0l7.97 4.4c0.89 0.49 1.44 1.37 1.44 2.38"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M22.59 8v10.42c0 1.54-1.24 2.78-2.78 2.78h-14.6c-1.54 0-2.78-1.24-2.78-2.78v-10.43l9.48 4.58c0.38 0.18 0.83 0.18 1.2 0l9.48-4.58v0.01z"
                  fill="none"
                  stroke="#212121"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
              </g>
            </svg>
          </IconTextButton>
          <!-- Lists -->
          <IconTextButton nameButton="Lists ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 18 18"
            >
              <title>bell</title>
              <g fill="#212121" stroke="#212121">
                <path
                  d="M15.75,13.25c-1.105,0-2-.895-2-2V6.5c0-2.623-2.127-4.75-4.75-4.75h0c-2.623,0-4.75,2.127-4.75,4.75v4.75c0,1.105-.895,2-2,2H15.75Z"
                  fill="none"
                  stroke="#212121"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M10.588,15.185c-.095-.117-.237-.185-.388-.185h-2.399c-.151,0-.293,.068-.388,.185-.095,.117-.132,.271-.101,.418,.173,.822,.868,1.397,1.689,1.397s1.516-.575,1.689-1.397c.031-.147-.006-.301-.101-.418Z"
                  data-stroke="none"
                  stroke="none"
                ></path>
              </g>
            </svg>
          </IconTextButton>
          <!-- BookMarks -->
          <IconTextButton nameButton="BookMarks">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
            >
              <title>bookmark</title>
              <g fill="#212121">
                <path
                  d="M19.81 22.59l-7.3-4.87-7.3 4.87v-17.38c0-1.54 1.24-2.78 2.78-2.78h9.04c1.54 0 2.78 1.24 2.78 2.78v17.38z"
                  fill="none"
                  stroke="#212121"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
              </g>
            </svg>
          </IconTextButton>
          <!-- Communities -->
          <IconTextButton nameButton="Communities ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
            >
              <title>users</title>
              <g fill="#212121" stroke="#212121">
                <path
                  fill="none"
                  stroke="#212121"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M7.99 5.91a2.78 2.78 0 1 0 0 5.56 2.78 2.78 0 1 0 0-5.56z"
                ></path>
                <path
                  d="M13.36 21.02c0.73-0.24 1.15-1.03 0.88-1.75-0.95-2.53-3.39-4.33-6.25-4.33s-5.29 1.8-6.24 4.33c-0.27 0.72 0.16 1.51 0.88 1.75 1.34 0.45 3.17 0.87 5.37 0.87s4.03-0.43 5.36-0.87z"
                  fill="none"
                  stroke="#212121"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
                <path
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M16.68 2.43a2.78 2.78 0 1 0 0 5.56 2.78 2.78 0 1 0 0-5.56z"
                ></path>
                <path
                  d="M17.72 18.39c1.73-0.11 3.2-0.47 4.32-0.85 0.73-0.24 1.15-1.03 0.89-1.75-0.95-2.53-3.39-4.33-6.25-4.32-1.36 0-2.62 0.41-3.67 1.1"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
              </g>
            </svg>
          </IconTextButton>

          <ButtonCustom
            name="Post"
            class="bg-blue-600 hover:bg-blue-700 w-full py-3 text-[17px] hidden xl:block"
          />
        </div>

        <div class="w-full xl:p-2 md:p-2 hidden md:block xl:block">
          <div
            class="w-full py-2 xl:px-3 hover:bg-gray-200 hover:cursor-pointer xl:flex xl:flex-row justify-between rounded-full xl:items-center"
          >
            <div class="flex flex-row items-center">
              <img
                :src="userStore.getpf"
                alt="pf"
                class="w-14 rounded-full h-14 object-cover"
              />
              <div class="flex flex-col xl:ml-3">
                <div
                  class="text-sm font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  <div class="flex flex-col">
                    <span class="">
                      {{ userStore.getCurrentUser.username }}
                    </span>
                    <span class="text-[12px] font-normal">
                      {{ userStore.getCurrentUser.email }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="icon">
              <i class="fa-solid fa-ellipsis"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup>
import IconTextButton from "./buttons/IconTextButton.vue";
import ButtonCustom from "./buttons/ButtonCustom.vue";
// import ReuseModal from "./modal/ReuseModal.vue";
// import { ref } from "vue";
// import ModalView from "./modal/ModalView.vue";
// import InputForm from "../components/InputForm.vue"

// export default {
//   components: { IconTextButton, ButtonCustom, ReuseModal },
//   setup() {
//     const modalActive = ref(false);

//     const toggleModal = () => {
//       modalActive.value = !modalActive.value;
//     };

//     return { modalActive, toggleModal };
//   },
//   data() {
//     return {
//       title: "My First Vue App",
//       name: "Mengty",
//       username: "@mengty",
//       pf: "https://i.pinimg.com/236x/73/bc/e7/73bce786ccef5b8a7b51e5527531f95c.jpg",
//     };
//   },
// };
let cl;
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
</script>


<style>

.fade-enter-from{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 3s ease;
  }
  .fade-leave-to{
    opacity: 0;
  }
  .fade-leave-active{
    transition: opacity 3s ease;
  }
</style>