<script setup lang="ts">
defineProps<{
  icon: string;
  label: string;
  active?: boolean;
}>();

defineEmits(['click']);
</script>

<template>
  <div
    class="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200"
    :class="
      active
        ? 'bg-[#007BFF] text-white shadow-lg'
        : 'text-gray-400 hover:bg-[#1a2b4c] hover:text-white'
    "
    @click="$emit('click')"
  >
    <q-icon :name="icon" size="22px" />
    <span class="font-medium">{{ label }}</span>
  </div>
</template>

