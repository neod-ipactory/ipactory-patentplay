<template>
  <div>
    <Nav></Nav>
    <div class="page-content">
      <SideBar></SideBar>
      <div class="main-content">
        <div class="graph-container">
          <!-- <PickDate @updateDate="sendDate"></PickDate> -->
          <div class="date-picker-container">
            <select v-model="dateType" id="select-date">
              <option value="year">연</option>
              <option value="month">월</option>
              <option value="day">일</option>
            </select>
            <vc-date-picker
              v-model="date"
              mode="range"
              color="red"
              is-dark
              :max-date="new Date()"
              id="date-picker"
            ></vc-date-picker>
            <button @click="fetchDate">조회</button>
          </div>
          <div class="line-chart">
            <h4>출원동향</h4>
            <GLineChart></GLineChart>
          </div>
          <div class="line-chart">
            <h4>등록동향</h4>
            <GLineChart2></GLineChart2>
          </div>
          <div class="bar-graph">
            <h4>학과별 출원동향</h4>
            <GBarGraph></GBarGraph>
          </div>
          <div class="bar-graph">
            <h4>교수별 출원동향</h4>
            <select>
              <option selected disabled>학과</option>
              <option value="A">A과</option>
              <option value="B">B과</option>
              <option value="C">C과</option>
              <option value="D">D과</option>
              <option value="E">E과</option>
            </select>
            <GBarGraph2></GBarGraph2>
          </div>
          <div class="bottom">
            <h4>공동출원</h4>
            <GBarGraph3></GBarGraph3>
          </div>
        </div>
        <div class="vertical-line"></div>
        <div class="weekly-update-container">
          <h4>주간 업데이트</h4>
          <div class="select-container">
            <select>
              <option selected disabled>년도</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
            </select>
            <select>
              <option selected disabled>월</option>
              <option value="1">1월</option>
              <option value="2">2월</option>
              <option value="3">3월</option>
              <option value="4">4월</option>
              <option value="5">5월</option>
              <option value="6">6월</option>
              <option value="7">7월</option>
              <option value="8">8월</option>
              <option value="9">9월</option>
              <option value="10">10월</option>
              <option value="11">11월</option>
              <option value="12">12월</option>
            </select>
            <button>조회</button>
          </div>
          <UpdateTable></UpdateTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import SideBar from '../components/SideBar.vue';
// import PickDate from '../components/PickDate.vue';
import GLineChart from '../components/chart/GLineChart.vue';
import GLineChart2 from '../components/chart/GLineChart2.vue';
import GBarGraph from '../components/chart/GBarGraph.vue';
import GBarGraph2 from '../components/chart/GBarGraph2.vue';
import GBarGraph3 from '../components/chart/GBarGraph3.vue';
import UpdateTable from '../components/UpdateTable.vue';
// import { config } from '../api';
// import axios from 'axios';

export default {
  data() {
    return {
      dateType: 'year',
      // date: { start: '2020-08-31T15:00:00.000Z', end: '2020-09-01T15:00:00.000Z' },
      date: new Date(),
    };
  },
  // computed: {
  //   defaultDate() {
  //     let nowDate = new Date().toISOString().substring(0, 10);
  //     let pastDate =
  //       nowDate.substr(0, 2) + (parseInt(nowDate.substr(2, 4)) - 1).toString() + nowDate.substr(4);
  //     let defaultDateValue = nowDate + ' - ' + pastDate;
  //     return defaultDateValue;
  //   },
  // },
  created() {
    // let nowDate = new Date().toISOString().substring(0, 10);
    // let pastDate =
    //   nowDate.substr(0, 2) + (parseInt(nowDate.substr(2, 4)) - 1).toString() + nowDate.substr(4);
    // let defaultDateValue = pastDate + ' - ' + nowDate;
    // // this.date = defaultDateValue;
    // console.log('first', this.date);
    // this.date = new Date(defaultDateValue);
    // console.log(this.date);
    // this.date.start = new Date(pastDate).toISOString();
    // this.date.end = new Date(nowDate).toISOString();
    // console.log('last', this.date.start);
  },
  // { "start": "2020-08-31T15:00:00.000Z", "end": "2020-09-01T15:00:00.000Z" }
  components: {
    Nav,
    SideBar,
    // PickDate,
    GLineChart,
    GLineChart2,
    GBarGraph,
    GBarGraph2,
    GBarGraph3,
    UpdateTable,
  },
  methods: {
    // fetchDate() {
    //   var vm = this;
    //   console.log(vm.dateType, vm.date);
    // },
    // fetchDate() {
    //   const vm = this;
    //   let fetchData = { dateType: vm.dateType, date: vm.date };
    //   fetchDateApplyLineChart(fetchData);
    // },
    fetchDate() {
      let dateUnit = this.dateType;
      if (this.date !== null) {
        const startDate = this.date.start.toISOString().substring(0, 10);
        const endDate = this.date.end.toISOString().substring(0, 10);
        this.$store.dispatch('FETCH_CHART_DATA', { dateUnit, startDate, endDate });
        // axios
        //   .get(`${config.chartUrl}${this.dateType}&f_date=${startDate}&e_date=${endDate}`)
        //   .then((response) => console.log(response.data))
        //   .catch((error) => console.log(error));
      }
    },
  },
  mounted() {
    const calendarInput = document.querySelector(
      '#app > div > div.page-content > div.main-content > div.graph-container > div.date-picker-container > span > input',
    );
    calendarInput.style.color = 'black';
    calendarInput.value = new Date().toISOString().substring(0, 10);
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  width: 100%;
  display: flex;
  padding-top: 3%;

  .graph-container {
    width: 55%;
    margin-top: 3%;

    .date-picker-container {
      width: 350px;
      margin: 0 auto 3%;
      display: flex;

      #select-date {
        width: 40px;
        margin-right: 5%;
        border: 1px solid black;
        border-radius: 3px;
      }

      #date-picker {
        border: 1px solid black;
        border-radius: 3px;
      }

      button {
        width: 50px;
        margin-left: 5%;
        background-color: white;
        border: 1px solid black;
        border-radius: 3px;
      }
    }

    /* .date-container {
      width: 230px;
      margin-left: auto;

      #month-picker,
      #year-picker {
        z-index: 1;
      }
    } */

    h4 {
      text-align: center;
      font-weight: bold;
      font-family: Do Hyeon, sans-serif;
      font-size: 40px;
      color: #1b191d;
    }

    .line-chart,
    .bar-graph {
      width: 100%;

      select {
        width: 10%;
        height: 30px;
        display: block;
        margin: 0 2% 0 auto;
        border: 1px solid black;
        border-radius: 3px;
      }
    }

    .bottom {
      width: 100%;
    }
  }

  .vertical-line {
    width: 1px;
    height: 99%;
    margin: 0 2%;
    background-color: #919190;
  }

  .weekly-update-container {
    width: 45%;
    height: 1000px;
    padding-top: 7.3%;
    position: sticky;
    top: 0;

    h4 {
      text-align: center;
      font-weight: bold;
      font-family: Do Hyeon, sans-serif;
      font-size: 30px;
    }

    .select-container {
      width: 25%;
      display: flex;
      margin-left: auto;

      select {
        width: 40%;
        height: 25px;
        margin-left: 5%;
      }

      button {
        width: 30%;
        height: 25px;
        margin: 0 12% 0 5%;
        background-color: white;
      }
    }
  }
}
</style>
