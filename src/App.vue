<template>
  <FeaturedComp />
  <router-view />
  <FooterComp />
</template>

<script>
import FeaturedComp from '@/components/FeaturedComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default {
  components: {
    FeaturedComp, FooterComp
  }
}
</script>
