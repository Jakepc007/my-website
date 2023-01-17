<template>
    <div class="px-4 py-2 bg-primary-200 dark:bg-primary-600 rounded-md hover:bg-primary-300 active:bg-primary-400 transition cursor-pointer dark:hover:bg-primary-500 dark:active:bg-primary-400 font-semibold" 
     :class="[active && '!bg-primary-500 dark:!bg-primary-300 text-primary-50 dark:!text-primary-900']">
        <slot></slot>
    </div>
    <!-- :class="active ? '!bg-primary-500 dark:!bg-primary-300 text-primary-50 dark:!text-primary-900' : ''" -->
</template>

<script setup lang="ts">
const props = defineProps<{
 active: boolean
}>();
</script>

<style scoped>

</style>