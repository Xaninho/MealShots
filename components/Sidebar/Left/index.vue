<template>
    <div>

        <div class="h-screen flex flex-col">
            
            <div class="p-2 my-2 rounded-full w-min hover:bg-orange-100 dark:hover:bg-white/20 " :class="defaultTransition">
                <nuxt-link to="/">
                    <div class="w-8 h-8">
                        <img src="~/assets/images/ramen-color.png" alt="Meal Shots" />
                    </div>
                </nuxt-link>
            </div>

            <div class="mt-2 space-y-3">

                <SidebarLeftTab active>
                    <template v-slot:icon>
                        <HomeIcon />
                    </template>
                    <template v-slot:name>
                        Home
                    </template>
                </SidebarLeftTab>

                <SidebarLeftTab active>
                    <template v-slot:icon>
                        <BookmarkIcon />
                    </template>
                    <template v-slot:name>
                        Bookmarks
                    </template>
                </SidebarLeftTab>

                <SidebarLeftTab active>
                    <template v-slot:icon>
                        <UserIcon />
                    </template>
                    <template v-slot:name>
                        Profile
                    </template>
                </SidebarLeftTab>

                <div class="hidden xl:block">
                    <UIButton liquid size="lg">
                        <span class="font-bold">
                            Shot
                        </span>
                    </UIButton>
                </div>

                <div class="block xl:hidden">
                    <UIButton>
                        <div class="w-6 h-6 font-bold">
                            <PencilIcon />
                        </div>
                    </UIButton>
                </div>

            </div>

            <div class="flex flex-row items-center justify-center px-2 py-2 mx-auto mt-auto mb-5 rounded-full cursor-pointer w-14 xl:w-full hover:bg-gray-100 dark:hover:bg-dim-800"
            :class="defaultTransition" @click="logout()">

            <div class="flex flex-row">
                <img :src="props.user.profileImage" class="w-10 h-10 rounded-full">
                <div class="flex-col hidden ml-2 xl:block">
                    <h1 class="text-sm font-bold text-gray-800 dark:text-white">
                        {{ user.name }}
                    </h1>
                    <p class="text-sm text-gray-400">
                        {{ user.handle }}
                    </p>
                </div>

            </div>

            <!-- ICON -->
            <div class="hidden ml-auto xl:block">
                <div class="w-6 h-6">
                    <ChevronDownIcon />
                </div>
            </div>



        </div>

        </div>

        
       
    </div>
</template>


<script setup lang="ts">
import { HomeIcon, HashtagIcon, InboxIcon, BookmarkIcon, UserIcon, PencilIcon, ChevronDownIcon } from "@heroicons/vue/24/outline"

const { defaultTransition } = useTailwindConfig()
const emits = defineEmits(['onTweet', 'onLogout'])

const props = defineProps({
    user: {
        type: Object,
        required: true
    }
})

const { logout } = useAuth()

</script>