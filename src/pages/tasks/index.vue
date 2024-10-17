<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import type { Tables } from '../../../database/types'
import type { ColumnDef } from '@tanstack/vue-table'
import { RouterLink } from 'vue-router'

usePageStore().pageData.title = 'Tasks'

const tasks = ref<Tables<'tasks'>[] | null>(null)

const getTasks = async () => {
  const { data, error } = await supabase.from('tasks').select(`
    *,
    projects (
      id,
      name,
      slug
    )
  `)

  if (error) console.log(error)

  tasks.value = data
}

await getTasks()

const columns: ColumnDef<Tables<'tasks'>>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-start' }, 'Name'),
    cell: ({ row }) =>
      h(
        RouterLink,
        {
          to: `/tasks/${row.original.id}`,
          class: 'text-start font-medium hover:underline block',
        },
        () => row.getValue('name'),
      ),
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-start' }, 'Status'),
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'text-start font-medium' },
        row.getValue('status'),
      )
    },
  },
  {
    accessorKey: 'due_date',
    header: () => h('div', { class: 'text-start' }, 'Due Date'),
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'text-start font-medium' },
        row.getValue('due_date'),
      )
    },
  },
  {
    accessorKey: 'projects',
    header: () => h('div', { class: 'text-start' }, 'Project'),
    cell: ({ row }) =>
      h(
        RouterLink,
        {
          to: `/tasks/${row.original.projects.slug}`,
          class: 'text-start font-medium hover:underline block',
        },
        () => row.getValue('projects').name,
      ),
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-start' }, 'Collaborators'),
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'text-start font-medium' },
        JSON.stringify(row.getValue('collaborators')),
      )
    },
  },
]
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
