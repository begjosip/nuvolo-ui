<script lang="ts" setup>
function toggleHamMenu() {
  const hamMenuIcon = document.getElementById('hamburger-menu') as HTMLElement;
  hamMenuIcon.classList.toggle('open');
  const mobileNav = document.getElementById('menu-navigator') as HTMLElement;
  mobileNav.classList.toggle('open');
}
</script>

<template>
  <header>
    <div class="logo-category-container">
      <img @click="navigateTo('/')" class="logo" src="~public/logo_nuvolo.svg" alt="nuvolo"/>
      <nav class="category-nav">
        <a class="link" href="/womenswear">WOMEN</a>
        <a class="link" href="/menswear">MEN</a>
        <a class="link" href="/kidswear">KIDS</a>
      </nav>
    </div>
    <div class="menu-container">
      <nav id="menu-navigator" class="menu-navigator">
        <input class="search-bar" type="text" placeholder="SEARCH" maxlength="35">
        <a class="link" href="/sign-in">SIGN IN</a>
        <a class="link" href="/wishlist">WISHLIST</a>
        <a class="link" href="/cart">CART(0)</a>
      </nav>
      <a class="link menu-cart" href="/cart">CART(0)</a>
      <!-- Burger menu icon -->
      <div id="hamburger-menu" @click="toggleHamMenu" class="hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<style lang="css" scoped>

header {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  min-height: 140px;
  z-index: 100;
}

.logo-category-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px 0 0 24px;
}

.logo {
  max-width: 550px;
  cursor: pointer;
}

.category-nav {
  width: 60%;
  display: flex;
  padding-top: 12px;
  column-gap: 32px;
}

.menu-container {
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 24px 12px 0 0;
  column-gap: 12px;
}

.menu-navigator {
  display: flex;
  column-gap: 32px;
}

.search-bar {
  height: 32px;
  width: 350px;
  padding: 4px 12px 4px 12px;
  margin-top: 4px;
  font-family: Heebo, sans-serif;
  font-weight: 300;
  font-size: 16px;
  text-decoration: none;
  letter-spacing: 1px;
  outline: 1px solid #000;
  border: 0;
}

@media screen and (max-width: 1150px) {
  .search-bar {
    display: none;
  }
}

.link {
  text-decoration: none;
  font-family: Heebo, sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: var(--primary);
  cursor: pointer;
}

.menu-cart {
  display: none;
}

@media screen and (max-width: 764px) {
  .menu-navigator {
    visibility: hidden;
    height: 0;
    width: 0;
    transition: width 0.5s ease-in-out;
  }

  .menu-navigator * {
    opacity: 0;
  }

  .menu-navigator.open {
    visibility: visible;
    position: fixed;
    padding-top: 100px;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    row-gap: 24px;
    background-color: #FFF;
  }

  .menu-navigator.open .search-bar,
  .menu-navigator.open .link {
    opacity: 1;
    width: 80%;
    display: block;
    text-align: start;
    font-size: 18px;
    transition: opacity 0.5s ease-in-out;
  }

  .menu-cart {
    display: block;
  }

  .link {
    font-size: 13px;
  }

  .logo {
    width: 80%;
    min-width: 200px;
  }
}
</style>