<template>
    <div clas="flex flex-col">

        <!-- Search bar -->
        <div class="relative m-2">
            <div class="absolute flex items-center h-full pl-4 text-gray-600 cursor-pointer">
                <div class="w-6 h-6">
                    <EyeIcon @click="handleSearch" />
                </div>
            </div>
            <input v-model="search"
                class="flex items-center w-full pl-12 text-sm font-normal text-black bg-gray-200 border border-gray-200 rounded-full shadow dark:text-gray-100 dark:bg-dim-400 dark:border-dim-400 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border focus:border-blue-200 h-9"
                placeholder="Search tweet" type="text">
        </div>

        <!-- Preview Card : Who to follow -->
        <SidebarRightPreviewCard title="Suggestion to follow">
            <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
                <div class="flex flex-row items-center justify-between p-2">
                    <div class="flex flex-row">
                        <img class="w-10 h-10 rounded-full" :src="whoToFollow.image" :alt="whoToFollow.name">

                        <div class="flex flex-col ml-2">
                            <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ whoToFollow.name }}</h1>
                            <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
                        </div>
                    </div>
                    <div class="flex h-full">
                        <button
                            class="px-4 py-2 text-xs font-bold text-white bg-black rounded-full dark:text-black dark:bg-white">Follow</button>
                    </div>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>

        <footer>
            <ul class="mx-2 my-4 text-xs text-gray-500">
                <li class="inline-block mx-2">
                    <a href="#" class="hover:underline" @click.prevent="handleToggleDarkMode">Dark mode</a>
                </li>
                <li class="inline-block mx-2">
                    <a href="https://github.com/Xaninho/MealShots" class="hover:underline">Github</a>
                </li>
                <li class="inline-block mx-2">
                    © 2023 Mealshots
                </li>
            </ul>
        </footer>


    </div>
</template>
<script setup>
import { EyeIcon } from '@heroicons/vue/24/outline';
const search = ref('')
//const emitter = useEmitter()

function handleSearch() {
    useRouter().push({
        path: '/search',
        query: {
            q: search.value
        }
    })
}

const whoToFollowItems = ref([
    {
        name: 'MealPrep 4 Everyone',
        handle: 'mealPrep4Everyone',
        image: 'https://i.pinimg.com/originals/b4/68/34/b46834ce79caba8be82c2889ea52ee5b.jpg'
    },
    {
        name: 'The Bulk Kitchen',
        handle: '@thebulkkitchen',
        image: 'https://i0.wp.com/quotetheanime.com/wp-content/uploads/2022/08/Pic.jpg'
    },
    {
        name: '6 Pack Kitchen',
        handle: '6packkitchen',
        image: 'https://listasnerds.com.br/wp-content/uploads/2022/12/Gokushufudou_Tatsu-Imortal-7-1-850x560.jpg'
    }
])

/*function handleToggleDarkMode() {
    emitter.$emit('toggleDarkMode')
}*/

</script>