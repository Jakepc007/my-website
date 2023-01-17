<script setup>
const catsQuery = queryContent('cats')
/*
// If you'd prefer to pass along raw `QueryBuilderParams`:
const catsQuery = {
  where: [
    { _path: /^\/cats/ },
  ],
}
*/
</script>
<template>
<ContentNavigation v-slot="{ navigation }" :query="catsQuery">
  <NuxtLink
    v-for="link of navigation"
    :key="link._path"
    :to="link._path"
  >
    {{ link.navTitle || link.title }}
  </NuxtLink>
</ContentNavigation>
</template>