export default {
  SET_CHART_DATA(state, data) {
    state.applyLineChart = data.chart1;
    state.applyLineChart.unshift(['날짜', '출원수']);
    state.registerLineChart = data.chart2;
    state.registerLineChart.unshift(['날짜', '등록수']);
  },

  // SET_APPLY_LINE_CHART2(state, data) {
  //   data.map((item) => state.applyLineChart2.push(item));
  // },
  // SET_REGISTER_LINE_CHART(state, data) {
  //   state.registerLineChart = [...state.registerLineChart, ...data];
  // },
};
