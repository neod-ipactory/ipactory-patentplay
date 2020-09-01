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
    ...mapGetters(['getApplyLineChart']),
  },
  components: {
    GChart,
  },
  created() {
    this.$store.dispatch('FETCH_APPLY_LINE_CHART');
  },
};
</script>

<style scoped>
#apply-line-chart {
  width: 100%;
  height: 400px;
}
</style>
