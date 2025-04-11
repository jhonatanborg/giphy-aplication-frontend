import { defineStore } from 'pinia'
import { api } from 'boot/axios'
import { LocalStorage } from 'quasar' // ← adicionado aqui

interface Gif {
  id: string
  title: string
  images: {
    fixed_height: {
      url: string
    }
  }
}
interface GiphyCategory {
  name: string
  // você pode adicionar mais campos se quiser usar, como: gif, subcategories, etc.
}


export const useGiphyStore = defineStore('giphy', {
  state: () => ({
    gifs: [] as Gif[],
    favorites: [] as Gif[],
    categories: [] as string[],
    selectedCategory: '' as string,

  }),

  getters: {
    favoriteIds: (state) => state.favorites.map((gif) => gif.id),
  },

  actions: {
    async fetchCategories() {
      try {
        const response = await api.get<{ data: GiphyCategory[] }>('/gifs/categories')
        this.categories = response.data.data.map((cat) => cat.name)
      } catch (error) {
        console.error('Erro ao buscar categorias:', error)
      }
    },
    async fetchGifsByCategory(category: string) {
      try {
        const response = await api.get('/gifs/search', {
          params: {
            q: category,
            limit: 20,
          },
        })
        this.gifs = response.data.data
        this.selectedCategory = category
      } catch (error) {
        console.error('Erro ao buscar GIFs por categoria:', error)
      }
    },
    async fetchTrendingGifs() {
      try {
        const response = await api.get('/gifs/trending', {
          params: {
            limit: 20,
          },
        })
        this.gifs = response.data.data
      } catch (error) {
        console.error('Erro ao buscar GIFs trending:', error)
      }
    },

    async searchGifs(term: string) {
      try {
        const response = await api.get('/gifs/search', {
          params: {
            q: term,
            limit: 20,
          },
        })
        this.gifs = response.data.data
      } catch (error) {
        console.error('Erro ao buscar GIFs por termo:', error)
      }
    },

    loadFavorites() {
      const saved = LocalStorage.getItem<Gif[]>('giphy:favorites')
      if (saved) {
        this.favorites = saved
      } else {
        // fallback (caso tenha sido salvo diretamente com localStorage antes)
        const raw = localStorage.getItem('giphy:favorites')
        if (raw) {
          try {
            this.favorites = JSON.parse(raw)
          } catch (e) {
            console.warn('Erro ao fazer parse do localStorage:', e)
          }
        }
      }
    },

    saveFavorites() {
      LocalStorage.set('giphy:favorites', this.favorites)
    },

    toggleFavorite(gif: Gif) {
      const exists = this.favorites.find((g) => g.id === gif.id)
      if (exists) {
        this.favorites = this.favorites.filter((g) => g.id !== gif.id)
      } else {
        this.favorites.push(gif)
      }
      this.saveFavorites()
    },
    removeFavoriteById(id: string) {
      this.favorites = this.favorites.filter((gif) => gif.id !== id)
      this.saveFavorites()
    }

  },
})
