<template>
  <div class="container my-16">
    <div class="flex justify-between py-6">
      <h3 class="lg:text-[40px] text-[24px] font-extralight">
        Популярные товары
      </h3>
      <router-link to="/products" class="max-sm:hidden border rounded-full py-3 px-14">
        Все товары
      </router-link>
    </div>

    <div>
      <ProductCart />
    </div>
  </div>
</template>

<script setup>
import ProductCart from "./ProductCart.vue";
</script>

<style lang="scss" scoped></style>
