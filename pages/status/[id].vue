<template>
    <div>
        <MainSection title="Tweet" :loading="loading">

            <Head>
                <Title></Title>
            </Head>

            <TweetDetails :user="user" :tweet="tweet" />
        </MainSection>
    </div>
</template>

<script setup lang="ts">

const loading = ref(false)
const tweet = ref(null)
const { getTweetById } = useTweets()

const { useAuthUser } = useAuth()
const user = useAuthUser()

function getTweetIdFromRoute() {
    return useRoute().params.id
}

watch(() => useRoute().fullPath, () => getTweet())

async function getTweet() {
    loading.value = true;
    try {
        const response = await getTweetById(getTweetIdFromRoute())
        
        tweet.value = response.tweet
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }
}

onBeforeMount(() => {
    getTweet()
})

</script>