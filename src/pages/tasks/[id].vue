<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>
    <h1>Task: {{ 'id' in route.params ? route.params.id : undefined }}</h1>
  </div>
</template>

<style scoped></style>
