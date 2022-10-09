<template>
  <form>
    <input type="text" v-model="search" placeholder="Search by name..."
      class="w-60  h-10 p-3 bg-background font-normal text-sm text-gray border-base border-gray" />
    <button class="relative top-0 right-8" @click.prevent="searchEmit">
      <fa :icon="['fas', 'search']" />
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  },
  methods: {
    searchEmit() {
      this.$emit('search', this.search)
    }
  },
}
</script>