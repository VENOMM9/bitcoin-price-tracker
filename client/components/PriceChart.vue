<template>
  <div class="price-chart-container">
    <canvas v-if="data && data.length > 0" ref="chartCanvas"></canvas>
    <div v-else>
      No data available for chart.
    </div>
    <div v-for="datas in data" :key="datas._id">
     {{ datas }}
    </div>
  </div>
 
</template>


<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    // this.renderChart(this.chartData, this.chartOptions);
    console.log('chart mounted');
    console.log(this.data);
  },
  computed: {
  chartData() {
    if (this.data && this.data.length > 0) {
      return {
        labels: this.data.map((price, index) => `Day ${index + 1}`),
        datasets: [
          {
            label: 'Price',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: this.data.map(price => price.value),
          },
        ],
      };
    } else {
      // Return null or an empty object, whatever makes sense for your use case
      return null;
    }
  },
  chartOptions() {
    return {
      responsive: true,
      maintainAspectRatio: false,
    };
  },
},

};
</script>

<style scoped>
.price-chart-container {
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
