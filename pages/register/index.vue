<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})

const registerData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const errors = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  title: '',
  message: ''
});

const register = async () => {
  errors.value.title = '';
  errors.value.message = '';
  if (registerData.password.length < 8) {
    errors.value.password = 'Password needs to be at least 8 characters long';
    return;
  }
  if (registerData.password !== registerData.confirmPassword) {
    errors.value.confirmPassword = 'Passwords are not matching';
    return;
  }
  try {
    await $fetch('/v1/auth/register', {
      baseURL: 'http://localhost:8080/api',
      method: 'POST',
      body: registerData,
      onRequestError(): Promise<void> | void {
        errors.value.title = 'Oops!'
        errors.value.message = 'Something went wrong. Try again later!';
      },
      onResponseError(context: FetchContext & { error: Error }): Promise<void> | void {
        errors.value.title = context.response._data?.title;
        errors.value.message = context.response._data?.detail;
      }
    });
    navigateTo('/sign-in')
  } catch (error) {
    showOverlay();
  }
}

function showOverlay() {
  const overlay = document.getElementById('error-overlay') as HTMLElement;
  overlay.classList.add('active');
}

function goToNext() {
  if (validateFirstName() && validateLastName() && validateEmailAddress()) {
    const firstRegistrationForm = document.getElementById('first-form') as HTMLElement;
    firstRegistrationForm.classList.add('non-active');
    const finalRegistrationForm = document.getElementById('final-form') as HTMLElement;
    finalRegistrationForm.classList.add('active');
  }
}

function goToPrevious() {
  const finalRegistrationForm = document.getElementById('final-form') as HTMLElement;
  finalRegistrationForm.classList.remove('active');
  const firstRegistrationForm = document.getElementById('first-form') as HTMLElement;
  firstRegistrationForm.classList.remove('non-active');
}

function validateFirstName() {
  if (registerData.firstName.length === 0) {
    errors.value.firstName = 'Insert first name';
    return false;
  }
  return true;
}

function validateLastName() {
  if (registerData.lastName.length === 0) {
    errors.value.lastName = 'Insert last name';
    return false;
  }
  return true;
}

function validateEmailAddress() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!registerData.email || !emailRegex.test(registerData.email)) {
    errors.value.email = 'Insert valid email';
    return false;
  }
  return true;
}

function validatePassword() {
  if (registerData.password.length === 0) {
    errors.value.password = 'Insert password';
    return;
  }
  if (registerData.password.length > 0 && registerData.password.length < 8) {
    errors.value.password = 'Password has to be at least 8 characters long';
  }
}

function validateConfirmPassword() {
  if (registerData.password !== registerData.confirmPassword) {
    errors.value.confirmPassword = 'Passwords are not matching';
  }
}


</script>

<template>
  <Header/>
  <div class="container">
    <img src="~assets/images/register-image.jpg" alt="register"/>
    <div class="register-container">
      <CustomForm id="first-form" class="first-form" :title="'Welcome'" :button-title="'Next'" :action="goToNext">
        <template #input-container>
          <div class="input-box">
            <input id="firstName" type="text" v-model="registerData.firstName"
                   v-on:blur="validateFirstName"
                   v-on:focusin="errors.firstName = ''"
                   placeholder="FIRST NAME" maxlength="50">
            <label class="warning" for="firstName">{{ errors.firstName }}&nbsp;</label>
          </div>
          <div class="input-box">
            <input id="lastName" type="text" v-model="registerData.lastName"
                   v-on:blur="validateLastName"
                   v-on:focusin="errors.lastName = ''"
                   placeholder="LAST NAME" maxlength="50">
            <label class="warning" for="lastName">{{ errors.lastName }}&nbsp;</label>
          </div>
          <div class="input-box">
            <input id="email" type="text" v-model="registerData.email"
                   v-on:blur="validateEmailAddress"
                   v-on:focusin="errors.email = ''" placeholder="EMAIL" maxlength="50">
            <label class="warning" for="email">{{ errors.email }}&nbsp;</label>
          </div>
        </template>
      </CustomForm>
      <CustomForm id="final-form" class="final-form" :title="'Final step'" :button-title="'Register'"
                  :action="register">
        <template #input-container>
          <div class="input-box">
            <input id="password" type="password" v-model="registerData.password"
                   v-on:blur="validatePassword"
                   v-on:focusin="errors.password = ''" placeholder="PASSWORD" maxlength="50">
            <label class="warning" for="password">{{ errors.password }}&nbsp;</label>
          </div>
          <div class="input-box">
            <input id="confirmPassword" type="password" v-model="registerData.confirmPassword"
                   v-on:blur="validateConfirmPassword" v-on:focusin="errors.confirmPassword = ''" placeholder="CONFIRM"
                   maxlength="50">
            <label class="warning" for="confirmPassword">{{ errors.confirmPassword }}&nbsp;</label>
          </div>
        </template>
        <template #additional-container>
          <p class="terms">
            By registering, you agree to our Terms & Conditions, Privacy and Cookie Policy.
          </p>
        </template>
        <template #center-bottom-container>
          <span class="previous-page" @click="goToPrevious">GO TO PREVIOUS PAGE</span>
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
  height: 100%
}

.final-form, .first-form.non-active {
  display: none
}

.final-form.active {
  display: block
}

.register-container {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 180px;
  z-index: 10
}


img {
  height: 100vh;
  width: 100%;
  object-fit: cover;
  overflow-y: hidden;
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

.warning {
  color: var(--error);
  font-size: 12px;
  font-weight: 300;
}

.previous-page {
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
}

.terms {
  font-size: 13px;
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