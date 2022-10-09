<template>
  <div class="py-20 px-8 sm:px-12 md:px-20 lg:px-24">
    <h1 class="mb-10 font-semibold text-4xl text-light flex items-center gap-6 relative before:content-['.'] before:relative before:w-16 before:h-10 before:bg-secondary before:text-secondary before:flex before:items-center before:justify-center">{{ character.name }}</h1>
    <div
      class="relative w-full p-4 flex gap-16 flex-wrap mb-20 border-base border-color bg-gradient-to-br from-color-grad-from to-color-grad-to">
      <span class="absolute top-4 right-4 py-2 px-4 text-light font-medium"
        :class="character.status.toLowerCase()">{{character.status}}</span>
      <img class="max-w-default w-full" :src="character.image" :alt="character.name">

      <div class="py-6 ">
        <p class="font-semibold text-light flex flex-col gap-1 mb-5">
          <span class="font-normal text-gray">Species:</span>
          {{ character.species }}
        </p>
        <p class="font-semibold text-light flex flex-col gap-1 mb-5">
          <span class="font-normal text-gray">Gender:</span>
          {{ character.gender }}
        </p>
        <p class="font-semibold text-light flex flex-col gap-1 mb-5">
          <span class="font-normal text-gray">Origin:</span>
          {{ character.origin.name }}
        </p>
        <p class="font-semibold text-light flex flex-col gap-1">
          <span class="font-normal text-gray">Last know location:</span>
          {{ character.location.name }}
        </p>
      </div>
    </div>

  </div>
</template>


<script>

export default {
  name: "CharacterWiki",
  props: {
    character: {
      type: Object,
      required: true
    },
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