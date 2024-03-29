import {defineStore} from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: '',
        loggedUser: {},// user object
        userId: ''
    }),
    persist: true,
    actions: {
        async login(email, password) {
            try {
                const {data} = await axios.post("/api/auth/login", {
                    email: email, password: password
                })
                this.token = data.token//get token already form data object

                // axios
                axios.defaults.headers.common['Authorization'] = data.token;
                const response = await axios.get('/api/auth/me', {
                    headers: {
                        Authorization: `Bearer ${data.token}`
                    }
                })
                console.log(response.data.user.id)
                this.loggedUser = response.data.user
                this.userId = response.data.user.id
            } catch (e) {
                console.log(e)
            }
        }, logout() {
            this.token = ''
            this.loggedUser = {}
        },
        async googleLogin(code) {
            try {
                const {data} = await axios.get(`/api/auth/google?code=${code}`)
                this.token = data.token
                const response = await axios.get('/api/auth/me', {
                    headers: {
                        Authorization: `Bearer ${data.token}`
                    }
                })

                // console.log(response.data.user.id._id)
                // console.log(response.data)
                this.loggedUser = response.data.user
                this.userId = response.data.user.id._id

            }catch (e){
                console.log("error")
            }
        }
    },
});
