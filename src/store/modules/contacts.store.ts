import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { IContact } from '@/types'

export const useContactsStore = defineStore('contactsStore', () => {
  const searchInputValue = ref('')

  const defaultRoles = ref('All')
  const dataRoles = ref(['All', 'User', 'Admin'])

  const defaultSortingValue = ref('Default')
  const dataSorting = ref(['Default', 'Ascending', 'Descending'])

  const contacts = ref<IContact[]>([
    {
      id: 1,
      name: 'Esther Howard',
      description: 'Forward Response Developer',
      image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'Admin'
    },
    {
      id: 2,
      name: 'Jane Cooper',
      description: 'Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'Admin'
    },
    {
      id: 3,
      name: 'Cody Fisher',
      description: 'Product Directives Officer',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'User'
    }
  ])

  function addContact (contact: IContact) {
    contacts.value.push(contact)
  }

  function updateContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value[currentIndex] = { ...contact }
  }

  function deleteContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value.splice(currentIndex, 1)
  }

  const filteredContacts = computed(() => {
    return contacts.value
      .filter(contact => {
        return contact.name.toLowerCase().includes(searchInputValue.value.toLowerCase()) ||
          contact.description.toLowerCase().includes(searchInputValue.value.toLowerCase())
      })
      .filter(contact => {
        if (defaultRoles.value === 'All') {
          return true
        }
        return contact.role === defaultRoles.value
      })
      .sort((prev, next) => {
        if (defaultSortingValue.value === 'Ascending') {
          return prev.name.localeCompare(next.name)
        }
        if (defaultSortingValue.value === 'Descending') {
          return next.name.localeCompare(prev.name)
        }
        return 0
      })
  })

  return {
    defaultSortingValue,
    dataSorting,
    dataRoles,
    defaultRoles,
    filteredContacts,
    searchInputValue,
    contacts,
    addContact,
    deleteContact,
    updateContact
  }
})
