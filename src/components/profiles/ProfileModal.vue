<template>
  <!-- Main modal -->
  <transition appear name="fade">
    <div
      id="authentication-modal"
      tabindex="-1"
      aria-hidden="true"
      class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <form
          class="space-y-4"
          @submit.prevent="userStore.updateUser(username)"
        >
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div
              class="flex items-center justify-between p-2 md:p-2 border-b rounded-t dark:border-gray-600"
            >
              <div class="flex flex-row items-center w-40 justify-between">
                <div>
                  <button
                    type="button"
                    class="end-2.5 text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="authentication-modal"
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

                <div>
                  <h1 class="text-gray-700 font-bold">Edit Profile</h1>
                </div>
              </div>

              <div>
                <button-custom
                  name="Save"
                  data-modal-hide="authentication-modal"
                />
              </div>
            </div>
            <!-- Modal body -->
            <div>
              <div class="h-44 bg-gray-400 w"></div>

              <div class="h-20 relative">
                <div class="absolute -top-[100%] left-5">
                  <img
                    src="https://pbs.twimg.com/profile_images/1761779790766301184/ewiRdecM_400x400.jpg"
                    class="border-4 border-white rounded-full w-32 h-32 top-0 left-0 hover:cursor-pointer transition-all"
                  />
                </div>
              </div>
            </div>

            <div class="p-4 md:p-5">
              <div>
                <label
                  for="UserName"
                  class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                  <input
                    v-model="username"
                    type="text"
                    id="UserName"
                    placeholder="name"
                    class="peer h-12 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span
                    class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                  >
                    Name
                  </span>
                </label>
              </div>
            </div>

            <div class="h-14"></div>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";
import ButtonCustom from "../buttons/ButtonCustom.vue";

// export default {
//   components: { ButtonCustom },
// };

import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
let username = ref(userStore.getCurrentUser.username);
</script>
