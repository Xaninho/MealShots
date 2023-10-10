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
                        <HashtagIcon />
                    </template>
                    <template v-slot:name>
                        Explore
                    </template>
                </SidebarLeftTab>

                <SidebarLeftTab active>
                    <template v-slot:icon>
                        <InboxIcon />
                    </template>
                    <template v-slot:name>
                        Messages
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

        </div>
       
    </div>
</template>


<script setup lang="ts">
import { HomeIcon, HashtagIcon, InboxIcon, BookmarkIcon, UserIcon, PencilIcon } from "@heroicons/vue/24/outline"


const { defaultTransition } = useTailwindConfig();

</script>