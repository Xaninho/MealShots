<template>
  <div :class="{ 'dark': darkMode }">
      <div class="bg-white dark:bg-dim-900">

          <LoadingPage v-if="isAuthLoading" />

          <!-- App -->
          <div v-else-if="user" clas="min-h-full">
              
            <NuxtLayout>
                <router-view />
            </NuxtLayout>

          </div>

          <AuthPage v-else />

          <UIModal :isOpen="postTweetModal" @on-close="handleModalClose">
              <TweetForm :replyTo="replyTweet" showReply :user="user" @onSuccess="handleFormSuccess" />
          </UIModal>

      </div>

  </div>

</template>

<script setup>
const darkMode = ref(false)
const { useAuthUser, initAuth, useAuthLoading, logout } = useAuth()
const isAuthLoading = useAuthLoading()
const { closePostTweetModal, usePostTweetModal, openPostTweetModal, useReplyTweet } = useTweets()
const user = useAuthUser()

const postTweetModal = usePostTweetModal()
//const emitter = useEmitter()
const replyTweet = useReplyTweet()

/*emitter.$on('replyTweet', (tweet) => {
  openPostTweetModal(tweet)
})*/

/*emitter.$on('toggleDarkMode', () => {
  darkMode.value = !darkMode.value
})*/

onBeforeMount(() => {
  initAuth()
})

function handleFormSuccess(tweet) {
  closePostTweetModal()

  navigateTo({
      path: `/status/${tweet.id}`
  })
}

function handleModalClose() {
  closePostTweetModal()
}

function handleOpenTweetModal() {
  openPostTweetModal(null)
}

function handleUserLogout() {
  logout()
}

</script>