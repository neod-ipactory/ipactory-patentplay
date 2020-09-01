<template>
  <div class="content-wrapper">
    <div class="content">
      <!-- Simple line chart -->
      <div class="card">
        <div class="chart" id="apply-line-chart"></div>
      </div>
      <!-- /simple line chart -->
    </div>
  </div>
</template>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      chartData: [],
    };
  },
  // computed: {
  //   applyData: this.$state.getters.getApplyLineChart,
  // },
  methods: {
    draw_chart(draw_id, chart_data) {
      console.log('draw_chart');
      google.charts.load('current', { packages: ['corechart'] });
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable(chart_data);
        var options = {
          // title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' },
        };
        var chart = new google.visualization.LineChart(document.getElementById(draw_id));
        chart.draw(data, options);
      }
      console.log('draw_chart2');
    },
  },
  created() {
    this.$store.dispatch('FETCH_APPLY_LINE_CHART');
  },
  mounted() {
    // axios
    //   .get('http://localhost:8081/data/applyLineChart.json')
    //   .then((response) => (this.chartData = response.data.data))
    //   .then((response) => this.draw_chart('apply-line-chart', this.chartData))
    //   .catch((error) => console.log(error));
    console.log('state => ', this.$store.state.applyLineChart);
    console.log('getters => ', this.$store.getters.getApplyLineChart);
    // this.draw_chart('apply-line-chart', this.$store.state.applyLineChart);
    this.draw_chart('apply-line-chart', this.$store.getters.getApplyLineChart);
    // this.draw_chart('apply-line-chart', this.$store.getters.applyData);
  },
};
</script>

<style scoped>
#apply-line-chart {
  width: 100%;
  height: 400px;
}
</style>
