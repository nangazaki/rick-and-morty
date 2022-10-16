<template>
  <div class="episode">
    <span class="number">EP nº. {{ episode.id }}</span>
    <p class="title">
      Title:
      <span>
        {{ episode.name }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    episode: {
      type: Object,
    },
  },
}
</script>