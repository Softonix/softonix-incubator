<template>
  <div class="max-w-[1440px] p-6">
    <h3 class="font-medium m-0">Contact list</h3>
    <button @click="addCard">Add card +</button>
    <div class="contact-list items-center grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
      <ContactItem
        v-for="(contact, index) in contacts"
        :key="contact.id"
        :contact="contact"
        @delete="deleteContact(index)"
        @save="onContactSave($event, index)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { IContact } from '@/types'
import ContactItem from '@/components/ContactItem.vue'

// mok data
const contacts = ref<IContact[]>([
  {
    id: 1,
    name: 'Esther Howard',
    description: 'Forward Response Developer',
    image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    id: 2,
    name: 'Jane Cooper',
    description: 'Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    id: 3,
    name: 'Cody Fisher',
    description: 'Product Directives Officer',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  }
])

function deleteContact (index: number) {
  contacts.value.splice(index, 1)
}

function onContactSave (contact: IContact, index: number) {
  contacts.value[index] = { ...contact }
}

function addCard (): void {
  const newCard: IContact = {
    id: contacts.value.length + 1,
    name: '',
    description: '',
    image: 'https://raw.githubusercontent.com/gist/theAdityaNVS/f5b585d1082da2dffffea32434f37956/raw/7f9552d0a179b4f84059259fa878199e369b069c/GitHub-logo.gif'
  }
  contacts.value.push(newCard)

  const index = contacts.value.findIndex(contact => contact.id === newCard.id)
  if (index !== -1) {
    console.log(index)
    console.log(contacts.value)
  }
}
</script>
