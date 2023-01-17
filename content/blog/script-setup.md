---
categories: vue
---

::TableOfContents
::

# Introduction
When using the composition API with `vue`, `script setup` is available to shorthen the initialization of vue coomponents.


# Guide
The source code can be found [here](www.google.com), I still recommend following through to get a better understanding. You will thank me later! 😃

## Usage
```vue
<template>
    <div> 
        {{name}}
    </div>
</template>

<script setup lang="ts">
    const name = ref('jake')
</script>
```