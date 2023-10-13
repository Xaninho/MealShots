<template>
    <div>

        <div class="ml-16">

            <p class="flex-shrink font-medium text-gray-800 w-auto dark:text-white">
                {{ $props.tweet.text }}
            </p>

            <div v-for="image in tweet.mediaFiles"
                :key="image.id"
                class="flex my-3 mr-2 border-2 rounded-2xl"
                :class="mealshotsBorderColor">
                <img :src="image.url" />
            </div>


        </div>

    </div>
</template>

<script setup lang="ts">
const {mealshotsBorderColor} = useTailwindConfig();

const props = defineProps({
    tweet: {
        type: Object,
        required: true
    }
})

</script>