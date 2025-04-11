<script setup lang="ts">
import { ref, watch } from 'vue';

const search = ref('');

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'search', value: string): void;
}>();

watch(search, (newValue) => {
  emit('update:modelValue', newValue);
});

function handleSearch() {
  emit('search', search.value);
}
</script>

<template>
  <div class="search-bar row items-center q-gutter-sm text-white rounded-borders">
    <q-input
      v-model="search"
      filled
      placeholder="Buscar GIFs..."
      class="col"
      dense
      input-class="text-grey-100"
      bg-color="white"
      color="grey-100"
      @keyup.enter="handleSearch"
      :append="true"
    >
      <template v-slot:append>
        <q-btn flat class="bg-primary text-white q-ml-sm" @click="handleSearch">
          <q-icon name="search" />
        </q-btn>
      </template>
    </q-input>
  </div>
</template>
