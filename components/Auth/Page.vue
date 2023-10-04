<template>
    <div class="flex h-screen">
        
        <div class="relative flex-1 hidden w-0 lg:block">
            <img class="image-container absolute inset-0 object-cover w-full h-full"
                 src="https://images.unsplash.com/photo-1575672401987-c8f1debabfd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            />
        </div>
        <div class="flex flex-col justify.center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">

            <div class="flex items-center w-full h-full max-w-sm mx-auto lg:w-96">
                <AuthForm />
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

.image-container {
    display: inline-block; /* or block, depending on your layout */
    transform: scaleX(-1);
}

</style>