<script lang="ts" setup>

const props = defineProps<{
  title: string,
  buttonTitle: string,
  action: (event: MouseEvent) => void
}>();

const {title, buttonTitle, action} = props;

</script>

<template>
  <div class="container">
    <div class="wrapper">
      <form class="form">
        <span class="form-title">{{ title }}</span>
        <div class="input-container">
          <slot class="input-container" name="input-container"></slot>
        </div>
        <div class="additional-container">
          <slot name="additional-container"></slot>
        </div>
      </form>
      <div class="center-bottom-container">
        <slot name="center-bottom-container"></slot>
      </div>
    </div>
    <button class="action-button" @click.prevent="action">{{ buttonTitle }}</button>
  </div>
</template>

<style scoped lang="css">

.container {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  font-family: Heebo, sans-serif;
}

.wrapper {
  outline: solid 3px var(--primary);
  padding: 2em 2em 0 2em;
  background-color: #FFF;
  color: var(--primary);
}

@media screen and (max-width: 764px) {
  .container {
    max-width: 80%;
  }
  .wrapper {
    padding: 1.5em 1em 0 1em;
  }
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--primary);
}

.form-title {
  font-weight: 400;
  font-size: 18px;
}

.action-button {
  height: 55px;
  width: 100%;
  background-color: var(--primary);
  outline: solid 3px var(--primary);
  border: 0;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
  color: #FFF;
  cursor: pointer;
}
.input-container {
  width: 100%;
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  row-gap: 18px;
}

.additional-container {
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
}

.center-bottom-container {
  padding-top: 1em;
  padding-bottom: 5px;
  text-align: center;
}
</style>