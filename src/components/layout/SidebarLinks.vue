<script setup lang="ts">
interface LinkProps {
  title: string
  to: string
  icon: string
}

defineProps<{
  links: LinkProps[]
}>()
</script>

<template>
  <RouterLink
    exact-active-class="text-primary bg-primary/10"
    v-for="{ title, to, icon } in links"
    :key="title"
    :to="to"
    class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground"
  >
    <iconify-icon :icon="icon"></iconify-icon>
    <span class="hidden lg:block text-nowrap">{{ title }}</span>
  </RouterLink>
</template>
