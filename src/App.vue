<script setup lang="ts">
const errorState = useErrorStore()

onErrorCaptured(error => {
  errorState.setError({ error })
})
</script>

<template>
  <AuthLayout>
    <AppErrorPage v-if="errorState.activeError" />
    <RouterView v-else v-slot="{ Component, route }">
      <Suspense v-if="Component" timeout="0">
        <Component :is="Component" :key="route.name"></Component>
        <template #fallback> Loading ... </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
