<script setup lang="ts">
interface LinkProp {
  title: string
  to?: string
  icon: string
}

defineProps<{
  links: LinkProp[]
}>()

const emits = defineEmits<{
  actionClicked: [string]
}>()

const emitActionClicked = (linkTitle: string) => {
  emits('actionClicked', linkTitle)
}
</script>

<template>
  <template v-for="{ title, to, icon } in links" :key="title" :to="to">
    <RouterLink
      v-if="to"
      exact-active-class="text-primary bg-primary/10"
      :to="to"
      class="nav-link"
    >
      <iconify-icon :icon="icon"></iconify-icon>
      <span class="hidden lg:block text-nowrap">{{ title }}</span>
    </RouterLink>

    <div
      v-else
      class="nav-link cursor-pointer"
      @click="emitActionClicked(title)"
    >
      <iconify-icon :icon="icon"></iconify-icon>
      <span class="hidden lg:block text-nowrap">{{ title }}</span>
    </div>
  </template>
</template>

<style lang="css" scoped>
.nav-link {
  @apply flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground;
}
</style>
