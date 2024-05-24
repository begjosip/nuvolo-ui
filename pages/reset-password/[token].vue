<script lang="ts" setup>

function goToNext() {
  const firstRegistrationForm = document.getElementById('first-form') as HTMLElement;
  firstRegistrationForm.classList.add('non-active');
  const finalRegistrationForm = document.getElementById('final-form') as HTMLElement;
  finalRegistrationForm.classList.add('active');
}

function goToPrevious() {
  const finalRegistrationForm = document.getElementById('final-form') as HTMLElement;
  finalRegistrationForm.classList.remove('active');
  const firstRegistrationForm = document.getElementById('first-form') as HTMLElement;
  firstRegistrationForm.classList.remove('non-active');
}

</script>

<template>
  <Header/>
  <div class="container">
    <img src="~assets/images/reset-pass-images.jpg" alt="reset_password"/>
    <div class="reset-pass-container">
      <CustomForm :title="'Create new password'" :button-title="'Submit'" :action="goToNext">
        <template #input-container>
          <div class="input-box">
            <input id="password" type="password" placeholder="PASSWORD" maxlength="50">
            <label for="password">&nbsp;</label>
          </div>
          <div class="input-box">
            <input id="confirmPassword" type="password" placeholder="CONFIRM" maxlength="50">
            <label for="confirmPassword">&nbsp;</label>
          </div>
        </template>
        <template #center-bottom-container>
          <span class="cancel" @click="navigateTo('/sign-in')">CANCEL</span>
        </template>
      </CustomForm>
    </div>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  width: 100vw;
  height: 100%;
}

.reset-pass-container {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 180px;
  z-index: 10;
}

img {
  height: 100vh;
  width: 100%;
  object-fit: cover;
  overflow-y: hidden;
}

@media screen and (max-width: 1200px) {
  img {
    display: none;
  }
}

.input-box {
  display: flex;
  flex-direction: column;
}

input {
  height: 55px;
  font-family: Heebo, sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  border: 0;
  border-bottom: 1px solid var(--secondary);
  background: white;
  transition: 0.1s ease-in-out;
  margin: 0;
}

input:focus {
  border: 0;
  outline: 0;
  border-bottom: 1px solid var(--primary);
}

.cancel {
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
}

</style>