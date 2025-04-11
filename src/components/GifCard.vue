<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
interface GifObject {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
}

defineProps<{
  gif: GifObject;
  isFavorite: boolean;
}>();

defineEmits<{
  (e: 'toggle-favorite', gif: GifObject): void;
}>();
</script>
<template>
  <q-card
    flat
    class="col-xs-6 mr-2 my-1 col-sm-4 col-md-3 flex flex-col justify-between p-2 h-[250px]"
  >
    <div class="flex-1 flex items-center justify-center overflow-hidden">
      <img
        :src="gif.images.fixed_height.url"
        :alt="gif.title"
        class="w-full max-h-[280px] object-cover"
      />
    </div>
    <q-btn
      size="sm"
      icon="favorite"
      :label="isFavorite ? 'Remover' : 'Favoritar'"
      flat
      :color="isFavorite ? 'red' : 'primary'"
      class="mt-2 self-start"
      @click="$emit('toggle-favorite', gif)"
    />
  </q-card>
</template>


