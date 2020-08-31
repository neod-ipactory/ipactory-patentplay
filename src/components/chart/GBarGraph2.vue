<template>
  <div class="content-wrapper">
    <div class="content">
      <!-- Column chart -->
      <div class="card">
        <div class="card-header header-elements-inline">
          <h5 class="card-title">Column chart</h5>
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
            <div class="chart" id="google-column2"></div>
          </div>
        </div>
      </div>
      <!-- /column chart -->
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let externalScript = document.createElement('script');
    externalScript.setAttribute(
      'src',
      '/global_assets/js/demo_pages/charts/google/bars/column2.js',
    );
    document.head.appendChild(externalScript);
  },
};
</script>

<style></style>
