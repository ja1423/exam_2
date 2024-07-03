<template>
  <div class="container mx-auto">
    
    <div class="hidden md:flex justify-between">
      <div class="flex gap-4">
        <button class="text-gray-500 hover:text-black ">О компании</button>
        <button class="text-gray-500 hover:text-black">Доставка и оплата</button>
        <button class="text-gray-500 hover:text-black">Возврат</button>
        <button class="text-gray-500 hover:text-black">Гарантии</button>
        <button class="text-gray-500 hover:text-black">Контакты</button>
        <button class="text-gray-500 hover:text-black">Блог</button>
      </div>

      <div class="hidden md:flex gap-4">
        <p>8 (800) 890-46-56</p>
        <button class="text-gray-500 hover:text-black">Заказать звонок</button>
      </div>

      <div class="md:hidden flex items-center gap-4">
        <button @click="toggleMenu" class="flex items-center gap-2">
          <svg class="w-6 h-6 bg-black" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H25M0 8H18M0 15H25" stroke="black" stroke-width="2" />
          </svg>
        </button>
      </div>
    </div>
     <div v-if="isMenuOpen" class="md:hidden bg-white shadow-md p-4">
      <div class="flex flex-col gap-2">
        <button class="text-gray-500 hover:text-black">О компании</button>
        <button class="text-gray-500 hover:text-black">Доставка и оплата</button>
        <button class="text-gray-500 hover:text-black">Возврат</button>
        <button class="text-gray-500 hover:text-black">Гарантии</button>
        <button class="text-gray-500 hover:text-black">Контакты</button>
        <button class="text-gray-500 hover:text-black">Блог</button>
        <div class="flex justify-between items-center">
          <p>8 (800) 890-46-56</p>
          <button class="text-gray-500 hover:text-black">Заказать звонок</button>
        </div>
      </div>
    




    </div>
    <div class="container mx-auto pt-4">
      <div class="flex justify-between">
   <div class="flex gap-4">
    <img class="" src="/public/logo.png" alt="">
    <h1 class=" text-4xl text-[#454545]">NORNLIGHT
    </h1>
   </div>
  
<div class="flex border rounded-full bg-[#454545] px-7 gap-4 py-3">
  <svg class="mt-2" width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 1H25M0 8H18M0 15H25" stroke="white" stroke-width="2"/>
</svg>
<p class="text-white">Каталог</p>

</div>

            <div class="flex gap-4 items-center relative  ">
      <input type="text" placeholder="Поиск по товарам" class="border-2 border-gray-300  px-28 py-2 rounded-full focus:outline-none" />
      <img class="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-3/4 z-10" src="/public/poisk.svg" alt="">
    </div>


<div class="hidden md:flex gap-6">
    <div >
<img class="mx-auto hover" src="/public/heart.svg" alt="">
<p>Избранное</p>
    </div>
    <div>
<img class="mx-auto"  src="/public/icon.svg" alt="">
<p>Сравнение</p>
    </div>
    <div>
<img class="mx-auto"  src="/public/karzina.svg" alt="">
<p>Корзина</p>
    </div>
    </div>
    </div>
     </div>
  </div>
  

</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
  
</script>

<style scoped>

</style>