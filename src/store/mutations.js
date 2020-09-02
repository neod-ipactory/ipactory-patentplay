export default {
  SET_APPLY_LINE_CHART(state, data) {
    // state.applyLineChart = [...state.applyLineChart, ...data];
    state.applyLineChart = data;
    state.applyLineChart.unshift(['날짜', '출원수']);
  },
  // SET_APPLY_LINE_CHART2(state, data) {
  //   data.map((item) => state.applyLineChart2.push(item));
  // },
  // SET_REGISTER_LINE_CHART(state, data) {
  //   state.registerLineChart = [...state.registerLineChart, ...data];
  // },
};
