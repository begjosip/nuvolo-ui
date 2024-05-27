<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})


import {useAuthStore} from "~/store/auth";
const {setAuthenticated} = useAuthStore();

const signInData = {
  email: '',
  password: ''
};
const errors = ref({
  email: '',
  password: '',
  title: '',
  message: '',
});

const signIn = async () => {
  errors.value.email = '';
  errors.value.password = '';
  try {
    await $fetch('/v1/auth/sign-in', {
      method: 'POST',
      baseURL: 'http://localhost:8080/api',
      body: signInData,
      onResponse(context) {
        if (context.response?.status === 200) {
          setAuthenticated(context.response._data?.token, context.response._data?.isAdmin);
          if (context.response._data?.isAdmin === true) {
            navigateTo('/admin');
            return;
          }
          navigateTo('/shop');
        }
      },
      onRequestError(context: FetchContext & { error: Error }): Promise<void> | void {
        errors.value.title = 'Oops!'
        errors.value.message = 'Something went wrong. Try again later!';
      },
      onResponseError(context: FetchContext & { error: Error }): Promise<any> | any {
        if (context.response?.status === 401) {
          errors.value.message = 'Check your email or password!';
        } else {
          errors.value.message = context.response._data?.detail;
        }
        errors.value.title = context.response._data?.title;
      }
    });
  } catch (error) {
    showOverlay();
  }
};

function showOverlay() {
  const overlay = document.getElementById('error-overlay') as HTMLElement;
  overlay.classList.add('active');
}
</script>

<template>
  <Header/>
  <div class="container">
    <div class="sign-in-container">
      <CustomForm :title="'Welcome'" :button-title="'Sign In'" :action="signIn">
        <template #input-container>
          <div class="input-box">
            <input id="email" v-model="signInData.email" type="text" placeholder="EMAIL" maxlength="50">
            <label class="warn-label" for="email">{{ errors.email }}&nbsp;</label>
          </div>
          <div class="input-box">
            <input id="password" v-model="signInData.password" type="password" placeholder="PASSWORD" maxlength="50">
            <label class="warn-label" for="password">&nbsp;{{ errors.password }}</label>
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

.warn-label {
  color: var(--error);
  font-size: 12px;
  font-weight: 300;
}

.forgot-pass {
  text-align: center
}

.forgot-pass, .register-link {
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer
}
</style>