<template>
  <div class="content-wrapper">
    <div class="content">
      <!-- Simple line chart -->
      <div class="card">
        <div class="card-header header-elements-inline">
          <h5 class="card-title">Basic line chart</h5>
          <div class="header-elements">
            <div class="list-icons">
              <a class="list-icons-item" data-action="collapse"></a>
              <a class="list-icons-item" data-action="reload"></a>
              <a class="list-icons-item" data-action="remove"></a>
            </div>
          </div>
        </div>

        <div class="card-body">
          <div class="chart-container">
            <div class="chart " id="c3-line-chart"></div>
          </div>
        </div>
      </div>
      <!-- /simple line chart -->
    </div>
  </div>
</template>

<script>
// import { c3LineChart } from '../../global_assets/js/demo_pages/charts/c3/c3_lines_areas.js';
// import c3LineChart from "../../public/global_assets/js/demo_pages/charts/c3/c3_lines_areas"

export default {
  mounted() {
    // c3LineChart();
    // let externalScript = document.createElement('script');
    // externalScript.setAttribute('src', '/global_assets/js/demo_pages/charts/c3/c3_lines_areas.js');
    // document.head.appendChild(externalScript);
  },
};
</script>

<style></style>
