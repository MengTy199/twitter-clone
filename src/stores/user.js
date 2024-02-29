import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({
    users: [
      {
        id: 1,
        username: "mengty",
        email: "mengty@gmail.com",
        password: "1111",
        pf: "https://i.pinimg.com/236x/73/bc/e7/73bce786ccef5b8a7b51e5527531f95c.jpg"
      },
      {
        id: 2,
        username: "tola",
        email: "mengty@gmail.com",
        password: "1111",
        pf: "https://i.pinimg.com/236x/73/bc/e7/73bce786ccef5b8a7b51e5527531f95c.jpg"
      },
    ],
    currentUsers: {},
  }),
  getters: {
    getUser: (state) => state.users,
    getCurrentUser: (state) => state.currentUsers,
  },
  persist: true  ,
  actions: {
    setCurrentUser(user) {
      this.currentUsers = user;
    },
  },
});
