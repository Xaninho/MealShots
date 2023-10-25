<template>
    <div class="m-2 overflow-hidden border rounded-2xl bg-gray-50 dark:bg-dim-700" :class="mealshotsBorderColor">
        
        <h1 class="p-3 text-xl font-extrabold text-gray-900 border-b dark:text-white" :class="mealshotsBorderColor">
            {{ props.title }}
        </h1>

        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const {mealshotsBorderColor, defaultTransition} = useTailwindConfig();

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})

</script>