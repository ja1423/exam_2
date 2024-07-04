<template>
  <div class="md:w-full md:flex justify-center">
    <div class="bg-[#F2F2F2] mx-[5%] mt-8 rounded-3xl  ">
      <div class="container ">
        <swiper
          spaceBetween="30"
          :centeredSlides="true"
          :pagination="true"
          :loop="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :modules="modules"
          class="mySwiper"
        >
          
          <swiper-slide v-for="(item, index) in 8" :key="index">
            <div class="md:flex flex max-md:flex-col-reverse gap-24 mb-14 px-12">
              <h1 class="md:text-[64px] text-[40px] mt-[64px] px-4 font-bold md:leading-[75px]">
                Скидка 15% на все подвесные светильники
                <span
                  class="bg-[#454545] inline-block rounded-full text-white px-12 md:px-20 mt-10"
                  >до 5 февраля</span
                >
              </h1>
              <img src="/public/intro.png" class="md:w-[35%] md:mr-[66px]" alt="Candle" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/navigation";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Import Swiper pagination module

const modules = [Autoplay, Pagination, Navigation];
</script>
<style scoped>

/* Swiper styles */
.swiper {

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
}
.swiper:active {
  cursor: grabbing;
}

/* Swiper slide styles */
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-pagination {
  position: absolute;
  right: 20px; /* Adjust as needed */
  bottom: 20px; /* Adjust as needed */
}

</style>