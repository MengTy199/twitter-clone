<template>
  <div class="flex flex-row xl:justify-evently xl:items-center hover:bg-gray-300 rounded-full hover:rounded-full md:px-2  transition ease-in-out duration-100">
    <button
      class="flex flex-row space-x-3  rounded-3xl px-2 py-2 cursor-pointer "
    >
      <div class=" md:block xl:block">
        <slot />
      </div>
      <h1 class="self-center hidden md:hidden xl:block">{{ nameButton }}</h1>
    </button>
  </div>
</template>

<script>
export default {
  props: ["nameButton"],
  name: "IconTextButton",
};
</script>