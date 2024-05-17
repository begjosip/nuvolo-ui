<script setup lang="ts">

</script>

<template>
  <footer>
    <div></div>
    <span>JOIN OUR NEWSLETTER</span>
    <ul>
      <li>FACEBOOK</li>
      <li>INSTAGRAM</li>
      <li>X</li>
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

@media screen and (max-width: 1366px) {
  footer {
    display: none
  }
}

</style>