<template>
  <div class="fixed bg-gray" @close="close">
        <!-- <div class="modal relative w-full bg-gray-100 " v-show="modalActive" >
        </div> -->
        <div v-show="modalActive"  class="modal flex flex-col justify-center fixed  items-center z-50 w-full bg-gray-100  h-full  ">
          <div v-show="modalActive" class="modal-inner opacity-100">
            <slot/>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ["modalActive"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };

    return { close };
  },
};
</script>
