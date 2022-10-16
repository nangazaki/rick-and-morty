<!-- eslint-disable vue/valid-v-else -->
<template>
  <main>
    <div class="py-20 px-8 sm:px-12 md:px-20 lg:px-24">
      <div class="flex justify-between items-center flex-wrap gap-4 mb-20">
        <div>
          <h1
            class="font-semibold text-4xl text-light flex items-center gap-6 relative before:content-['.'] before:relative before:w-16 before:h-10 before:bg-secondary before:text-secondary before:flex before:items-center before:justify-center">
            Characters
          </h1>
        </div>
        <SearchComp @search="search = $event" @keyup="searchCharacter" />
      </div>
      <div>
        <div class="flex justify-center gap-4 flex-wrap mb-20">
          <CardCharacter v-for="character in characters" :key="character.id" :character="character" />
        </div>
        <div class="flex gap-8 justify-center items-center">
          <button @click="prevPage" class="p-3 bg-primary text-light hover:bg-btn-hover" :class="classCSSPrev">
            <fa :icon="['fas', 'arrow-left']" class="mr-1" /> Previous
          </button>
          <button @click="nextPage" class="p-3 bg-primary text-light hover:bg-btn-hover" :class="classCSSNext">
            Next
            <fa :icon="['fas', 'arrow-right']" class="ml-1" />
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SearchComp from './SearchComp.vue';
import CardCharacter from './CardCharacter.vue';
import api from '@/service';

export default {
  components: { SearchComp, CardCharacter, },
  data() {
    return {
      characters: {
        type: Array,
      },
      page: 1,
      search: '',
    }
  },
  created() {
    console.log(this.loading)
    this.fetchCharacters()
  },
  computed: {
    classCSSPrev() {
      return (this.page == 1) ? 'btn-inactive' : ''
    },
    classCSSNext() {
      return (this.page == 24) ? 'btn-inactive' : ''
    }
  },
  methods: {
    fetchCharacters() {
      api.get(`/character/?page=${this.page}`).then(response => {
        this.characters = response.data.results
        this.loading = false
      })
    },
    searchCharacter() {
      this.loading = !this.loading
      api.get(`/character/?name=${this.search}`).then(response => {
        this.characters = response.data.results
        this.loading = true
      })
    },
    nextPage() {
      if (this.page <= 24) {
        this.page++
        this.fetchCharacters()
        return
      }
    },
    prevPage() {
      if ((this.page > 1) && this.page <= 24) {
        this.page--
        this.fetchCharacters()
        return
      }
    }
  },
}
</script>

<style>
.btn-inactive {
  background: #190a31;
}
</style>