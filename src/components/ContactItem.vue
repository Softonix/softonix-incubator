<template>
  <div class="rounded-lg bg-white shadow relative">
    <div class="p-6 pb-2">
      <div class="flex">
        <div class="flex-grow  text-sm truncate">
          <template v-if="editMode || !checkProps()">
            <input
              ref="inputRef"
              v-model="localContact.name"
              placeholder="Enter your name"
              type="text"
              class="block font-medium w-full"
            >
            <input
              v-model="localContact.description"
              placeholder="Enter info about you"
              type="text" class="block mt-1 w-full"
            >
            <input v-model="localContact.image" placeholder="URL" type="text" class="block mt-1 w-full">
          </template>

          <template v-else>
            <p class="font-medium">{{ contact.name }}</p>
            <p class="text-gray mt-1 truncate">{{ contact.description }}</p>
          </template>
        </div>
        <img
          class="w-[40px] h-[40px] object-cover ml-2 rounded-full shrink-0"
          :src="contact.image" alt="contact-logo"
        >
      </div>
      <div class="flex flex-grow-0 justify-end mt-2 gap-2">
        <template v-if="!editMode && checkProps()">
          <span
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click="triggerEditMode"
          >Edit</span>
          <span
            class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
            @click="$emit('delete')"
          >Delete</span>
        </template>
        <template v-else-if="!checkProps()">
          <span
            class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
            @click="$emit('delete')"
          >DeleteCard</span>
          <span
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click="onSave"
          >SaveCard</span>
        </template>
        <template v-else>
          <span
            class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
            @click="editMode =false"
          >Cancel</span>
          <span
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click="onSave"
          >Save</span>
        </template>
      </div>
    </div>

    <div
      class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light"
    >
      <div
        class="flex items-center justify-center flex-1 py-4 cursor-pointer hover:text-gray"
      >
        <IconEnvelope />
        <span class="ml-3">Email</span>
      </div>
      <div
        class="flex items-center justify-center flex-1 py-4 border-l
        border-gray-ultra-light cursor-pointer hover:text-gray"
      >
        <IconPhone />
        <span class="ml-3">Call</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { ref, nextTick } from 'vue'

import type { IContact } from '@/types'
//  виносимо svg у окремі компоненти
import IconEnvelope from '@/components/icons/IocnEnvelope.vue'
import IconPhone from '@/components/icons/IconPhone.vue'

const props = defineProps<{
  contact: IContact
}>()

// приймає масив event
const emit = defineEmits(['delete', 'save'])

const inputRef = ref < HTMLInputElement >()
// console.log(inputRef)

// створюємо змінну з значенням boolean яке буде змінювати значення при кліку і відбуватися conditional rendering
const editMode = ref(false)

const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
})

async function triggerEditMode () {
  // ми змінюємо editmode на true і у нас буде відбуватися conditional rendering
  editMode.value = true
  localContact.value = { ...props.contact }
  await nextTick()
  inputRef.value?.focus()
}

// console.log(checkProps())

function onSave () {
  emit('save', localContact.value)
  editMode.value = false
}

// функція check props провіряє на вхід пропси і повердає boolean
const checkProps = (): boolean => {
  if (props.contact.name && props.contact.image && props.contact.description) {
    return true
  }
  return false
}

</script>
