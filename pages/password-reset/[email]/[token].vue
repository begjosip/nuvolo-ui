<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})

const route = useRoute();

const resetPasswordData = {
  email: route.params.email,
  password: '',
  confirmPassword: '',
  token: route.params.token
};

const errors = ref({
  password: '',
  confirmPassword: '',
  title: '',
  message: ''
});
const resetPassword = async () => {
  errors.value.title = '';
  errors.value.message = '';
  try {
    await $fetch('/v1/auth/reset-password', {
      method: 'POST',
      baseURL: 'http://localhost:8080/api',
      body: resetPasswordData,
      onRequestError(): Promise<void> | void {
        errors.value.title = 'Oops!'
        errors.value.message = 'Something went wrong. Try again later!';
      },
      onResponseError(context: FetchContext & { error: Error }): Promise<void> | void {
        errors.value.title = context.response._data?.title;
        errors.value.message = context.response._data?.detail;
      }
    });
    navigateTo('/sign-in');
  } catch (error) {
    showOverlay();
  }
};

function showOverlay() {
  const overlay = document.getElementById('error-overlay') as HTMLElement;
  overlay.classList.add('active');
}

function validatePassword() {
  if (resetPasswordData.password.length === 0) {
    errors.value.password = 'Insert password';
    return;
  }
  if (resetPasswordData.password.length > 0 && resetPasswordData.password.length < 8) {
    errors.value.password = 'Password has to be at least 8 characters long';
  }
}

function validateConfirmPassword() {
  if (resetPasswordData.password !== resetPasswordData.confirmPassword) {
    errors.value.confirmPassword = 'Passwords are not matching';
  }
}
</script>

<template>
  <Header/>
  <div class="container">
    <img src="../../../assets/images/reset-pass-images.jpg" alt="reset_password"/>
    <div class="reset-pass-container">
      <CustomForm :title="'Create new password'" :button-title="'Submit'" :action="resetPassword">
        <template #input-container>
          <div class="input-box">
            <input id="password" type="password" v-model="resetPasswordData.password"
                   v-on:blur="validatePassword" v-on:focusin="errors.password = ''"
                   placeholder="PASSWORD" maxlength="50">
            <label for="password">{{ errors.password }}&nbsp;</label>
          </div>
          <div class="input-box">
            <input id="confirmPassword" type="password" v-model="resetPasswordData.confirmPassword"
                   v-on:blur="validateConfirmPassword" v-on:focusin="errors.confirmPassword = ''"
                   placeholder="CONFIRM" maxlength="50">
            <label for="confirmPassword">{{ errors.confirmPassword }}&nbsp;</label>
          </div>
        </template>
        <template #center-bottom-container>
          <span class="cancel" @click="navigateTo('/sign-in')">CANCEL</span>
        </template>
      </CustomForm>
    </div>
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

label {
  font-size: 12px;
  font-weight: 300;
  color: var(--error);
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