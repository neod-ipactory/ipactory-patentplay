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

        <div class="card-body">
          <div class="chart-container">
            <div class="chart" id="google-line2"></div>
          </div>
        </div>
      </div>
      <!-- /simple line chart -->
    </div>
  </div>
</template>

<script>
// import { lineChart } from '../../public/global_assets/js/demo_pages/charts/google/lines/lines';

export default {
  mounted() {
    // lineChart();
    let externalScript = document.createElement('script');
    externalScript.setAttribute(
      'src',
      '/global_assets/js/demo_pages/charts/google/lines/lines2.js',
    );
    document.head.appendChild(externalScript);
  },
};
</script>

<style></style>
