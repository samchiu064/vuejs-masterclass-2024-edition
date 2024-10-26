<script setup lang="ts">
import AppErrorPage from '@/components/AppError/AppErrorPage.vue'

useErrorStore().setError({ error: '404 Not Found', customCode: 404 })
</script>

<template>
  <AppErrorPage />
</template>
