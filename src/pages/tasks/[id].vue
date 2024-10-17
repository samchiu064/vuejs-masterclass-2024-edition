<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <h1>Task: {{ 'id' in route.params ? route.params.id : undefined }}</h1>
  </div>
</template>

<style scoped></style>
