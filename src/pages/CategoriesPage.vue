<script setup lang="ts">
import { onMounted } from 'vue';
import { useGiphyStore } from 'stores/giphyStore';
import GifCard from 'components/GifCard.vue';

const giphy = useGiphyStore();

onMounted(async () => {
  await giphy.fetchCategories();
});
</script>

<template>
  <div class="w-[900px] mx-auto mt-10">
    <div class="text-h6 text-grey-8 q-mb-md">Categorias</div>

    <div class="q-gutter-sm row q-mb-md">
      <q-btn
        v-for="category in giphy.categories"
        :key="category"
        outline
        color="primary"
        :label="category"
        @click="giphy.fetchGifsByCategory(category)"
        :class="{ 'bg-primary text-white': giphy.selectedCategory === category }"
      />
    </div>

    <div v-if="giphy.gifs.length === 0">
      <q-banner class="bg-grey-3 text-grey-9">No GIFs loaded. Select a category above.</q-banner>
    </div>

    <div v-else class="row">
      <div v-for="gif in giphy.gifs" :key="gif.id" class="col-xs-6 col-sm-4 col-md-3">
        <GifCard
          :gif="gif"
          :isFavorite="giphy.favoriteIds.includes(gif.id)"
          @toggle-favorite="giphy.toggleFavorite"
        />
      </div>
    </div>
  </div>
</template>
