<script setup lang="ts">

</script>

<template>
  <Header/>
  <div class="hero-content">
    <img class="hero-image" src="~assets/images/hero-image.jpg" alt="hero_image"/>
    <div class="hero-text">
      <h1>WEAR YOUR</h1>
      <h1>BEST MOMENTS</h1>
    </div>
    <img class="logo-mask" src="~assets/images/logo-mask.png" alt="logo_mask"/>
  </div>
  <section class="banner shop-banner">
    <div class="section-content">
      <p class="content-info">SEE LATEST ARRIVALS</p>
      <span class="content-button">Shop now</span>
    </div>
  </section>
  <br>
  <br>
  <br>
  <br>
  <!-- TODO: insert new articles list on first page right after hero section  -->
  <Footer/>
</template>

<style lang="css" scoped>

@media screen and (max-width: 1365px) {
  .hero-content {
    display: none;
  }
  .shop-banner {
    top: 82px;
  }
  .banner {
    height: 320px;
  }
}

@media screen and (min-width: 1366px) {
  .banner {
    height: 500px;
  }
}

.hero-content {
  height: 100vh;
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
  transform: translate(-25%, -50%);
}

.shop-banner {
  position: relative;
}
.section-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url('@/assets/images/shop-banner-image.jpg');
  background-size: cover;
  background-position: center top;
  padding-bottom: 12px;
}
.content-info {
  font-family: "Tenor Sans", sans-serif;
  font-size: 32px;
  padding: 12px;
  text-align: end;
  color: #FFFFFF;
}
.content-button {
  font-family: "Tenor Sans", sans-serif;
  font-size: 24px;
  color: #FFFFFF;
  padding: 12px;
  cursor: pointer;
  text-decoration: underline;
}
</style>