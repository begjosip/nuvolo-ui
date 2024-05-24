<script setup lang="ts">

</script>

<template>
  <Header/>
  <div class="container">
    <div class="forgot-pass-container">
      <CustomForm :title="'Forgot your password?'" :button-title="'Reset Password'">
        <template #input-container>
          <div class="input-box">
            <input id="email" type="text" placeholder="EMAIL" maxlength="50">
            <label for="email">&nbsp;</label>
          </div>
        </template>
        <template #additional-container>
          <p class="info">Enter your email address and we’ll send you a link to reset your password</p>
        </template>
        <template #center-bottom-container>
          <span class="sing-in-link" @click="navigateTo('/sing-in')">BACK TO SIGN IN</span>
        </template>
      </CustomForm>
    </div>
    <img src="~assets/images/forgot-password-image.jpg" alt="forgot_password"/>
  </div>
</template>

<style scoped lang="css">

.container {
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
}

.forgot-pass-container {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 200px;
}

img {
  width: 100%;
  object-fit: cover;
  object-position: top;
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

.info {
  font-size: 13px;
  text-align: center;
}

.sing-in-link {
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
}

</style>