<template>

    <div class="p-3 hover:bg-gray-100 cursor-pointer dark:bg-dim-300 border-b" :class="wrapperClasses">
        <slot></slot>
    </div>

</template>

<script setup lang="ts">
const {defaultTransition, mealshotsBorderColor} = useTailwindConfig();

const wrapperClasses= computed(() => `${defaultTransition} ${mealshotsBorderColor}`);

</script>