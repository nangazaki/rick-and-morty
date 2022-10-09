<template>
  <WikiCharacter :character="character" v-show="!loading" />
</template>

<script>
import api from '@/service';
import WikiCharacter from '@/components/WikiCharacter.vue';

export default {
  name: 'CharacterView',
  components: { WikiCharacter, },
  data() {
    return {
      id: this.$route.params.id,
      character: undefined,
      episodes: [],
      loading: true
    };
  },
  created() {
    this.getCharacter(this.id);
  },
  methods: {
    getCharacter(id) {
      api.get(`/character/${id}`).then(response => {
        this.character = response.data
        this.loading = false
        console.log(this.character, this.loading)
      })
    },
  },
}
</script>

<style scoped>
.hidden {
  display: none;
}
</style>