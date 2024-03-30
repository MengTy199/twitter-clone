import { defineStore } from "pinia";
export const useUserStore = defineStore("storeUser", {
  state: () => ({
    users: [
      {
        id: 1,
        username: "mengty",
        email: "mengty@gmail.com",
        password: "1111",
        pf: "https://pbs.twimg.com/profile_images/1761779790766301184/ewiRdecM_400x400.jpg"
      },
      {
        id: 2,
        username: "tola",
        email: "mengty@gmail.com",
        password: "1111",
        pf: "https://pbs.twimg.com/profile_images/1761779790766301184/ewiRdecM_400x400.jpg"
      }
    ],
    currentUsers: {},
    isLoggedIn: true
  }),
  getters: {
    getUser: (state) => state.users,
    getCurrentUser: (state) => state.currentUsers,
    getpf: (state)=> state.currentUsers.pf,
  },
  persist: true ,
  actions: {
    setCurrentUser(user) {
      this.isLoggedIn=true;
      this.currentUsers = user;
    },
    updateUser(username){
      this.getCurrentUser.username = username;
      console.log(username)
    },
    logout(){
      this.isLoggedIn = false
    }
  },
});
