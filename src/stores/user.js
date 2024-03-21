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
        pf: "https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-6/396458489_293998353479482_5489884533883795638_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGUSkbm5tqzWyJtyYo-U0SzxhgII80dbyTGGAgjzR1vJIthol1gbXJNXmGUcPFO3nnQEiRkuHxfNlRPe6HJqzDK&_nc_ohc=ScGrZiJRV4QAX-n0FTe&_nc_ht=scontent.fpnh10-1.fna&oh=00_AfA7qTenQ-Ew8kYZRZj4DfLVTjxlT8zYhIqDlR48l-uAfA&oe=65E8E442"
      },
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
