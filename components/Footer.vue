<script setup lang="ts">

</script>

<template>
  <footer>
    <div></div>
    <span><NuxtLink class="link" to="/join-our-newsletter">JOIN OUR NEWSLETTER</NuxtLink></span>
    <ul>
      <li><NuxtLink class="link" to="https://www.facebook.com/" target="_blank">FACEBOOK</NuxtLink></li>
      <li><NuxtLink class="link" to="https://www.instagram.com/" target="_blank">INSTAGRAM</NuxtLink></li>
      <li><NuxtLink class="link" to="https://www.x.com/" target="_blank">X</NuxtLink></li>
    </ul>
  </footer>
</template>

<style scoped lang="css">
footer {
  width: 100%;
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  bottom: 0;
  font-family: Heebo, sans-serif;
  text-align: center;
  color: var(--primary)
}
span {
  font-weight: 700;
}
ul {
  display: flex;
  justify-content: end;
  list-style: none;
  li {
    padding-right: 32px;
    cursor: pointer;
  }
}
.link {
  text-decoration: none;
  color: var(--primary);
}

@media screen and (max-width: 1366px) {
  footer {
    display: none
  }
}

</style>