<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <h1>
      Project: {{ 'slug' in route.params ? route.params.slug : undefined }}
    </h1>
  </div>
</template>

<style scoped></style>
