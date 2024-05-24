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
  width: 100%;
  display: flex;
  flex-direction: column;
}

.newsletter {
  font-weight: 400;
  font-size: 18px;
  margin: 3em;
  cursor: pointer;
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
}

</style>