<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  methods: {
    slideToNext(): void {
      const carouselInstance = this.$refs.carousel as HTMLDivElement | null;
      if (carouselInstance)
        // found next() function in carousel module
        (carouselInstance as any).next();
    },
    slideToPrev(): void {
      const carouselInstance = this.$refs.carousel as HTMLDivElement | null;
      if (carouselInstance)
        // found prev() function in carousel module
        (carouselInstance as any).prev();
    }
  }
});
</script>
<template>
  <Header/>
  <div class="wrapper">
    <Carousel ref="carousel" :autoplay="5000" :wrap-around="true">
      <Slide v-for="slide in 1" :key="slide">
        <div class="carousel__item item">
          <img class="hero-top" src="/assets/images/hero-img001.jpg" alt="Hero1"/>
        </div>
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <div class="carousel__item">
          <img src="/assets/images/hero-img002.jpg" alt="Hero2"/>
        </div>
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <div class="carousel__item">
          <img src="/assets/images/hero-img003.jpg" alt="Hero3"/>
        </div>
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <div class="carousel__item">
          <img src="/assets/images/hero-img004.jpg" alt="Hero4"/>
        </div>
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <div class="carousel__item">
          <img class="hero-top" src="/assets/images/hero-img005.jpg" alt="Hero5"/>
        </div>
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <div class="carousel__item">
          <img src="/assets/images/hero-img007.jpg" alt="Hero7"/>
        </div>
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <div class="carousel__item">
          <img src="/assets/images/hero-img006.jpg" alt="Hero6"/>
        </div>
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <div class="carousel__item">
          <Footer/>
        </div>
      </Slide>
    </Carousel>
    <i class="arrow right" @click="slideToNext"></i>
    <i class="arrow left" @click="slideToPrev"></i>
  </div>
</template>

<style lang="css" scoped>
.wrapper {
  position: fixed;
  width: 100%;
  height: 100vh;
}

ol {
  display: none;
}

img {
  height: 100vh;
  width: 100vw;
  object-fit: cover;
}

.hero-top {
  object-position: top;
}

.arrow {
  display: inline-block;
  position: absolute;
  top: 50%;
  border: solid #FFF;
  border-width: 0 1px 1px 0;
  padding: 8px;
  cursor: pointer;
}

@media screen and (max-width: 764px) {
  .arrow {
    display: none;
  }
}

.right {
  right: 20px;
  -webkit-transform: rotate(-45deg);
  box-shadow: 2px 3px rgba(0, 0, 0, 0.2);
}

.left {
  left: 20px;
  -webkit-transform: rotate(-225deg);
  box-shadow: 3px 2px rgba(0, 0, 0, 0.2);
}

</style>