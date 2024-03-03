<template>
    <teleport v-if="showModal" to=".modals">
      <!-- modal -->
        <ReuseModalVue theme="sale" @close="toggleModal" >
          <template v-slot:links>
            <a href="#">Sign Up now</a>
            <a href="#">More Info</a>
          </template>
          <h1>Mengty Vue</h1>
          <p>It's me.</p>
        </ReuseModalVue>
        <!-- end of modal -->
    </teleport>
      <!-- button -->
      <!-- <button >Show Modal</button> -->
      <!-- end of modal -->
  
</template>

<script>

import ReuseModalVue from './ReuseModal.vue';
  export default {
    name: "App",
    components: {
      //call compoment
      ReuseModalVue,
    },
    data() {
      return {
        title: "My First Vue App",
        showModal: false,
      };
    },
    methods: {
      toggleModal(){
        this.showModal =!this.showModal
      },
    },
  };
</script>
  
  <style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .container{
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    flex-direction: column;
  }
  h1 {
    border-bottom: 4px solid red;
    padding-bottom: 20px;
    display: inline-block;
  }
  .active {
    display: block !important;
  }
  </style>
  