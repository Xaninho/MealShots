<template>
    <div>
        <MainSection title="Home" :loading="loading">

            <Head>
                <title>MealShots</title>
            </Head>

            <div class="border-b" :class="mealshotsBorderColor">
                <TweetForm :user="user"/>
            </div>

            <TweetListFeed :tweets="homeTweets"/>

        </MainSection>
    </div>
</template>

<script setup lang="ts">
const loading = ref(false)

const { getHomeTweets } = useTweets()

const homeTweets = ref([])
const { useAuthUser } = useAuth()

const { mealshotsBorderColor } = useTailwindConfig();

const user = useAuthUser()

onBeforeMount(async () => {
    loading.value = true;

    try {
        const {tweets} = await getHomeTweets()
        homeTweets.value = tweets
    } catch (error) {
        console.error(error)
    } finally {
        loading.value = false	
    }
})
</script>