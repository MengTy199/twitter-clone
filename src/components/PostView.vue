<template>
  <div
    class="flex flex-col justify-center hover:bg-gray-100 transition ease-in-out duration-150  p-2"

  >
    <div class="flex flex-row justify-between">
      <div class="profile flex flex-row items-between px-2 py-2">
        <img
          src="https://scontent.fpnh2-3.fna.fbcdn.net/v/t39.30808-6/393743317_287659637446687_8247362444497115158_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFwjqNW28QSC4AzI6ELCkYhY3N5DB73P19jc3kMHvc_X_3zPMLdI3aMLJ5jycAj2ah3ufhAoHrp9degGGFiol-o&_nc_ohc=mAAhCPVO7MMAX8JSo88&_nc_zt=23&_nc_ht=scontent.fpnh2-3.fna&oh=00_AfBXbOWnEph99MgaJ7U6QTmOuRDVdTPZU6r8H41Lw6tRDA&oe=65E21389"
          class="rounded-[50%] w-12 h-12"
        />
        <div class="text mx-2 flex flex-col">
          <div><span class="font-bold capitalize hover:border-b-2 text-gray-600 hover:border-gray-900 hover:cursor-pointer">{{ tweet.byUser }}</span> <span class="text-sm">.{{ tweet.date }}</span></div>
          <span class="">{{ tweet.text }}</span>
        </div>
      </div>
      <div class="icon ">
          <i class="fa-solid fa-ellipsis hover:text-blue-400 hover:bg-blue-100 p-2 hover:cursor-pointer rounded-full  transition ease-in-out duration-150"></i>
      </div>
    </div>
    <div class="postImage p-4 ml-10 ">
      <img
        :src="tweet.image"
        class="rounded-xl object-contain w-30"
      />
    </div>
    <div class="action flex flex-row algin-center justify-between ml-10 ">
      <icon-text nameButton="637">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <title>msg-writing</title>
          <g fill="#212121" stroke="#212121">
            <path
              d="M9,1.75C4.996,1.75,1.75,4.996,1.75,9c0,1.319,.358,2.552,.973,3.617,.43,.806-.053,2.712-.973,3.633,1.25,.068,2.897-.497,3.633-.973,.489,.282,1.264,.656,2.279,.848,.433,.082,.881,.125,1.338,.125,4.004,0,7.25-3.246,7.25-7.25S13.004,1.75,9,1.75Z"
              fill="none"
              stroke="#212121"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
            <path
              d="M9,10c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z"
              opacity=".75"
              data-stroke="none"
              stroke="none"
            ></path>
            <path
              d="M5.5,10c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z"
              data-stroke="none"
              stroke="none"
            ></path>
            <path
              d="M12.5,10c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z"
              opacity=".5"
              data-stroke="none"
              stroke="none"
            ></path>
          </g>
        </svg>
      </icon-text>
      <icon-text nameButton="637" >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <title>refresh-2</title>
          <g fill="#212121" stroke="#212121">
            <polyline
              points="8.5 12.75 10.75 15 8.5 17.25"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></polyline>
            <path
              d="M4.952,4.238c-1.347,1.146-2.202,2.855-2.202,4.762,0,3.452,2.798,6.25,6.25,6.25,.579,0,1.14-.079,1.672-.226"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
            <polyline
              points="9.5 5.25 7.25 3 9.5 .75"
              fill="none"
              stroke="#212121"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></polyline>
            <path
              d="M13.048,13.762c1.347-1.146,2.202-2.855,2.202-4.762,0-3.452-2.798-6.25-6.25-6.25-.597,0-1.175,.084-1.722,.24"
              fill="none"
              stroke="#212121"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
          </g>
        </svg>
      </icon-text>
      <icon-text nameButton="637">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <title>heart</title>
          <g fill="#212121">
            <path
              d="M8.529,15.222c.297,.155,.644,.155,.941,0,1.57-.819,6.529-3.787,6.529-8.613,.008-2.12-1.704-3.846-3.826-3.859-1.277,.016-2.464,.66-3.173,1.72-.71-1.06-1.897-1.704-3.173-1.72-2.123,.013-3.834,1.739-3.826,3.859,0,4.826,4.959,7.794,6.529,8.613Z"
              fill="none"
              stroke="#212121"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
          </g>
        </svg>
      </icon-text>
      <icon-text nameButton="637">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <title>chart-bar-trend-up</title>
          <g fill="#212121">
            <rect
              x="12.5"
              y="2"
              width="4"
              height="14"
              rx="1.75"
              ry="1.75"
              fill="#212121"
            ></rect>
            <rect
              x="7"
              y="7"
              width="4"
              height="9"
              rx="1.75"
              ry="1.75"
              fill="#212121"
            ></rect>
            <rect
              x="1.5"
              y="11"
              width="4"
              height="5"
              rx="1.75"
              ry="1.75"
              fill="#212121"
            ></rect>
            <path
              d="M2.75,9.5c.192,0,.384-.073,.53-.22l4.72-4.72v.689c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V2.75c0-.414-.336-.75-.75-.75h-2.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h.689L2.22,8.22c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22Z"
            ></path>
          </g>
        </svg>
      </icon-text>
      <div class="flex flex-row relative w-20">
        <icon-text nameButton="" class="absolute top-0 left-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <title>bookmark</title>
            <g fill="#212121">
              <path
                d="M14.26 16.26l-5.25-3.5-5.26 3.5v-12.51c0-1.11 0.89-2 2-2h6.51c1.11 0 2 0.89 2 2v12.51z"
                fill="none"
                stroke="#212121"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
            </g>
          </svg>
        </icon-text>
        <icon-text nameButton="" class="absolute top-0 left-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <title>paper-plane-2</title>
            <g fill="#212121" stroke="#212121">
              <line
                x1="15.813"
                y1="2.187"
                x2="7.657"
                y2="10.343"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></line>
              <path
                d="M15.947,2.73l-4.154,12.923c-.142,.443-.743,.509-.977,.106l-3.159-5.416L2.241,7.184c-.402-.235-.337-.835,.106-.977L15.27,2.053c.417-.134,.811,.26,.677,.677Z"
                fill="none"
                stroke="#212121"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
            </g>
          </svg>
        </icon-text>
      </div>
    </div>
  </div>
</template>

<script>
import IconText from "./IconText.vue";
import { useTweetStore } from "@/stores/tweets";
export default {
  props:["tweet"],
  components:{IconText},
  setup(){
    const tweetStore = useTweetStore();


    const viewTweets = tweetStore.tweets.reverse();
    
    return{tweetStore, viewTweets}

  }
}




</script>
