<template>
  <div class="container my-16">
    <div class="flex justify-between py-6">
      <h3 class="text-[40px] font-extralight">Избранные товары</h3>
    </div>

    <div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
      >
        <div
          v-for="product in store.likedProducts"
          :key="product.id"
          class="border p-4 text-center relative"
        >
          <img
            :src="product.image"
            alt=""
            class="w-[90%] mx-auto h-[200px] mb-4 mt-2 px-7"
          />
          <div class="product-details">
            <p class="text-lg font-semibold py-2 text-left">
              {{ product.title }}
            </p>
            <div class="absolute top-4 right-4">
              <button @click="store.addProductLiked(product)">
                <box-icon
                  v-if="isLiked(product)"
                  name="heart"
                  type="solid"
                  color="#ff0004"
                ></box-icon>
                <box-icon v-else name="heart"></box-icon>
              </button>
            </div>
            <div class="flex justify-between py-6 items-center">
              <div>
                <p
                  class="text-sm font-bold line-through text-left text-[#9f9f9f]"
                >
                  {{ product.oldPrice }}₽
                </p>
                <p class="text-xl font-bold">{{ product.price }}₽</p>
              </div>
              <button @click="store.addProductBasket(product)">
                <img src="/heart.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { usePiniaStore } from "../store";
import 'boxicons'

const store = usePiniaStore();

const products = ref([]);

const isLiked = (product) => {
  return store.likedProducts.some((p) => p.id === product.id);
};

onMounted(() => {
  axios
    .get("https://6686258383c983911b00f951.mockapi.io/products")
    .then((response) => {
      products.value = response.data;
    })
    .catch((error) => {
      console.error("There was an error fetching the products:", error);
    });
});
</script>

<style lang="scss" scoped></style>