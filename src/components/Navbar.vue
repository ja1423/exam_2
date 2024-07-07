<template>
  <div class="container mt-4">
    <!-- Desktop Navigation -->
    <div class="hidden md:flex justify-between">
      <div class="flex gap-4">
        <router-link to="/aboutus" class="text-gray-500 hover:text-black">О компании</router-link>
        <router-link to="/delivery" class="text-gray-500 hover:text-black">Доставка и оплата</router-link>
        <router-link to="/vozvrat" class="text-gray-500 hover:text-black">Возврат</router-link>
        <router-link to="/guarantee" class="text-gray-500 hover:text-black">Гарантии</router-link>
        <router-link to="/contact" class="text-gray-500 hover:text-black">Контакты</router-link>
        <router-link to="/blog" class="text-gray-500 hover:text-black">Блог</router-link>
      </div>

      <div class="hidden md:flex gap-4">
        <p>8 (800) 890-46-56</p>
        <button class="text-gray-500 hover:text-black" @click="toggleModal">Заказать звонок</button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isMenuOpen" class="md:hidden bg-white shadow-md p-4">
      <div class="flex flex-col gap-2">
        <router-link to="/aboutus" class="text-gray-500 hover:text-black">О компании</router-link>
        <router-link to="/delivery" class="text-gray-500 hover:text-black">Доставка и оплата</router-link>
        <router-link to="/vozvrat" class="text-gray-500 hover:text-black">Возврат</router-link>
        <router-link to="/guarantee" class="text-gray-500 hover:text-black">Гарантии</router-link>
        <router-link to="/contact" class="text-gray-500 hover:text-black">Контакты</router-link>
        <router-link to="/blog" class="text-gray-500 hover:text-black">Блог</router-link>
        <div class="flex justify-between items-center">
          <p>8 (800) 890-46-56</p>
          <button class="text-gray-500 hover:text-black" @click="toggleModal">Заказать звонок</button>
        </div>
      </div>
    </div>

    <!-- Header -->
    <div class="sticky top-0 left-0 w-full py-3 z-30" :class="isScrolled ? 'backdrop-blur-lg bg-gradient-to-r' : 'bg-white'">
      <div class="container md:mt-4 sticky z-0">
        <div class="flex md:justify-between items-center gap-4">
          <div class="md:hidden flex items-center gap-4">
            <button @click="toggleMenu" class="flex items-center gap-2">
              <svg class="w-6 h-6" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H25M0 8H18M0 15H25" stroke="black" stroke-width="2"/>
              </svg>
            </button>
          </div>
          <div class="flex gap-4 max-md:gap-2 max-md:items-center">
            <img @click="navigateHome" class="md:w-full max-md:w-1/3" src="/public/logo.svg" alt="Logo" />
            <h1 class="md:text-4xl text-2xl text-[#454545]">NORNLIGHT</h1>
          </div>

          <div class="flex max-md:hidden border rounded-full bg-[#454545] items-center px-7 gap-4 py-3 mx-8">
            <svg class="mt-2" width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H25M0 8H18M0 15H25" stroke="white" stroke-width="2"/>
            </svg>
            <router-link to="/catalog" class="text-white">Каталог</router-link>
          </div>

          <div class="flex max-md:hidden gap-4 h-full items-center relative w-full">
            <input type="text" placeholder="Поиск по товарам" class="border-2 border-gray-300 pl-8 pr-10 py-[14px] rounded-full w-full h-full focus:outline-none"/>
            <img class="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-3/4 z-10" src="/public/poisk.svg" alt="Search"/>
          </div>

           <div class="relative">
          <router-link to="/liked">
            <button class="flex flex-col items-center">
              <img src="/heart.svg" alt="" />
              <p>Избранное</p>
            </button>
          </router-link>
          <div
            v-if="store.likedProducts.length > 0"
            class="absolute top-[-9px] right-6 text-center"
          >
            <p
              class="w-[15px] h-[15px] bg-red-600 text-white border rounded-full text-[9px]"
            >
              {{ store.likedProducts.length }}
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center">
          <img src="/icon.svg" alt="" />
          <p>Сравнение</p>
        </div>
        <div class="relative">
          <router-link to="/cart">
            <button class="flex flex-col items-center">
              <img src="/karzina.svg" alt="" />
              <p>Корзина</p>
            </button>
          </router-link>
          <div
            v-if="store.basket.length > 0"
            class="absolute top-[-4px] right-3 text-center"
          >
            <p
              class="w-[15px] h-[15px] bg-red-600 text-white border rounded-full text-[9px]"
            >
              {{ store.basket.length }}
            </p>
          </div>
        </div>
        </div>

        <!-- Mobile Search -->
        <div class="flex gap-4 md:hidden mt-4 w-full h-full items-center relative">
          <input type="text" placeholder="Поиск по товарам" class="border-2 border-gray-300 w-full pl-8 pr-10 py-[14px] rounded-full h-full focus:outline-none"/>
          <img class="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-3/4 z-10" src="/public/poisk.svg" alt="Search"/>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex md:justify-center items-center z-50">
      <div class="bg-white md:p-8 rounded-2xl shadow-lg relative md:px-32 px-12 py-20">
        <button @click="toggleModal" class="absolute top-2 right-2 text-gray-600 hover:text-black px-5 py-4 size-5">&times;</button>
        <h2 class="text-4xl mb-12 font-medium">Заполните, и мы перезвоним</h2>
        <form @submit.prevent="handleSubmit">
          <input type="text" placeholder="ФИО" class="border-2 border-gray-300 w-full p-3 mb-4 rounded-full" required/>
          <input type="text" placeholder="Телефон" class="border-2 border-gray-300 w-full p-3 mb-4 rounded-full" required/>
          <button type="submit" class="w-full bg-black text-white p-3 rounded-full">Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { usePiniaStore } from '../store';

const isMenuOpen = ref(false);
const isModalOpen = ref(false);
const isScrolled = ref(false);

const store = usePiniaStore();
const router = useRouter();

const likedProducts = computed(() => store.likedProducts);
const basket = computed(() => store.basket);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
}

const handleSubmit = () => {
  toggleModal();
  // Add form submission logic here
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
}

const navigateTo = (path) => {
  router.push(`/${path}`);
}

const navigateHome = () => {
  router.push('/');
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Add your scoped styles here */
</style>
