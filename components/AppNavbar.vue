<script lang="ts" setup>
const { navigation } = useContent()
const appConfig = useAppConfig()
</script>

<template>
  <div class="flex justify-between max-w-2xl px-4 py-4 mx-auto sm:px-8 mb-2">
    <!-- Navigation -->
    <div class="text-primary-700 dark:text-primary-200">
      <NuxtLink
        v-for="link of navigation"
        :key="link._path"
        :to="link._path"
        class="mr-2 px-4 py-2 bg-primary-200 dark:bg-primary-600 rounded-md hover:bg-primary-300 active:bg-primary-400 transition cursor-pointer dark:hover:bg-primary-500 dark:active:bg-primary-400 font-semibold"
        active-class="!bg-primary-500 dark:!bg-primary-300 text-primary-50 dark:!text-primary-900"
      >
        {{ link.title }}
      </NuxtLink>
    </div>
    <!-- Social icons & Color Mode -->
    <div class="space-x-3 transition text-primary-500">
      <a v-if="appConfig.socials?.twitter" :href="`https://twitter.com/${appConfig.socials?.twitter}`" title="Twitter" class="dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300"><Icon name="fa-brands:twitter" class="w-5 h-5" /></a>
      <a v-if="appConfig.socials?.github" :href="`https://github.com/${appConfig.socials?.github}`" title="GitHub" class="dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300"><Icon name="fa-brands:github" class="w-5 h-5" /></a>
      <ColorModeSwitch class="dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300" />
    </div>
  </div>
</template>