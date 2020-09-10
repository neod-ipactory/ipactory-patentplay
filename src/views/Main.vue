<template>
  <div>
    <Nav></Nav>
    <div class="page-content">
      <SideBar></SideBar>
      <div class="main-content">
        <div class="graph-container">
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
            <LineApplyChart></LineApplyChart>
          </div>
          <div class="line-chart">
            <h4>등록동향</h4>
            <LineRegisterChart></LineRegisterChart>
          </div>
          <div class="bar-graph">
            <h4>학과별 출원동향</h4>
            <!-- <GBarGraph></GBarGraph> -->
            <ColumnMajorChart></ColumnMajorChart>
          </div>
          <div class="bar-graph">
            <h4>교수별 출원동향</h4>
            <select v-model="selectedMajor">
              <option disabled>학과</option>
              <option v-for="major in majors" :key="major">{{ major }}</option>
            </select>
            <ColumnProfessorChart></ColumnProfessorChart>
          </div>
          <div class="bottom">
            <h4>공동출원</h4>
            <ColumnCoworkChart></ColumnCoworkChart>
          </div>
        </div>
        <div class="vertical-line"></div>
        <div class="weekly-update-container">
          <h4>주간 업데이트</h4>
          <div class="select-container">
            <select v-model="selectedYear">
              <option disabled>년도</option>
              <option v-for="year in years" :key="year">{{ year }}</option>
            </select>
            <select v-model="selectedMonth">
              <option disabled>월</option>
              <option v-for="month in months" :key="month">{{ month }}월</option>
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
import LineApplyChart from '../components/chart/LineApplyChart.vue';
import LineRegisterChart from '../components/chart/LineRegisterChart.vue';
import ColumnMajorChart from '../components/chart/ColumnMajorChart.vue';
import ColumnProfessorChart from '../components/chart/ColumnProfessorChart.vue';
import ColumnCoworkChart from '../components/chart/ColumnCoworkChart.vue';
import UpdateTable from '../components/UpdateTable.vue';
import { majors, months } from '../../public/data';

export default {
  data() {
    return {
      dateType: 'year',
      date: new Date(),
      majors,
      months,
      selectedMajor: '학과',
      selectedYear: '년도',
      selectedMonth: '월',
    };
  },
  computed: {
    years() {
      const year = Number(new Date().toISOString().substring(0, 4));
      const yearsArray = Array(year - 1997)
        .fill()
        .map((y, i) => year - i);
      return yearsArray;
    },
  },

  watch: {
    selectedMajor() {
      const major = this.selectedMajor;
      if (this.date !== null) {
        const startDate = this.date.start.toISOString().substring(0, 10);
        const endDate = this.date.end.toISOString().substring(0, 10);
        this.$store.dispatch('FETCH_MAJOR', { startDate, endDate, major });
      }
    },
  },
  components: {
    Nav,
    SideBar,
    LineApplyChart,
    LineRegisterChart,
    ColumnMajorChart,
    ColumnProfessorChart,
    ColumnCoworkChart,
    UpdateTable,
  },
  methods: {
    fetchDate() {
      let dateUnit = this.dateType;
      if (this.date !== null) {
        const startDate = this.date.start.toISOString().substring(0, 10);
        const endDate = this.date.end.toISOString().substring(0, 10);
        this.$store.dispatch('FETCH_CHART_DATA', {
          dateUnit,
          startDate,
          endDate,
        });
      }
    },
    handleVcalendar() {
      const calendarInput = document.querySelector(
        '#app > div > div.page-content > div.main-content > div.graph-container > div.date-picker-container > span > input',
      );
      calendarInput.style.color = 'black';
      calendarInput.value = new Date().toISOString().substring(0, 10);
    },
  },
  mounted() {
    this.handleVcalendar();
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

    h4 {
      text-align: center;
      font-weight: bold;
      font-family: Noto Sans KR, sans-serif;
      font-size: 40px;
      color: #1b191d;
    }

    .line-chart,
    .bar-graph {
      width: 100%;

      select {
        width: 150px;
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
      font-family: Noto Sans KR, sans-serif;
      font-size: 30px;
    }

    .select-container {
      width: 35%;
      display: flex;
      margin-left: auto;

      select {
        width: 100px;
        height: 25px;
        margin-left: 5%;
      }

      button {
        width: 50px;
        height: 25px;
        margin: 0 12% 0 5%;
        background-color: white;
      }
    }
  }
}
</style>
