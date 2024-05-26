<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})

const email = {
  email: ''
};

const errors = ref({
  email: '',
  title: '',
  message: '',
});

const requestPasswordReset = async () => {
  errors.value.title = '';
  errors.value.message = '';
  try {
    await $fetch('/v1/auth/request-password-reset', {
      baseURL: 'http://localhost:8080/api',
      method: 'POST',
      body: email,
      onRequestError(): Promise<void> | void {
        errors.value.title = 'Oops!'
        errors.value.message = 'Something went wrong. Try again later!';
      },
      onResponseError(context: FetchContext & { error: Error }): Promise<void> | void {
        errors.value.title = context.response._data?.title;
        errors.value.message = context.response._data?.detail;
      }
    });
    navigateTo('/')
  } catch (error) {
    showOverlay();
  }
};

function validateEmailAddress() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.email || !emailRegex.test(email.email)) {
    errors.value.email = 'Insert valid email';
    return false;
  }
  return true;
}

function showOverlay() {
  const overlay = document.getElementById('error-overlay') as HTMLElement;
  overlay.classList.add('active');
}

</script>

<template>
  <Header/>
  <div class="container">
    <div class="forgot-pass-container">
      <CustomForm :title="'Forgot your password?'" :button-title="'Reset Password'" :action="requestPasswordReset">
        <template #input-container>
          <div class="input-box">
            <input v-model="email.email" v-on:blur="validateEmailAddress" v-on:focusin="errors.email = ''" id="email" type="text" placeholder="EMAIL" maxlength="50">
            <label for="email">{{ errors.email }}&nbsp;</label>
          </div>
        </template>
        <template #additional-container>
          <p class="info">Enter your email address and we’ll send you a link to reset your password</p>
        </template>
        <template #center-bottom-container>
          <span class="sing-in-link" @click="navigateTo('/sign-in')">BACK TO SIGN IN</span>
        </template>
      </CustomForm>
    </div>
    <img src="~assets/images/forgot-password-image.jpg" alt="forgot_password"/>
  </div>
  <ErrorNotification :title="errors.title" :message="errors.message">
    <template #error-template>
      <span class="title">{{ errors.title }}&nbsp;</span>
      <p class="error-message">{{ errors.message }}&nbsp;</p>
    </template>
  </ErrorNotification>
</template>

<style lang="css" scoped>

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

label {
  font-size: 12px;
  font-weight: 300;
  color: var(--error);
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

.title {
  font-weight: 400;
  font-size: 18px;
}

.error-message {
  font-size: 16px;
  font-weight: 300;
}

</style>