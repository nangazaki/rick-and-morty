<template>
  <div
    class="relative max-w-64 lg:w-60 p-3 bg-gradient-to-br from-grad-card-from to-grad-card-to border-base border-color shadow-box-card shadow-sh-color text-sm">
    <span class="absolute top-3 right-3 py-2 px-4 text-light font-medium" :class="character.status.toLowerCase()">{{
    character.status }}</span>
    <router-link :to="`/wiki/${character.id}/${nameUrl}`">
      <img :src="character.image" :alt="character.name" class="w-full block mb-8">
    </router-link>
    <div class="character__info">
      <router-link :to="`/wiki/${character.id}/${nameUrl}`">
        <h3 class="text-secondary text-xl font-medium mb-4">{{ character.name }}</h3>
      </router-link>
      <div class="mb-2">
        <p>
          Gender:
          <span class="font-medium text-light">{{ character.gender }}</span>
        </p>
      </div>
      <div class="mb-2">
        <p>
          Origin:
          <span class="font-medium text-light">{{ character.origin.name }}</span>
        </p>
      </div>
      <div>
        <p>
          Species:
          <span class="font-medium text-light">{{ character.species }}</span>
        </p>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    character: {
      type: Object
    },
  },
  computed: {
    nameUrl() {
      return (this.character.name.toLowerCase()).replace(/[ ]+/g, '_')
    },
  },
  methods: {
  },
}
</script>

<style scoped>
.alive {
  background-color: #1D991A;
}

.dead {
  background-color: #800b0b;
}

.unknown {
  background-color: #979797;
}
</style>