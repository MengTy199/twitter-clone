<template>
  <div class=" w-42 h-36 rounded-xl bg-gray-100 shadow-xl hover:cursor-pointer hover:bg-blue-100 overflow-hidden p-3 flex flex-col justify-between">
    <div
      class="flex flex-col w-full h-full items-center justify-between "
    >
      <div
        :class="className"
        class=" w-full min-h-full rounded-xl flex flex-col items-center justify-center z-20"
      >
        <div>
          <i class="text-2xl text-white" :class="icon"></i>
        </div>
      </div>
    </div>
    <div class="mt-2">
      <p class="text-[12px] text-left text-gray-900 font-bold">
        <span class="text-left">{{ title }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["className", "icon", "title"],
};
</script>