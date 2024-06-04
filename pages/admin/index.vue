<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <Header/>
  <div class="admin-container">
    <div class="panel-container products">
      <div class="shader"></div>
      <a class="link" href="/admin/products">PRODUCTS</a>
    </div>
    <div class="panel-container customers">
      <div class="shader"></div>
      <a class="link" href="/admin/customers">CUSTOMERS</a>
    </div>
    <div class="panel-container orders">
      <div class="shader"></div>
      <a class="link" href="/admin/orders">ORDERS</a>
    </div>
    <div class="panel-container categories">
      <div class="shader"></div>
      <a class="link" href="/admin/categories">CATEGORIES</a>
    </div>
  </div>
</template>

<style scoped lang="css">

.admin-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: 180px;
  min-height: calc(100vh - 180px - 2rem);
  padding: 0 2rem 2rem 2rem;
}

.panel-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-size: cover;
  outline: 1px solid var(--primary);
}

.shader {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
}

.products {
  background-image: url('~/assets/images/folded-clothes.jpg');
  background-position: center;
}

.customers {
  background-image: url('~/assets/images/customers-panel.jpg');
  background-position: center;
}

.orders {
  background-image: url('~/assets/images/orders-panel.jpg');
  background-position: left center;
}

.categories {
  background-image: url('~/assets/images/categories-panel.jpg');
  background-position: center;
}

.link {
  height: 18px;
  text-decoration: underline;
  font-family: Heebo, sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: var(--primary);
  z-index: 10;
  cursor: pointer;
}

@media screen and (max-width: 1200px) {
  .admin-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 764px) {
  .admin-container {
    grid-template-columns: 1fr;
  }
}


</style>