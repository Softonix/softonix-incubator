<template>
  <div class="rounded-lg bg-white shadow relative">
    <div class="p-6 pb-2">
      <div class="flex">
        <div class="flex-grow text-sm truncate">
          <template v-if="editMode || validation()">
            <input
              ref="inputRef"
              v-model="localContact.name"
              type="text"
              class="block font-medium w-full"
              placeholder="Full Name"
            >
            <input
              v-model="localContact.description"
              placeholder="Professional position"
              type="text" class="block mt-1 text-gray w-full"
            >
            <input v-model="localContact.image" placeholder="URL" type="text" class="block mt-1 w-full">
          </template>

          <template v-else>
            <p class="font-medium">{{ contact.name }}</p>
            <p class="text-gray mt-1 truncate">
              {{ contact.description }}
            </p>
          </template>
        </div>
        <img
          class="w-[40px] h-[40px] object-cover ml-2 rounded-full shrink-0"
          :src="contact.image" alt="contact-logo"
        >
      </div>
      <div class="flex justify-end mt-2 gap-2">
        <template v-if="!editMode && !validation()">
          <span
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click="triggerEditMode"
          >Edit</span>
          <span
            class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
            @click="$emit('delete')"
          >Delete</span>
        </template>
        <template v-else-if="validation()">
          <span
            class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
            @click="$emit('delete')"
          >Delete</span>
          <span
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click="onSave"
          >Save</span>
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

    <div class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light">
      <div class="flex items-center justify-center flex-1 py-4 cursor-pointer hover:text-gray">
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
import IconEnvelope from '@/components/icons/IconEnvelope.vue'
import IconPhone from '@/components/icons/IconPhone.vue'

const props = defineProps<{
  contact: IContact
}>()

const emit = defineEmits(['delete', 'save'])

const inputRef = ref<HTMLInputElement>()

const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: 'https://firebasestorage.googleapis.com/v0/b/lapiec-6c366.appspot.com/o/user.png?alt=media&token=2096ff6f-f1c8-441f-baa1-f7b6aac73cdb'
})

const editMode = ref(false)

async function triggerEditMode () {
  editMode.value = true
  localContact.value = { ...props.contact }
  await nextTick()
  inputRef.value?.focus()
}

function onSave () {
  emit('save', localContact.value)
  editMode.value = false
}

function validation (): boolean {
  if (props.contact.name && props.contact.description) {
    return false
  }
  return true
}

</script>
