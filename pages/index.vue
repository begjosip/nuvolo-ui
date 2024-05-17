<script setup lang="ts">

</script>

<template>
  <Header/>
  <img class="hero-image" src="~assets/images/hero-image.jpg" alt="hero_image"/>
  <div class="hero-text">
    <h1>WEAR YOUR</h1>
    <h1>BEST MOMENTS</h1>
  </div>
  <img class="logo-mask" src="~assets/images/logo-mask.png" alt="logo_mask"/>
  <Footer/>
</template>

<style lang="css" scoped>

@media screen and (max-width: 1365px) {
  .hero-image {
    display: none;
  }

  .logo-mask {
    display: none;
  }

  .hero-text {
    display: none;
  }
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(5%, -50%);
  font-family: "Tenor Sans", sans-serif;
  font-size: 42px;
  z-index: 20;
  mix-blend-mode: difference;
  h1 {
    color: white;
    line-height: 32px;
    letter-spacing: 18px;
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

.logo-mask {
  position: absolute;
  object-fit: cover;
  max-height: 75%;
  top: 50%;
  right: 0;
  transform: translate(-30%, -50%);
}
</style>