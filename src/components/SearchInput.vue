<template>
  <input
    :value="modelValue"
    :placeholder="placeholder"
    type="text"
    class="p-2 rounded w-[400px]"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>

<script lang="ts" setup>

defineProps<{
  placeholder?: string
  modelValue?: string | null
}>()

defineEmits(['update:modelValue'])

</script>
