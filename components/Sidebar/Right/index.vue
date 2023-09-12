<template>
    <div class="flex flex-col">

        <!-- Preview Card -->
        <SidebarRightPreviewCard title="What's happening">

            <SidebarRightPreviewCardItem v-for="whatsHappening in whatsHappeningItems">
                <h2 class="font-bold text-gray-800 text-md dark:text-white"> {{ whatsHappening.title }}</h2>
                <p class="text-xs text-gray-400"> {{ whatsHappening.count }}</p>
            </SidebarRightPreviewCardItem>

        </SidebarRightPreviewCard>

        <!-- Who to follow -->
        <SidebarRightPreviewCard title="Who to follow">

            <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
                <div class="flex flex-row items-center justify-between p-2">
                    <div class="flex flex-row">
                        <img class="w-10 h-10 rounded-full" src="https://picsum.photos/seed/picsum/200/200" alt="Profile picture">

                        <div class="flex flex-col ml-2">
                            <h2 class="font-bold text-gray-800 text-md dark:text-white"> {{ whoToFollow.title }}</h2>
                            <p class="text-xs text-gray-400"> {{ whoToFollow.count }}</p>
                        </div>
                    </div>
                    <div class="flex h-full">
                        <button class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full">Follow</button>
                    </div>
                </div>
            </SidebarRightPreviewCardItem>

        </SidebarRightPreviewCard>

        
    </div>
</template>


<script setup lang="ts">

const whatsHappeningItems = ref([
    {
        title: 'SpaceX',
        count: '1,2M Tweets',
    },
    {
        title: 'SpaceY',
        count: '1,8M Tweets',
    },
    {
        title: 'SpaceZ',
        count: '1,1M Tweets',
    },
    {
        title: 'SpaceA',
        count: '1,0M Tweets',
    },
]);

const whoToFollowItems = ref([
    {
        title: 'Steve Jobs',
        count: '1,2M Tweets',
    },
    {
        title: 'Elon Musk',
        count: '1,8M Tweets',
    },
    {
        title: 'Bill Gates',
        count: '1,1M Tweets',
    },
    {
        title: 'Mark Zuckerberg',
        count: '1,0M Tweets',
    },
]);

</script>