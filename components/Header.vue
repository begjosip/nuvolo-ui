<script setup lang="ts">
function toggleMenu() {
  const dropdownMenu = document.getElementById('dropdown-menu') as HTMLElement;
  const hamIcon = document.getElementById('ham') as HTMLElement;
  const header = document.getElementById('header') as HTMLElement;
  hamIcon.classList.toggle('active');
  dropdownMenu.classList.toggle('show');
  header.classList.toggle('menu-opened')
}
</script>

<template>
  <header id="header">
    <div class="logo-container">
      <NuxtImg id="logo" class="logo" src="logo_nuvolo.svg"/>
    </div>
    <ul>
      <li>Womenswear</li>
      <li>Menswear</li>
      <li>Kidswear</li>
    </ul>
    <div class="header-icon-container">
      <img class="icon-lg-screen" src="~/assets/icons/user-icon.svg" alt="user_icon"/>
      <img class="icon-lg-screen" src="~/assets/icons/wishlist-icon.svg" alt="wishlist_icon"/>
      <img src="~/assets/icons/cart-icon.svg" alt="cart_icon"/>
      <!--  Hamburger menu element -->
      <svg @click="toggleMenu" id="ham" class="ham hamRotate" viewBox="0 0 100 100" width="50">
        <path
            class="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"/>
        <path
            class="line middle"
            d="m 70,50 h -40"/>
        <path
            class="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"/>
      </svg>
    </div>
    <div class="dropdown-menu" id="dropdown-menu">
      <span>JOIN OUR NEWSLETTER</span>
      <span>Womenswear</span>
      <span>Menswear</span>
      <span>Kidswear</span>
      <span>Wishlist</span>
      <span>Login</span>
    </div>
  </header>
</template>

<style lang="css" scoped>
header {
  width: 100%;
  min-height: 82px;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  z-index: 10;
}

#header.menu-opened {
  position: fixed;
  .logo {
    /**
    This will change logo fill color to white
     */
    filter: invert(88%) sepia(88%) saturate(1%) hue-rotate(266deg) brightness(109%) contrast(97%);
  }
}

.dropdown-menu {
  visibility: hidden;
  display: flex;
  width: 100%;
  max-height: 100%;
  position: fixed;
  flex-direction: column;
  justify-content: end;
  font-family: Heebo, sans-serif;
  font-weight: 100;
  font-size: 18px;
  color: #FFFFFF;
  background-color: var(--primary);
  opacity: 0;
  height: 0;
  transition: all 0.5s ease;
  span:first-of-type {
    font-weight: 700;
  }
  span {
    opacity: 0;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    transition: all 0.8s ease;
  }
}

.dropdown-menu.show {
  span {
    opacity: 1;
  }
  height: 100%;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
}

@media screen and (min-width: 1366px) {
  .logo {
    /**
    This will change logo fill color to white
     */
    filter: invert(88%) sepia(88%) saturate(1%) hue-rotate(266deg) brightness(109%) contrast(97%);
  }

  .header-icon-container {
    padding-right: 32px;
  }
}

.logo-container {
  display: flex;
  align-items: center;

  .logo {
    padding-left: 32px;
    max-height: 32px;
    z-index: 20;
    cursor: pointer;
  }
}

ul {
  display: flex;
  align-items: center;
  font-family: Heebo, sans-serif;
  font-size: 18px;
  color: var(--primary);
  list-style: none;
  padding: 0;

  li {
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
}

@media screen and (max-width: 1366px) {
  ul {
    display: none;
  }

  header {
    grid-template-columns: 1fr 1fr;
  }

  .icon-lg-screen {
    display: none;
  }
}

.header-icon-container {
  display: flex;
  align-items: center;
  justify-content: end;

  img {
    max-height: 25px;
    width: 20px;
    padding-inline: 12px;
    cursor: pointer;
  }
}

@media screen and (min-width: 1366px) {
  .ham {
    display: none;
  }
}

.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 50;
}

/**
.active is used due to class list toggle on click inside svg element
 Element will change color also
 */
.hamRotate.active {
  transform: rotate(45deg);
  filter: invert(88%) sepia(88%) saturate(1%) hue-rotate(266deg) brightness(109%) contrast(97%);
}


.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: var(--primary);
  stroke-width: 5.5;
  stroke-linecap: round;
}

.ham .top {
  stroke-dasharray: 40 121;
}

.ham .bottom {
  stroke-dasharray: 40 121;
}

.ham.active .top {
  stroke-dashoffset: -68px;
}

.ham.active .bottom {
  stroke-dashoffset: -68px;
}

</style>