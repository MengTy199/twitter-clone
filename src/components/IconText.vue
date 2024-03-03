<template>
    <div
      class="flex flex-row justify-evently items-center hover:text-blue-600 text-gray-500 hover:bg-blue-100 rounded-full p-1 " :class=colorIcon
    >
      <button class=" flex flex-row space-x-1  pr-2 ">

        <div class="rounded-3xl px-2 py-2 cursor-pointer transition ease-in-out duration-100 "  >
          <i class="fa-regular " :class=icon></i>
        </div>
        <h1 class="self-center hover:cursor-pointer  text-sm">{{ nameButton }}</h1> 
      </button>
    </div>
</template>
  
<script>
  export default {
    props: ["nameButton", "colorIcon", "icon"],
    name: "IconTextButton",
  };
</script>
  