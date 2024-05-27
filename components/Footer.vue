<script lang="ts" setup>

</script>

<template>
  <footer>
    <div class="center-container">
      <span @click="navigateTo('/join-newsletter')" class="newsletter">JOIN OUR NEWSLETTER</span>
      <ul class="social-media-list">
        <li>
          <a class="link" href="">FACEBOOK</a>
        </li>
        <li>
          <a class="link" href="">INSTAGRAM</a>
        </li>
        <li>
          <a class="link" href="">X</a>
        </li>
        <li>
          <a class="link" href="">PINTEREST</a>
        </li>
      </ul>
    </div>
    <span class="copyright">&copy; Copyright, nuvolo</span>
    <img class="footer-image" src="~assets/images/footer-image.jpg" alt="footer_image"/>
  </footer>
</template>

<style lang="css" scoped>
footer {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  font-family: Heebo, sans-serif;
  font-weight: 300;
  color: var(--primary);
  text-align: center;
  background-color: var(--secondary);
}

.center-container {
  display: flex;
  flex-direction: column;
  width: 50vw;
}

.newsletter {
  width: fit-content;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  margin: auto auto 1em;
}

.social-media-list {
  display: flex;
  justify-content: center;
  column-gap: 1em;
  list-style: none;
  font-size: 13px;
  padding: 0;
}

.link {
  text-decoration: none;
  color: var(--primary);
 }

.copyright {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 25px;
  font-size: 13px;
  z-index: 20;
}

.footer-image {
  position: absolute;
  right: 0;
  height: 100vh;
  width: 50vw;
  object-fit: cover;
}

@media screen and (max-width: 764px) {
  .footer-image {
    display: none;
  }
  .center-container {
    width: 100vw;
  }

}

</style>