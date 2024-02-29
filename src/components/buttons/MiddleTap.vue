<template>


<div class="flex flex-col justify-center">
    <div class="mb-4 border-b  border-gray-200 dark:border-gray-700 sticky top-0 bg-gray-50 z-10">
    <ul class="flex flex-row justify-center items-center w-full -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
        <li class="me-2 w-200" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">For You</button>
        </li>
        <li class="me-2 w-200" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Followings</button>
        </li>
    </ul>
</div>
<div id="default-tab-content" class="flex flex-col">
    <div class="hidden  rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <ForYou/>
    </div>
    <div class="hidden rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <FollowingPost/>
    </div>
</div>

</div>

</template>

<script >
    import ForYou from '@/views/ForYou.vue';
    import FollowingPost from '@/views/FollowingPost.vue';

    export default{
        components:{ForYou,FollowingPost}
    }

</script>