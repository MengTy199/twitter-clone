import { defineStore } from "pinia";
import axios from "axios";
export const useTweetStore = defineStore("tweets", {
  state: () => ({
    tweets: [],
  }),
  getters: {
    getTweets: (state) => state.tweets,
    nextId() {
      return this.tweets.length + 1; // Get the length of the tweets array + 1
    },
    getTweetsPost : (state) => state.tweets.length,
  },
  actions: {
    addTweet(newTweet) {
      // Validate data type (optional):
      if (!newTweet || typeof newTweet !== 'object') {
        throw new Error('addTweet: Argument must be a tweet object');
      }
      // Create a new tweet object with required properties:
      const fullTweet = {
        id: this.nextId || 1,
        byUser: newTweet.byUser || "", // Set default value if not provided
        text: newTweet.text || "",
        image: newTweet.image || null,
        date: newTweet.date || new Date().toDateString(), // Use current date/time if not provided
      };
      // Create a copy of the state array for immutability:
      // const updatedTweets = [...this.tweets];

      // Push the new tweet object to the copied array:
      this.tweets.push(fullTweet);

      // Update the state using Pinia's $patch:
      // this.$patch((state) => {
      //   state.tweets = updatedTweets;
      // });
    },
    async fetchTweets(){
      try{
        const response = await axios.get('http://localhost:3000/api/tweets')
        this.tweets = response.data
        // console.log(response.data)
      }catch (e){
        console.log(e)
      }

    },
  },

  // persist: true
});
