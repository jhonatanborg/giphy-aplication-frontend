<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useGiphyStore } from 'stores/giphyStore';
import SearchInput from 'components/SearchInput.vue';
import GifCard from 'components/GifCard.vue';
const giphy = useGiphyStore();
const searchTerm = ref('');

const onSearch = async () => {
  if (searchTerm.value.trim()) {
    console.log('🚀 ~ onSearch ~ searchTerm:', searchTerm);
    await giphy.searchGifs(searchTerm.value.trim());
  } else {
    await giphy.fetchTrendingGifs();
  }
};

onMounted(async () => {
  await giphy.fetchTrendingGifs();
  giphy.loadFavorites();
});
</script>

<template>
  <div class="w-[900px] mx-auto mt-10">
    <h1 class="text-3xl text-center q-mt-md">SG - GIF Search</h1>
    <p class="text-center q-mb-md">
      Pesquise seus GIFs favoritos e salve-os em sua lista de favoritos!
    </p>
    <search-input
      v-model="searchTerm"
      @search="onSearch"
      placeholder="Search for GIFs..."
      class="q-mb-md"
    />
    <div class="w-full row">
      <div v-for="gif in giphy.gifs" :key="gif.id" class="w-full col-xs-6 col-sm-4 col-md-3">
        <GifCard
          :gif="gif"
          :isFavorite="giphy.favoriteIds.includes(gif.id)"
          @toggle-favorite="giphy.toggleFavorite"
        />
      </div>
    </div>
  </div>
</template>
