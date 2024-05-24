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
    <img src="~assets/images/register-image.jpg" alt="register"/>
    <div class="register-container">
      <CustomForm id="first-form" class="first-form" :title="'Welcome'" :button-title="'Next'" :action="goToNext">
        <template #input-container>
          <div class="input-box">
            <input id="firstName" type="text" placeholder="FIRST NAME" maxlength="50">
            <label for="firstName">&nbsp;</label>
          </div>
          <div class="input-box">
            <input id="lastName" type="text" placeholder="LAST NAME" maxlength="50">
            <label for="lastName">&nbsp;</label>
          </div>
          <div class="input-box">
            <input id="email" type="text" placeholder="EMAIL" maxlength="50">
            <label for="email">&nbsp;</label>
          </div>
        </template>
      </CustomForm>
      <CustomForm id="final-form" class="final-form" :title="'Final step'" :button-title="'Register'">
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
        <template #additional-container>
          <p class="terms">
            By registering, you agree to our Terms & Conditions, Privacy and Cookie Policy.
          </p>
          <div class="term-box-wrapper">
            <div class="term-box">
              <label>
                <input type="checkbox"/>
                <span class="checkbox"></span>
              </label>
            </div>
            <p class="terms">Sign up and never miss out on exclusive member rewards.
              Unsubsrcibe at the bottom of our emails.
            </p>
          </div>
        </template>
        <template #center-bottom-container>
          <span class="previous-page" @click="goToPrevious">GO TO PREVIOUS PAGE</span>
        </template>
      </CustomForm>
    </div>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  width: 100vw;
  height: 100%
}

.final-form,.first-form.non-active {
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

.previous-page {
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
}

.terms {
  font-size: 13px;
}

.term-box-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  column-gap: 16px
}

.term-box *,.term-box ::after,.term-box ::before {
  width: 50px;
  box-sizing: border-box
}

.term-box label {
  display: block;
  width: 18px;
  height: 18px;
  cursor: pointer
}

.term-box input {
  visibility: hidden;
  display: none
}

.term-box input:checked~.checkbox {
  transform: rotate(45deg);
  width: 14px;
  margin-left: 3px;
  border-color: transparent #24c78e #24c78e transparent;
  border-radius: 0
}

.term-box .checkbox {
  display: block;
  width: inherit;
  height: inherit;
  border: 2px solid var(--primary);
  border-radius: 4px;
  transition: all .375s
}

</style>