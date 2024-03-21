<template>
  <transition-group name="fade" appear>
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
  </transition-group>
</template>
<script>
  export default {
    async mounted() {
     await  this.$router.push("/homePage")
    }
  }
</script>
<!--<script>-->
<!--import {useAuthStore} from "@/stores/auth";-->
<!--import {mapActions} from "pinia";-->

<!--export default {-->
<!--  data(){-->
<!--    return{-->
<!--      user_obj: {-->
<!--        email: "",-->
<!--        password: ""-->
<!--      },-->
<!--      loginFail: false,-->
<!--    }-->
<!--  },-->
<!--  async mounted() {-->
<!--    try{-->
<!--      await this.login(this.user_obj.email, this.user_obj.password)-->
<!--      console.log(this.token + "token will save")-->
<!--      if(this.token){-->
<!--        this.$router.push('/homePage')-->
<!--      }-->
<!--    }catch (e){-->
<!--      // this.$toast.open('Error Login');-->
<!--    }-->
<!--  },-->
<!--  methods:{-->
<!--    ...mapActions(useAuthStore, ["login"])-->
<!--  }-->

<!--}-->
<!--</script>-->

<style>

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 300s ease;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 300s ease;
}
</style>