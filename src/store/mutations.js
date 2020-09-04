export default {
  SET_CHART_DATA(state, data) {
    state.lineApplyChart = data.chart1;
    state.lineApplyChart.unshift(['날짜', '출원수']);
    state.lineRegisterChart = data.chart2;
    state.lineRegisterChart.unshift(['날짜', '등록수']);
    state.columnMajorChart = data.major;
    state.columnMajorChart.unshift(['학과', '출원수']);
    state.columnProfessorChart = data.professor;
    state.columnProfessorChart.unshift(['교수', '출원수']);
    state.columnCoworkChart = data.cowork;
    state.columnCoworkChart.unshift(['단체', '출원수']);
  },
  SET_MAJOR(state, major) {
    state.columnProfessorChart = major;
    state.columnProfessorChart.unshift(['교수', '출원수']);
  },
  // SET_APPLY_LINE_CHART2(state, data) {
  //   data.map((item) => state.applyLineChart2.push(item));
  // },
  // SET_REGISTER_LINE_CHART(state, data) {
  //   state.registerLineChart = [...state.registerLineChart, ...data];
  // },
};
