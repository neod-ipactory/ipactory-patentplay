<template>
  <div class="content-wrapper">
    <div class="content">
      <!-- Simple line chart -->
      <div class="card">
        <div class="card-header header-elements-inline">
          <h5 class="card-title">Simple line chart</h5>
          <div class="header-elements">
            <div class="list-icons">
              <a class="list-icons-item" data-action="collapse"></a>
              <a class="list-icons-item" data-action="reload"></a>
              <a class="list-icons-item" data-action="remove"></a>
            </div>
          </div>
        </div>
        <div class="chart" id="regist-line-chart"></div>
      </div>
      <!-- /simple line chart -->
    </div>
  </div>
</template>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script>
export default {
  methods: {
    draw_chart(draw_id, chart_data) {
      google.charts.load('current', { packages: ['corechart'] });
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable(chart_data);
        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' },
        };
        var chart = new google.visualization.LineChart(document.getElementById(draw_id));
        chart.draw(data, options);
      }
    },
  },
  mounted() {
    this.draw_chart('regist-line-chart', [
      ['Year', 'Sales', 'Expenses'],
      ['2005', 1000, 400],
      ['2006', 1170, 460],
      ['2007', 660, 1120],
      ['2008', 1030, 540],
    ]);
  },
};
</script>

<style>
#regist-line-chart {
  width: 100%;
  height: 400px;
}
</style>
