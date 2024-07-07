<template>
  <div
    class="grid grid-cols-1 max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
  >
    <div
      v-for="product in products"
      :key="product.id"
      class="border p-4 text-center relative"
    >
      <router-link
        :to="{ name: 'product-details', params: { id: product.id } }"
        class="block"
      >
        <img
          :src="product.image"
          alt=""
          class="lg:w-[90%] w-full mx-auto lg:h-[200px] h-[120px] mb-4 mt-2 px-7"
        />
      </router-link>
      <div class="product-details">
        <p class="text-lg font-semibold py-2 text-left">{{ product.title }}</p>
        <div class="absolute top-4 right-4">
          <div @click.stop>
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
        </div>
        <div class="flex justify-between lg:py-6 py-2 items-center">
          <div>
            <p class="lg:text-sm font-bold line-through text-left text-[#9f9f9f]">
              {{ product.oldPrice }}₽
            </p>
            <p class="lg:text-xl text-[18px] font-bold">{{ product.price }}₽</p>
          </div>
          <button @click="store.addProductBasket(product)">
            <img src="/karzina.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { usePiniaStore } from "../store";

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
