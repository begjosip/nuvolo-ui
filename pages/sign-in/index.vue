<script lang="ts" setup>

</script>

<template>
  <Header/>
  <div class="container">
    <div class="sign-in-container">
      <CustomForm :title="'Welcome'" :button-title="'Sign In'">
        <template #input-container>
          <div class="input-box">
            <input id="email" type="text" placeholder="EMAIL" maxlength="50">
            <label for="email">&nbsp;</label>
          </div>
          <div class="input-box">
            <input id="password" type="password" placeholder="PASSWORD" maxlength="50">
            <label for="password">&nbsp;</label>
          </div>
        </template>
        <template #additional-container>
          <span class="forgot-pass" @click="navigateTo('/forgot-password')">Forgot your password?</span>
        </template>
        <template #center-bottom-container>
          <span class="register-link" @click="navigateTo('/register')">NEW TO NUVOLO? REGISTER</span>
        </template>
      </CustomForm>
    </div>
    <img src="~assets/images/sign-in-image.jpg" alt="sign_in"/>
  </div>
</template>

<style lang="css" scoped>
.container {
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
}

.sign-in-container {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 200px;
}

img {
  width: 100%;
  object-fit: cover;
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
  background: #FFF;
  transition: 0.1s ease-in-out;
  margin: 0;
}

input:focus {
  border: 0;
  outline: 0;
  border-bottom: 1px solid var(--primary);
}

.forgot-pass {
  text-align: center
}

.forgot-pass,.register-link {
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer
}
</style>