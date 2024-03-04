<template>
  <transition appear name="fade">
    <div
      class="w-400 mt-2 p-2 bg-gray-100 rounded-2xl "
    >
      <slot />
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 3s ease;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 3s ease;
}
</style>
