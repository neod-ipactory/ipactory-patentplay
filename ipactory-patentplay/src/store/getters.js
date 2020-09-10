export default {
  getLineApplyChart(state) {
    return state.lineApplyChart;
  },
  getLineRegisterChart(state) {
    return state.lineRegisterChart;
  },
  getColumnMajorChart(state) {
    return state.columnMajorChart;
  },
  getColumnProfessorChart(state) {
    return state.columnProfessorChart;
  },
  getColumnCoworkChart(state) {
    return state.columnCoworkChart;
  },
  getNine(state) {
    return state.tags.nine;
  },
  getNationalStandard(state) {
    return state.tags.nationalStandard;
  },
  getIct(state) {
    return state.tags.ict;
  },
  getTechTheme(state) {
    return state.tags.techTheme;
  },
  getMajor(state) {
    return state.tags.major;
  },
  getGrade(state) {
    return state.tags.grade;
  },
  getCategoryCount(state) {
    return state.tags.categoryCount;
  },
  getTagStatus(state) {
    return state.tagStatus;
  },
  getSelectedTags(state) {
    return state.selectedTags;
  },
  getFetchedTags(state) {
    return state.fetchedTags;
  },
  getSelectedList(state) {
    return state.selectedList;
  },
};
