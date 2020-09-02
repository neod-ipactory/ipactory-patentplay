<template>
  <div class="content-wrapper">
    <div class="content">
      <!-- Simple line chart -->
      <div class="card">
        <GChart id="apply-line-chart" type="LineChart" :data="getApplyLineChart" />
      </div>
      <!-- /simple line chart -->
    </div>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getApplyLineChart', 'getApplyLineChart2']),
  },
  components: {
    GChart,
  },
  created() {
    let endDate = new Date().toISOString().substring(0, 10);
    let startDate =
      endDate.substr(0, 2) + (parseInt(endDate.substr(2, 4)) - 1).toString() + endDate.substr(4);
    this.$store.dispatch('FETCH_APPLY_LINE_CHART2', { dateUnit: 'month', startDate, endDate });
  },
};
</script>

<style scoped>
#apply-line-chart {
  width: 100%;
  height: 400px;
}
</style>
