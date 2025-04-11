<script lang="ts" setup>
import { onMounted } from 'vue';
import { useGiphyStore } from 'stores/giphyStore';
import GifCard from 'components/GifCard.vue';

const giphy = useGiphyStore();

onMounted(() => {
  giphy.loadFavorites();
});
</script>

<template>
  <div class="w-[900px] mx-auto mt-10">
    <div class="text-h4 text-grey-8 q-mb-md mt-4">Seus gifs favoritos</div>

    <div v-if="giphy.favorites.length === 0" class="text-subtitle2 text-grey-6">
      Você ainda não tem GIFs favoritos. Pesquise e adicione alguns!
    </div>

    <div class="row w-full">
      <div v-for="gif in giphy.favorites" :key="gif.id" class="col-xs-6 col-sm-4 col-md-3">
        <GifCard
          :gif="gif"
          :isFavorite="true"
          @toggle-favorite="giphy.removeFavoriteById(gif.id)"
        />
      </div>
    </div>
  </div>
</template>
