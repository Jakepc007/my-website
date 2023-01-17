<template>
    <div>
        <div class="flex gap-2">
            <AtomsChip :active="mode === 'categories'" @click="mode = 'categories'">Categories</AtomsChip>
            <AtomsChip :active="mode === 'latest'" @click="mode = 'latest'">Latest</AtomsChip>
        </div>
        <div v-if="mode === 'categories'" class="flex flex-wrap gap-3 mt-4">
            <Category v-for="category in ['vue', 'productivity', 'misc']" :category="category" />
        </div>
        <div v-else class="flex gap-3 flex-col mt-4">
            <div v-for="blog in blogs">
                <router-link :to="blog._path">
                    <div class="text-center bg-primary-100 h-32 items-center flex justify-center dark:bg-primary-700 p-8 font-semibold bg-no-repeat bg-center bg-cover text-white text-4xl rounded-md"
                        style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://thumbs.dreamstime.com/z/cat-sleeping-6225538.jpg');">
                        {{ blog.title }}
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const page = ref(0);
const PAGE_SIZE = 2;
const blogs = await queryContent('blog')
    .find()
type MODE = 'latest' | 'categories';
const mode = ref<MODE>('categories')

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation('blog'))

</script>

<style scoped>

</style>