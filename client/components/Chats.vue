<template>
    <div classname="main">
      <canvas ref="lineChart" :style='{height:"40rem", width:"100%"}'></canvas>
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
    methods: {
      createChart() {
        const data = this.data || [];
  
        const timestamps = data.map(entry => new Date(entry.timestamp).toLocaleTimeString());
        const values = data.map(entry => entry.value);
  
        this.chart = new Chart(this.$refs.lineChart.getContext('2d'), {
          type: 'line',
          data: {
            labels: timestamps,
            datasets: [{
              label: 'Value',
              data: values,
              borderColor: 'blue', //change color
              borderWidth: 2,
              fill: false,
            }],
          },
          options: {
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
          },
        });
      },
    },
    beforeUnmount() {
      if (this.chart) {
        this.chart.destroy();
      }
    },
  };
  </script>
  
  <style scoped>
  .main{
    height: 80vh;
    width: 100%;
  }
  </style>