
import { LoadingPage } from '#build/components';

import { LoadingPage } from '#build/components';

import { LoadingPage } from '#build/components';

<template>
    <div>

        <div v-if="loading" class="flex items-center justify-center py-6">
            <UISpinner />
        </div>

        <div v-else>
            <TweetFormInput :user="props.user" @onSubmit="handleFormSubmit"/>
        </div>

    </div>
</template>

<script setup lang="ts">

const { postTweet } = useTweets();
const loading = ref(false);

const props = defineProps({
    user: {
        type: Object,
        required: true
    }
})

async function handleFormSubmit(data) {
    loading.value = true;
    try {
        const response = await postTweet(data);
        loading.value = false;
    } catch (error) {
        console.log(error)
        loading.value = false;
    }
}


</script>