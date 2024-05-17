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
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  bottom: 0;
  font-family: Heebo, sans-serif;
  color: var(--primary);
  span {
    text-align: center;
    cursor: pointer;
    font-weight: 700;
  }
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

</style>