<template>
  <div>
    <Nav></Nav>
    <div class="page-content">
      <SideBar></SideBar>
      <div class="main-content">
        <div class="graph-container">
          <PickDate></PickDate>
          <div class="line-charts">
            <div class="line-chart">
              <h4>출원동향 그래프</h4>
              <GLineChart></GLineChart>
            </div>
            <div class="line-chart">
              <h4>등록동향 그래프</h4>
              <GLineChart2></GLineChart2>
            </div>
          </div>
          <div class="bar-graphs">
            <div class="bar-graph">
              <h4>학과별 출원동향 그래프</h4>
              <!-- <C3BarGraph></C3BarGraph> -->
              <GBarGraph></GBarGraph>
            </div>
            <div class="bar-graph">
              <h4>교수별 출원동향 그래프</h4>
              <GBarGraph2></GBarGraph2>
            </div>
          </div>
          <div class="bottom">
            <h4>공동출원 그래프</h4>
            <GBarGraph3></GBarGraph3>
          </div>
        </div>
        <div class="weekly-update-container">
          <h4>주간 업데이트</h4>

          <UpdateTable></UpdateTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import SideBar from '../components/SideBar.vue';
import PickDate from '../components/PickDate.vue';
// import C3LineChart from '../components/chart/C3LineChart.vue';
// import C3BarGraph from '../components/chart/C3BarGraph.vue';
// import EchartBarGraph from '../components/chart/EchartBarGraph.vue';
import GLineChart from '../components/chart/GLineChart.vue';
import GLineChart2 from '../components/chart/GLineChart2.vue';
import GBarGraph from '../components/chart/GBarGraph.vue';
import GBarGraph2 from '../components/chart/GBarGraph2.vue';
import GBarGraph3 from '../components/chart/GBarGraph3.vue';
import UpdateTable from '../components/UpdateTable.vue';

export default {
  components: {
    Nav,
    SideBar,
    PickDate,
    // C3LineChart,
    // C3BarGraph,
    // EchartBarGraph,
    GLineChart,
    GLineChart2,
    GBarGraph,
    GBarGraph2,
    GBarGraph3,
    UpdateTable,
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  width: 100%;
  display: flex;
  padding-top: 3%;

  .graph-container {
    width: 75%;
    background-color: red;

    .line-charts,
    .bar-graphs {
      display: flex;
      margin-bottom: 3%;

      .line-chart,
      .bar-graph {
        width: 50%;

        h4 {
          text-align: center;
          font-weight: bold;
        }
      }
    }

    .bottom {
      width: 100%;

      h4 {
        text-align: center;
        font-weight: bold;
      }
    }
  }
  .weekly-update-container {
    width: 25%;
    padding-top: 3.3%;
    background-color: blue;

    h4 {
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>
