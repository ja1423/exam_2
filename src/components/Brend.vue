<template>
  <div class="container">
    <div class="md:justify-between md:flex max-md:mx-auto max-md:justify-center mt-16">
      <h1 class="text-3xl font-extralight max-md:max-w-[500px] max-md:text-center">Только проверенные бренды</h1>
      <div
        class="flex items-center py-[8px] max-md:mx-auto max-md:mt-4 cursor-pointer w-56 gap-[10px] hover:gap-4 duration-300 hover:bg-[#454545] hover:text-white rounded-full border border-[#454545]"
      >
        <p class="ml-12 font-medium text-primary">Все товары</p>
        <p class="text-2xl font-medium mb-1 text-primary">&rarr;</p>
      </div>
    </div>

    <swiper
      class="carousel-wrapper mt-12"
      :slides-per-view="4"
      :space-between="30"
      :loop="true"
      :autoplay="{ delay: 3000 }"
    >
      <swiper-slide v-for="(brand, index) in brands" :key="index" class="item">
        <img :src="brand.src" :alt="brand.alt">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
// import 'swiper/swiper-bundle.min.css';

const brands = ref([
  { src: '/public/tovar.png', alt: 'Brand 1' },
  { src: '/public/tovar2.png', alt: 'Brand 2' },
  { src: '/public/tovar3.png', alt: 'Brand 3' },
  { src: '/public/tovar.png', alt: 'Brand 4' },
  { src: '/public/tovar2.png', alt: 'Brand 5' },
  { src: '/public/tovar3.png', alt: 'Brand 6' },
  { src: '/public/tovar.png', alt: 'Brand 7' },
  { src: '/public/tovar2.png', alt: 'Brand 8' },
  { src: '/public/tovar3.png', alt: 'Brand 9' },
]);
</script>

<style lang="scss" scoped>
:root {
  --bg-clr: #64748b;
}

.carousel-wrapper {
  width: 100%; /* Full width */
  overflow: hidden;
  position: relative;
}

.item {
  text-align: center;
  padding: 1rem;
}
.item > img {
  width: 100%; /* Ensure the image fills its container */
  height: auto; /* Maintain aspect ratio */
  max-height: 120px; /* Adjust maximum height as needed */
  object-fit: contain; /* Ensure the image scales without cropping */
}
</style>
