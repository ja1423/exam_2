<template>
  <nav class="flex justify-between items-center p-4 bg-gray-800 text-white">
    <div class="flex items-center">
      <div class="text-2xl font-bold mr-8">NORNLIGHT</div>
      <div class="space-x-4">
        <a href="#" class="hover:underline">О компании</a>
        <a href="#" class="hover:underline">Доставка и оплата</a>
        <a href="#" class="hover:underline">Возврат</a>
        <a href="#" class="hover:underline">Гарантии</a>
        <a href="#" class="hover:underline">Контакты</a>
        <a href="#" class="hover:underline">Блог</a>
      </div>
    </div>
    <div class="flex items-center space-x-4">
      <input type="text" placeholder="Поиск по товарам" class="px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <div class="flex items-center space-x-4">
        <a href="#" class="hover:underline">Избранное</a>
        <a href="#" class="hover:underline">Сравнение</a>
        <a href="#" class="relative hover:underline">
          Корзина
          <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">1</span>
        </a>
      </div>
      <div class="flex flex-col items-end">
        <a href="tel:88008904656" class="hover:underline">8 (800) 890-46-56</a>
        <a href="#" class="hover:underline">Заказать звонок</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
