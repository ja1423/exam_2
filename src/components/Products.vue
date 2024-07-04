<template>
    <div class="container mx-auto">
         <div class="md:justify-between md:flex mt-16 max-md:text-center">
      <h1 class="text-3xl font-extralight">Популярные товары</h1>

      <div
        class="max-md:mt-4 max-md:mx-auto flex items-center py-[8px] cursor-pointer w-56 gap-[10px] hover:gap-4 duration-300 hover:bg-[#454545] hover:text-white rounded-full border border-[#454545]"
      >
        <p class="ml-12 font-medium text-primary">Все товары</p>
        <p class="text-2xl font-medium mb-1 text-primary">&rarr;</p>
      </div>
    </div>

    <div class="grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-5 mt-8">
      <div
        class="w-full h-full duration-300 hover:shadow-lg flex gap-4 flex-col"
        v-for="(item, index) in products"
        :key="index"
      >
        <div class="relative">
          <img :src="item.image" alt="Product Image" />
          <img
            class="z-10 max-md:hidden absolute top-0 right-0 translate-y-3/4 -translate-x-3/4 cursor-pointer text-white"
            @click="toggleLike(item.id)"
            :src="item.liked ? '/heart.svg' : '/heart.svg'"
            alt="Like Button"
          />
        </div>
        <div
          class="md:p-[27px] p-4 pt-[11px] flex flex-col justify-between h-full md:gap-6 gap-3 w-full"
        >
          <p
            class="text-primary font-extralight line-clamp-2 max-md:line-clamp-3 md:leading-[22px] leading-[17px] md:text-xl"
          >
            {{ item.title }}
          </p>
          <div class="div">
            <p class="font-bold text-[#9F9F9F] line-through text-[12px]">
              {{ item.sale }}₽
            </p>
            <div class="flex w-full justify-between items-center">
              <p class="text-primary mt-[6px] font-bold text-xl">
                {{ item.price }}₽
              </p>
              <img
                @click="toggleShopped(item.id)"
                class="py-2 text-white max-md:py-1 p-5 max-md:px-3 cursor-pointer rounded-full w-[23%] max-md:w-[35%]"
                :src="item.shopped ? '/card.svg' : '/card.svg'"
                :class="
                  item.shopped ? 'bg-white border border-[#454545]' : 'bg-[#454545]'
                "
                alt="Cart Button"
              />
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

const products = ref([]);

const toggleLike = (id) => {
  const product = products.value.find((item) => item.id === id);
  if (product) {
    product.liked = !product.liked;
  }
};

const toggleShopped = (id) => {
  const product = products.value.find((item) => item.id === id);
  if (product) {
    product.shopped = !product.shopped;
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://667d5f3b297972455f64d6c6.mockapi.io/products/products`
    );
    products.value = response.data.map((product) => ({
      ...product,
      liked: false,
      shopped: false,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>




<style scoped>

</style>