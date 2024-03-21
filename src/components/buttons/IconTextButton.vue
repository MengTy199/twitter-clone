<template>
  <div
    class="flex flex-row xl:justify-evently xl:items-center"
  >
    <button class=" flex flex-row  space-x-4  rounded-3xl px-2 py-2 cursor-pointer pr-5 transition ease-in-out duration-100">
      <div  class=" hidden md:block xl:block">
        <slot/>
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
