<template>
    <div class="container mx-auto">
            <div class="justify-between flex mt-16">
      <h1 class="text-3xl font-extralight"> Только проверенные бренды</h1>

      <div
        class="flex items-center py-[8px] cursor-pointer w-56 gap-[10px] hover:gap-4 duration-300 hover:bg-[#454545] hover:text-white rounded-full border border-[#454545]"
      >
        <p class="ml-12 font-medium text-primary">Все товары</p>
        <p class="text-2xl font-medium mb-1 text-primary">&rarr;</p>
      </div>
    </div>
       

       <div class="grid grid-cols-4 gap-5 mt-12">
        <div class="border  text-center px-12 hover:shadow-md">
            <img src="/public/tovar.png" alt="">
        </div>
        <div class="border text-center px-12 hover:shadow-md">
            <img src="/public/tovar2.png" alt="">
        </div>
        <div class="border text-center px-12 hover:shadow-md">
            <img src="/public/tovar3.png" alt="">
        </div>
        <div class="border text-center px-12 hover:shadow-md">
            <img src="/public/tovar.png" alt="">
        </div>
       </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>