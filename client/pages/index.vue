<template>
  <div>
    <div v-if="isLoading">Loading please wait...</div>
    <div>
      <button :class="{ active: selectedPeriod === 'day' }" @click="changePeriod('day')">Day</button>
      <button :class="{ active: selectedPeriod === 'week' }" @click="changePeriod('week')">Week</button>
      <button :class="{ active: selectedPeriod === 'month' }" @click="changePeriod('month')">Month</button>
      <button :class="{ active: selectedPeriod === 'year' }" @click="changePeriod('year')">Year</button>
    </div>
    <Chats :data="prices" v-if="!isLoading && prices.length > 0"></Chats>
  </div>
</template>

<script setup>
import axios from 'axios';
import Chats from '../components/chats.vue';
import { ref, onMounted } from 'vue';

const prices = ref([]);
const isLoading = ref(true);
const selectedPeriod = ref('day'); // default period

onMounted(async () => {
  fetchData();
});

const fetchData = async () => {
  isLoading.value = true;
  try {
    const { data } = await axios.get(`http://localhost:5500/prices?period=${selectedPeriod.value}`);
    console.log('Data fetched successfully:', data);
    prices.value = data;
  } catch (error) {
    console.error('Error fetching data:', error);
    prices.value = [];
  } finally {
    isLoading.value = false;
  }
};

const changePeriod = async (period) => {
  selectedPeriod.value = period;
  fetchData();
};
</script>

<style scoped>
.active {
  background-color: #ccc; /* Add your active style here */
}
</style>
