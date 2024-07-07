<template>
<Navbar />
  <div class="container mb-16 py-6">
    <div>
      <div>
        <a href="/home" class="text-[#c7c7c7]"> Главная > </a>
      </div>
      <div>
        <h2 class="text-[50px] text-primary font-bold pt-3">
          Популярные товары
        </h2>
      </div>
    </div>
    <div class="flex justify-between pb-6"></div>

    <div>
      <ProductsCart />
    </div>
  </div>
  <Footer />
</template>

<script setup>
  import Navbar from "../components/Navbar.vue";
import Cart from "../components/ProductCart.vue";
  import Footer from "../components/Footer.vue";
</script>

<style lang="scss" scoped></style>
