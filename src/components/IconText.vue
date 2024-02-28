<template>
    <div
      class="flex flex-row justify-evently items-center"
    >
      <button class=" flex flex-row space-x-1  pr-2 ">

        <div class="rounded-3xl px-2 py-2 cursor-pointer hover:bg-blue-200 hover:text-blue-300 transition ease-in-out duration-100">
            <slot />
        </div>
        <h1 class="self-center hover:cursor-pointer hover:text-blue-600 text-sm">{{ nameButton }}</h1> 
      </button>
    </div>
  </template>
  
<script>
  export default {
    props: ["nameButton"],
    name: "IconTextButton",
  };
</script>
  