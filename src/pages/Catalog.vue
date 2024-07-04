<template>
    <div>
<Navbar />
<Catalog />
<Brend />
<Blogs />
<Words />
<Footer />
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';  
import Catalog from '../components/Catalog.vue';
import Brend from '../components/Brend.vue';
import Blogs from '../components/Blogs.vue';
import Words from '../components/Words.vue';  // Assuming Words.vue is a component that displays words from a database or API call.
import Footer from '../components/Footer.vue';

</script>

<style scoped>

</style>