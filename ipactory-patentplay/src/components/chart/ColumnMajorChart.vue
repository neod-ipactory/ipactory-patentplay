<template>
  <div class="content-wrapper">
    <div class="content">
      <!-- Simple line chart -->
      <div class="card">
        <GChart
          v-if="getColumnMajorChart.length !== 1"
          id="major-column-chart"
          type="ColumnChart"
          :data="getColumnMajorChart"
        />
        <NoData v-else></NoData>
      </div>
      <!-- /simple line chart -->
    </div>
  </div>
</template>

<script>
import NoData from '../NoData.vue';
import { GChart } from 'vue-google-charts';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getColumnMajorChart']),
  },
  components: {
    GChart,
    NoData,
  },
  created() {
    let endDate = new Date().toISOString().substring(0, 10);
    let startDate =
      endDate.substr(0, 2) + (parseInt(endDate.substr(2, 4)) - 1).toString() + endDate.substr(4);
    this.$store.dispatch('FETCH_CHART_DATA', { dateUnit: 'month', startDate, endDate });
  },
};
</script>

<style scoped>
#major-column-chart {
  width: 100%;
  height: 400px;
}
</style>
