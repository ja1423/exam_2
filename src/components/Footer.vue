<template>
  <div class="bg-second py-[79px] max-md:py-10">
    <div class="container mt-12">
      <div class="flex max-md:flex-col max-md:gap-5 w-full justify-between">
        <div class="flex flex-col md:w-1/4 gap-[35px]">
          <img src="/public/logo1.png" @click="router.push('/')" class="w-3/4 max-md:w-1/2 cursor-pointer" alt="logo" />
          <p class="text-primary text-2xl font-semibold">8 (800) 890-46-56</p>
          <img src="/public/card.png" class="w-3/4 max-md:w-1/2 cursor-pointer" alt="card" />
          <p class="font-semibold underline opacity-50 cursor-pointer">
            Политика конфидециальности
          </p>
          <p class="font-semibold underline opacity-50 cursor-pointer">
            Политика конфидециальности
          </p>
          <div class="flex gap-3">
            <button class="h-9 w-9 rounded-full border-2 border-primary text-primary font-semibold">VK</button>
            <button class="h-9 w-9 rounded-full border-2 border-primary text-primary font-semibold">VK</button>
            <button class="h-9 w-9 rounded-full border-2 border-primary text-primary font-semibold">VK</button>
          </div>
        </div>
        <div class="gap-4">
          <h4 class="mb-6">Покупателям</h4>
             <router-link  to="/aboutus" class="cursor-pointer text-gray-500 hover:text-black ">О компании</router-link><br />
          
         <router-link  to="/delivery" class="cursor-pointer text-gray-500 hover:text-black mt-3 block">
          Доставка и оплата
         </router-link>
          <p class="cursor-pointer hover:underline mb-[27px] opacity-50 mt-4">Возврат</p>
          <p class="cursor-pointer hover:underline mb-[27px] opacity-50">Гарантии</p>
           <router-link to="/contact" class="cursor-pointer text-gray-500 hover:text-black mt-3  mb-3 block">Контакты</router-link>
          <p class="cursor-pointer hover:underline mb-[27px] opacity-50 block">Блог</p>
        </div>
        <div class="text-]">
          <h4 class="mb-8">Товары</h4>
          <p class="cursor-pointer hover:underline mb-[27px] opacity-50">Люстры</p>
          <p class="cursor-pointer hover:underline mb-[27px] opacity-50">Светильники</p>
          <p class="cursor-pointer hover:underline mb-[27px] opacity-50">Бра</p>
          <p class="cursor-pointer hover:underline mb-[27px] opacity-50">Торшеры</p>
          <p class="cursor-pointer hover:underline mb-[27px] opacity-50">Комплектуюшие</p>
          <p class="cursor-pointer hover:underline mb-[27px] opacity-50">Настольные лампы</p>
        </div>
        <div class="text-]">
          <h4 class="text-transparent mb-8">Товары</h4>
          <p class="cursor-pointer hover:underline mb-[27px] opacity-50">Споты</p>
          <p class="cursor-pointer hover:underline mb-[27px] opacity-50">Трековые светильники</p>
          <p class="cursor-pointer hover:underline mb-[27px] opacity-50">Уличные светильники</p>
          <p class="cursor-pointer hover:underline mb-[27px] opacity-50">Технические светильники</p>
          <p class="cursor-pointer hover:underline mb-[27px] opacity-50">Светодиодные ленты</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
