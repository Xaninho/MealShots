<template>
    <div>

        <div v-if="loading" class="flex items-center justify-center py-6">
            <UISpinner />
        </div>

        <div v-else>
            <TweetFormInput :placeholder="$props.placeholder" :user="props.user" @onSubmit="handleFormSubmit"/>
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
    },
    placeholder: {
        type: String,
        default: "What's happening?"
    },
    replyTo: {
        type: Object,
        default: null
    }
})

async function handleFormSubmit(data) {
    loading.value = true;
    try {

        const response = await postTweet({
            text: data.text,
            mediaFiles: data.mediaFiles,
            replyTo: props.replyTo?.id
        });
        loading.value = false;
    } catch (error) {
        console.log(error)
        loading.value = false;
    }
}


</script>