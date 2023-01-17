<template>
    <div class="bg-primary-100 w-72 h-32 items-center flex justify-center dark:bg-primary-700 p-8 font-semibold bg-no-repeat bg-center bg-cover text-white text-4xl rounded-md" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://thumbs.dreamstime.com/z/cat-sleeping-6225538.jpg');">
        {{ category }}
        <!-- <div v-for="blog in content">
            {{ blog.title }}
        </div> -->
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    category: string
}>()
const content = await queryContent('blog').where({'categories': { $contains: props.category }})
    .find()
</script>

<style scoped>

</style>