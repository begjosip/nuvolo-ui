<script lang="ts" setup>
function hideOverlay() {
  const overlay = document.getElementById('error-overlay') as HTMLElement;
  overlay.classList.remove('active');
}

</script>

<template>
  <div id="error-overlay" class="overlay">
    <div class="container">
      <div class="wrapper">
        <div class="message-container">
          <slot name="error-template"></slot>
        </div>
      </div>
      <button class="action-button" @click="hideOverlay">CLOSE</button>
    </div>
  </div>
</template>

<style scoped lang="css">

.overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 100;
}

.overlay.active {
  display: flex;
}

.container {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  outline: solid 2px var(--primary);
  font-family: Heebo, sans-serif;
}

.wrapper {
  padding: 1.5em;
}

@media screen and (max-width: 764px) {
  .container {
    max-width: 80%;
  }
  .wrapper {
    padding: 1em;
  }
}

.message-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--primary);
}

.action-button {
  height: 55px;
  width: 100%;
  background-color: #FFF;
  box-shadow: 0 -2px 0 var(--primary);
  border: none;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  color: var(--primary);
  cursor: pointer;
}

</style>