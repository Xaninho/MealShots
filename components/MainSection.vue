<template>
    <div class="border-x" :class="mealshotsBorderColor">

        <div class="sticky top-0 px-4 bg-white/80 backdrop-blur-md dark:bg-dimm-900/80">
             <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">{{ props.title }}</h2>
        </div>

        <div v-if="props.loading" class="flex items-center justify-center p-4 border-b" :class="mealshotsBorderColor">
            <UISpinner />
        </div>
        <div v-else>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

const { mealshotsBorderColor } = useTailwindConfig();

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    loading: {
        type: Boolean,
        required: true
    }
})

</script>