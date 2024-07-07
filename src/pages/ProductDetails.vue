<template>
<Navbar />
  <div class="container mt-5">
    <a href="/home" class="text-[#c7c7c7]"> Главная ></a>
  </div>
  <div v-if="product" class="container mt-10">
    <div class="flex gap-10">
      <div class="w-1/2">
        <img
          :src="product.image"
          class="w-[550px] h-[500px]"
          alt="Product Image"
        />
      </div>
      <div class="w-1/2">
        <h3 class="text-[40px] text-primary font-medium">
          {{ product.title }}
        </h3>
        <div class="py-8">
          <h3 class="text-[#B3B3B3] text-sm">Scott</h3>
          <div>
            <h3 class="text-[#B3B3B3] text-sm">Артикул : 7655-188</h3>
          </div>
          <h3 class="text-[#4D932C]">В наличии</h3>
        </div>

        <div class="flex items-center gap-4">
          <h3 class="text-[40px] font-semibold">{{ product.price }}₽</h3>
          <h3 class="text-[18px] text-[#B3B3B3] line-through">
            {{ product.oldPrice }}₽
          </h3>
        </div>
        <p class="text-primary py-6">{{ product.description }}</p>
        <div class="flex items-center gap-4 mt-3">
          <div
            class="flex items-center justify-between border rounded-md w-[123px] h-[52px] py-3 px-3"
          >
            <button class="text-2xl py-2 px-3" @click="decrementProduct">
              -
            </button>
            <p>{{ countProduct }}</p>
            <button class="text-xl py-2 px-3" @click="incrementProduct">
              +
            </button>
          </div>
          <button
            @click="addToBasket(product, countProduct)"
            class="bg-primary py-3 px-8 border rounded-lg text-white"
          >
            В корзину
          </button>
          <button class="ml-2" @click="store.addProductLiked(product)">
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
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
  <Footer />
</template>

<script setup>
import Navbar from "../components/Navbar.vue"
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { usePiniaStore } from "../store";
import "boxicons";

const store = usePiniaStore();

const route = useRoute();
const product = ref(null);
const countProduct = ref(1);

const incrementProduct = () => {
  countProduct.value++;
};
const decrementProduct = () => {
  if (countProduct.value > 1) countProduct.value--;
};

const isLiked = (product) => {
  return store.likedProducts.some((p) => p.id === product.id);
};

const fetchProduct = async (id) => {
  try {
    const response = await axios.get(
      `https://6686258383c983911b00f951.mockapi.io/products/${id}`
    );
    product.value = response.data;
    console.log("Product data:", product.value);
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

onMounted(() => {
  const productId = route.params.id;
  if (productId) {
    fetchProduct(productId);
  }
});

const addToBasket = (product, quantity) => {
  store.addProductBasket(product, quantity);
};
import Footer from "../components/Footer.vue"
</script>

<style lang="scss" scoped></style>
