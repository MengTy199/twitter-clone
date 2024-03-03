<template>
  <button
  data-modal-hide="default-modal" 
    type="submit"
    class="px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-3xl dark:focus:ring-gray-900 hover:bg-gray-800"
  >
    <span class="text-md">{{ name }}</span>
  </button>
</template>

<script>
export default {
  props: ["name"],
};
</script>
