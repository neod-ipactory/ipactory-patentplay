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
  SET_ALL_TAG(state, tag) {
    state.tags.nine = tag.tags.slice(0, 10);
    state.tags.nationalStandard = tag.tags.slice(10, 171);
    state.tags.ict = tag.tags.slice(171, 217);
    state.tags.techTheme = tag.tags.slice(217, 309);
    state.tags.major = tag.major;
    state.tags.grade = tag.grade;
  },
  SET_TAG_STATUS(state, { action, type, item }) {
    switch (action) {
      case 'tag':
        if (type === 'add') {
          if (state.tagStatus.tag === '') {
            return (state.tagStatus.tag = item);
          } else {
            return (state.tagStatus = {
              ...state.tagStatus,
              tag: state.tagStatus.tag + ', ' + item,
            });
          }
        } else {
          if (state.tagStatus.tag === '') {
            return state.tagStatus.tag;
          } else {
            let tempCodeArr = state.tagStatus.tag.split(', ');
            tempCodeArr.splice(tempCodeArr.indexOf(item), 1);
            let tempCodeString = tempCodeArr.join(', ');
            return (state.tagStatus = { ...state.tagStatus, tag: tempCodeString });
          }
        }
      case 'major':
        if (type === 'add') {
          if (state.tagStatus.major === '') {
            return (state.tagStatus.major = item);
          } else {
            return (state.tagStatus = {
              ...state.tagStatus,
              major: state.tagStatus.major + ', ' + item,
            });
          }
        } else {
          if (state.tagStatus.major === '') {
            return state.tagStatus.major;
          } else {
            let tempCodeArr = state.tagStatus.major.split(', ');
            tempCodeArr.splice(tempCodeArr.indexOf(item), 1);
            let tempCodeString = tempCodeArr.join(', ');
            return (state.tagStatus = { ...state.tagStatus, major: tempCodeString });
          }
        }
      case 'grade':
        if (type === 'add') {
          if (state.tagStatus.grade === '') {
            return (state.tagStatus.grade = item);
          } else {
            return (state.tagStatus = {
              ...state.tagStatus,
              grade: state.tagStatus.grade + ', ' + item,
            });
          }
        } else {
          if (state.tagStatus.grade === '') {
            return state.tagStatus.grade;
          } else {
            let tempCodeArr = state.tagStatus.grade.split(', ');
            tempCodeArr.splice(tempCodeArr.indexOf(item), 1);
            let tempCodeString = tempCodeArr.join(', ');
            return (state.tagStatus = { ...state.tagStatus, grade: tempCodeString });
          }
        }
      case 'andOr':
        if (item) {
          return (state.tagStatus.condition = 'or');
        } else {
          return (state.tagStatus.condition = 'and');
        }
      case 'stu':
        if (item) {
          return (state.tagStatus.stu = 0);
        } else {
          return (state.tagStatus.stu = 1);
        }

      default:
        return state;
    }
  },
};
