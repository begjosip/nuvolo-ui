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
      <span class="content-subtitle">Shop</span>
      <span class="content-center-text">CHECK OUR ARTICLES</span>
    </div>
  </section>
  <section class="banner womenswear-banner">
    <div class="section-content">
      <span class="content-subtitle">Womenswear</span>
      <span class="content-center-text">FIERCE FASHION, TIMELESS BEAUTY</span>
    </div>
  </section>
  <section class="banner menswear-banner">
    <div class="section-content">
      <span class="content-subtitle">Menswear</span>
      <span class="content-center-text">CRAFTED FOR THE CONFIDENT MAN</span>
    </div>
  </section>
  <section class="banner kidswear-banner">
    <div class="section-content">
      <span class="content-subtitle">Kidswear</span>
      <span class="content-center-text">BIG STYLE FOR LITTLE ONES</span>
    </div>
  </section>
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
    height: calc(100vh - 82px);
  }
}

@media screen and (min-width: 1366px) {
  .banner {
    height: 100vh;
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url('@/assets/images/shop-banner-image.jpg');
  background-size: cover;
  background-position: center top;
}

.womenswear-banner {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('@/assets/images/womenswear-image.jpg');
  background-size: cover;
  background-position: center top;
}

.menswear-banner {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url('@/assets/images/menswear-image.jpg');
  background-size: cover;
  background-position: center top;
}

.kidswear-banner {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url('@/assets/images/kidswear-image.jpg');
  background-size: cover;
  background-position: center left;
}

.section-content {
  height: 100%;
  display: flex;
}

.content-subtitle {
  font-family: "Tenor Sans", sans-serif;
  font-size: 38px;
  text-decoration: underline;
  color: #FFFFFF;
  padding: 1em;
  cursor: pointer;
}

.content-center-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Heebo, sans-serif;
  font-size: 24px;
  text-align: center;
  text-shadow: 1px 1px 1px #000000;
  color: #FFFFFF;
}
</style>