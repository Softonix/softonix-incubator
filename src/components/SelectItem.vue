<template>
  <select
    class="w-[150px] h-[40px] p-2" :value="modelValue"
    @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
  >
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script lang="ts" setup>
defineProps<{
  options: string[]
  modelValue: string
}>()

defineEmits(['update:modelValue'])
</script>
