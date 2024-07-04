<template>
  <div class="flex h-screen">
    <aside class="bg-gray-800 text-white w-64 flex flex-col justify-between p-4">
      <div>
        <h1 class="text-xl font-bold flex items-center mb-8">
          <span class="text-2xl mr-2">&larr;</span>
          Admin Dashboard
        </h1>
        <ul>
          <li class="mb-4 cursor-pointer flex items-center" @click="navigate('/admin/create-product')">
            <img :src="icon1" alt="Icon1" class="w-6 h-6 mr-2" />
            Create product
          </li>
          <li class="mb-4 cursor-pointer flex items-center" @click="navigate('/admin/manage-product')">
            <img :src="icon2" alt="Icon2" class="w-6 h-6 mr-2" />
            Manage product
          </li>
          <li class="mb-4 cursor-pointer flex items-center" @click="navigate('/admin/create-category')">
            <img :src="icon1" alt="Icon1" class="w-6 h-6 mr-2" />
            Create category
          </li>
          <li class="mb-4 cursor-pointer flex items-center" @click="navigate('/admin/manage-category')">
            <img :src="icon2" alt="Icon2" class="w-6 h-6 mr-2" />
            Manage category
          </li>
        </ul>
      </div>
      <button class="flex items-center p-2 bg-red-500 rounded hover:bg-red-700" @click="logout">
        <span class="text-xl mr-2">&rarr;</span>
        Log out
      </button>
    </aside>
    <main class="flex-grow p-8">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import icon1 from '@/assets/admin__icon1.png';
import icon2 from '@/assets/admin__icon2.png';

const router = useRouter();
const store = useStore();

const navigate = (path) => {
  router.push(path);
};

const logout = () => {
  store.dispatch('auth/logout');
  router.push('/login');
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
