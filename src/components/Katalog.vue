<template>
  <div class="container mx-auto">
    <div class="md:justify-between md:flex mt-16">
      <h1 class="text-3xl font-extralight max-md:mx-24">Каталог</h1>

      <div
        class="flex items-center py-[8px] max-md:mx-auto max-md:mt-6  cursor-pointer w-56 gap-[10px] hover:gap-4 duration-300 hover:bg-[#454545] hover:text-white rounded-full border border-[#454545]"
      >
        <router-link to="/catalog" class="ml-12 font-medium text-primary">Весь каталог</router-link>
        <p class="text-2xl font-medium mb-1 text-primary">&rarr;</p>
      </div>
    </div>

    <div class=" grid md:grid-cols-3 gap-16 mt-10">
      <div class="flex justify-between border px-5 w-[450px] bg-[#F2F2F2] rounded-3xl py-5 hover:shadow-lg">
        <div>
          <h1 class="font-extralight text-3xl">Люстры</h1>
          <div class="flex mt-24 gap-3">
            <p>От 540₽</p>
            <svg class="mt-2"
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6.5H19M19 6.5L13.4118 12M19 6.5L13.4118 1"
                stroke="#9F9F9F"
              />
            </svg>
          </div>
        </div>
        <img src="/public/katalog4.png" alt="" />
      </div>
      <div class="flex justify-between border w-[450px]  bg-[#F2F2F2] rounded-3xl py-5 hover:shadow-lg">
        <div>
          <h1 class="font-extralight text-2xl">Светильники</h1>
          <div class="flex mt-24 gap-3">
            <p>От 540₽</p>
            <svg class="mt-2"
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6.5H19M19 6.5L13.4118 12M19 6.5L13.4118 1"
                stroke="#9F9F9F"
              />
            </svg>
          </div>
        </div>
        <img src="/public/katalog.png" alt="" />
      </div>
      <div class="flex justify-between border px-5 w-[450px] bg-[#F2F2F2] rounded-3xl py-5 hover:shadow-lg">
        <div>
          <h1 class="font-extralight text-3xl">Бра</h1>
          <div class="flex mt-24 gap-3">
            <p>От 540₽</p>
            <svg class="mt-2"
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6.5H19M19 6.5L13.4118 12M19 6.5L13.4118 1"
                stroke="#9F9F9F"
              />
            </svg>
          </div>
        </div>
        <img src="/public/katalog3.png" alt="" />
      </div>
      <div class="flex justify-between border px-5 w-[450px] bg-[#F2F2F2] rounded-3xl py-5 hover:shadow-lg">
        <div>
          <h1 class="font-extralight text-3xl">Торшеры</h1>
          <div class="flex mt-24 gap-3">
            <p>От 540₽</p>
            <svg class="mt-2"
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6.5H19M19 6.5L13.4118 12M19 6.5L13.4118 1"
                stroke="#9F9F9F"
              />
            </svg>
          </div>
        </div>
        <img src="/public/katalog6.png" alt="" />
      </div>
       <div class="flex justify-between border px-5 w-[450px] bg-[#F2F2F2] rounded-3xl py-5 hover:shadow-lg">
        <div>
          <h1 class="font-extralight text-3xl">Настольные лампы</h1>
          <div class="flex mt-24 gap-3">
            <p>От 540₽</p>
            <svg class="mt-2"
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6.5H19M19 6.5L13.4118 12M19 6.5L13.4118 1"
                stroke="#9F9F9F"
              />
            </svg>
          </div>
        </div>
        <img src="/public/katalog2.png" alt="" />
      </div>
      <div class="flex justify-between border px-5 w-[450px] bg-[#F2F2F2] rounded-3xl py-5 hover:shadow-lg">
        <div>
          <h1 class="font-extralight text-3xl">Споты</h1>
          <div class="flex mt-24 gap-3">
            <p>От 540₽</p>
            <svg class="mt-2"
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6.5H19M19 6.5L13.4118 12M19 6.5L13.4118 1"
                stroke="#9F9F9F"
              />
            </svg>
          </div>
        </div>
        <img src="/public/katalog5.png" alt="" />
      </div>
     
     
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
