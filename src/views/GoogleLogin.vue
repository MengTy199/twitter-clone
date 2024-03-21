<template>
  <div class="border-b border-gray-200 dark:border-dim-200 p-4  w-full mx-auto">
    <div class="animate-pulse flex space-x-4 flex-col justify-between ">
      <div class="rounded-full bg-gray-400 h-14 w-12"></div>
      <div class="flex-1 space-y-4 py-1">
        <div class="h-4 bg-gray-400 rounded w-3/4"></div>
        <div class="space-y-2">
          <div class="h-4 bg-gray-400 rounded ">
            <div class="h-4 bg-gray-400 rounded w-5/6">
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 space-y-4 py-1">
        <div class="h-4 bg-gray-400 rounded w-3/4"></div>
        <div class="space-y-2">
          <div class="h-4 bg-gray-400 rounded ">
            <div class="h-4 bg-gray-400 rounded w-5/6">
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1 space-y-4 py-1">
        <div class="h-4 bg-gray-400 rounded w-3/4"></div>
        <div class="space-y-2">
          <div class="h-4 bg-gray-400 rounded ">
            <div class="h-4 bg-gray-400 rounded w-5/6">
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 space-y-4 py-1">
        <div class="h-4 bg-gray-400 rounded w-3/4"></div>
        <div class="space-y-2">
          <div class="h-4 bg-gray-400 rounded ">
            <div class="h-4 bg-gray-400 rounded w-5/6">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useAuthStore} from "@/stores/auth";
import {mapActions} from "pinia";

export default {
  async mounted() {
    try{
      const code = this.$route.query.code
      console.log(code)
      await this.googleLogin(code)
      this.$router.push('/homePage')
      console.log("mounted end ")
    }catch (e){
      // this.$toast.open('Error Login');
    }
  },
  methods:{
    ...mapActions(useAuthStore, ["googleLogin"])
  }

}
</script>
