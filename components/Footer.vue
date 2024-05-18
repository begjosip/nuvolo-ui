<script lang="ts" setup>

</script>

<template>
  <footer>
    <div></div>
    <span><NuxtLink class="link" to="/join-our-newsletter">JOIN OUR NEWSLETTER</NuxtLink></span>
    <ul>
      <li>
        <NuxtLink class="link" target="_blank" to="https://www.facebook.com/">FACEBOOK</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" target="_blank" to="https://www.instagram.com/">INSTAGRAM</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" target="_blank" to="https://www.x.com/">X</NuxtLink>
      </li>
    </ul>
  </footer>
</template>

<style lang="css" scoped>
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