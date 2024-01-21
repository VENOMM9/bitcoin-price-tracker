<template>
  <div>

    <div v-if="isLoading">Loading please wait...</div>
    <Chats :data="prices" v-if="!isLoading && prices.length > 0"></Chats>
  </div>
</template>

<script setup>
import axios from 'axios';

import Chats from "../components/Chats.vue"
import { ref, onMounted } from 'vue';

const prices = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  try {
    const { data } = await axios.get(`http://localhost:5500/prices`);
    console.log('Data fetched successfully:', data);
    prices.value = data;
    isLoading.value = false;
  } catch (error) {
    console.error('Error fetching data:', error);
    prices.value = [];
    isLoading.value = false;
  }
});

</script>
