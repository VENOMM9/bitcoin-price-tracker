<template>
  <div class="main">
    <canvas ref="lineChart" :style="{ height: '40rem', width: '100%' }"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  props: {
    data: Array,
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.createChart();
  },
  watch: {
    data(newData) {
      // Update the chart when data changes
      this.updateChart(newData);
    },
  },
  methods: {
    createChart() {
      const data = this.data || [];

      const timestamps = data.map((entry) => new Date(entry.timestamp).toLocaleTimeString());
      const values = data.map((entry) => entry.value);

      this.chart = new Chart(this.$refs.lineChart.getContext('2d'), {
        type: 'line',
        data: {
          labels: timestamps,
          datasets: [
            {
              label: 'Value',
              data: values,
              borderColor: 'blue', // Change color as needed
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: this.getChartOptions(),
      });
    },
    updateChart(newData) {
      // Destroy the existing chart
      if (this.chart) {
        this.chart.destroy();
      }

      // Recreate the chart with updated data
      this.createChart(newData);
    },
    getChartOptions() {
      // Define or modify chart options here
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            title: {
              display: true,
              text: 'Timestamp',
            },
          },
          y: {
            type: 'linear',
            position: 'left',
            title: {
              display: true,
              text: 'Value',
            },
          },
        },
      };
    },
  },
  beforeUnmount() {
    // Destroy the chart before component unmounts
    if (this.chart) {
      this.chart.destroy();
    }
  },
};
</script>

<style scoped>
.main {
  height: 80vh;
  width: 100%;
}
</style>
