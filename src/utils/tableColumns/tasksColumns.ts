import { RouterLink } from 'vue-router'
import type { ColumnDef } from '@tanstack/vue-table'
import type { TasksWithProjects } from '@/utils/supaQueries'

export const columns: ColumnDef<TasksWithProjects[0]>[] = [
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
      row.original.projects
        ? h(
            RouterLink,
            {
              to: `/tasks/${row.original.projects.slug}`,
              class: 'text-start font-medium hover:underline block',
            },
            () => row.original.projects?.name,
          )
        : '',
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
