import {defineStore} from 'pinia'
import axios from "axios"
import {useAuthStore} from './auth'

export const useTweetsStore = defineStore('tweets', {
    state: () => ({
        tweets: [],
    }),
    actions: {
        async fetchTweets() {
            const authStore = useAuthStore()
            const useId = authStore.useId
            try {
                const response = await axios.get(process.env.VUE_APP_ENV_SERVER + `/api/users/${useId}/tweets`, {
                    headers: {
                        'Authorization': `Bearer ${authStore.token}`
                    }
                })
                console.log(response.data.tweets)
                this.tweets = response.data.tweets
            } catch (e) {
                console.log(e)
            }
        },
        async addTweet(text) {
            const authStore = useAuthStore()
            try {
                const response = await axios.post(process.env.VUE_APP_ENV_SERVER + '/api/tweets', {
                    text: text
                }, {
                    headers: {
                        'Authorization': `Bearer ${authStore.token}`
                    },
                })
                const tweet = response.data
                this.tweets.unshift(tweet)
                // this.tweets.push(tweet)
            } catch (e) {
                console.log(e)
            }

        },
        removeTweet(index) {
            this.tweets.splice(index, 1)
        }
    },
    persist: false
})