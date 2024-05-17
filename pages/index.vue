<script setup lang="ts">

</script>

<template>
  <Header/>
  <img class="hero-image" src="~assets/images/hero-image.jpg" alt="hero_image"/>
</template>

<style lang="css" scoped>

@media screen and (max-width: 1365px) {
  .hero-image {
    display: none;
  }
}

.hero-image {
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  height: 100%;
  max-width: 33vw;
  filter: brightness(80%);
}

</style>