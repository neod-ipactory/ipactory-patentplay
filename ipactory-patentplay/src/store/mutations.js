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
    state.tags.categoryCount = tag.category;
  },
  SET_TAG_STATUS(state, { action, type, item, tagName, tagCount }) {
    let selectedTagName = state.selectedTags.tagName;
    let selectedTagCount = state.selectedTags.tagCount;
    switch (action) {
      case 'tag' || 'major' || 'grade':
        if (type === 'add') {
          if (state.tagStatus[action] === '') {
            return (
              (state.tagStatus[action] = item),
              selectedTagName.push(tagName),
              selectedTagCount.push(tagCount)
            );
          } else {
            return (
              (state.tagStatus = {
                ...state.tagStatus,
                [action]: state.tagStatus[action] + ',' + item,
              }),
              selectedTagName.push(tagName),
              selectedTagCount.push(tagCount)
            );
          }
        } else {
          if (state.tagStatus[action] === '') {
            return state.tagStatus[action];
          } else {
            let tempCodeArr = state.tagStatus[action].split(',');
            tempCodeArr.splice(tempCodeArr.indexOf(item), 1);
            let tempCodeString = tempCodeArr.join(',');
            return (
              (state.tagStatus = { ...state.tagStatus, [action]: tempCodeString }),
              selectedTagName.splice(selectedTagName.indexOf(tagName), 1),
              selectedTagCount.splice(selectedTagCount.indexOf(tagCount), 1)
            );
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
          return (state.tagStatus.stu = 1);
        } else {
          return (state.tagStatus.stu = 0);
        }
      case 'status':
        if (type === 'add') {
          if (state.tagStatus.status === '') {
            return (state.tagStatus.status = item);
          } else {
            return (state.tagStatus = {
              ...state.tagStatus,
              status: state.tagStatus.status + ',' + item,
            });
          }
        } else {
          if (state.tagStatus.status === '') {
            return state.tagStatus.status;
          } else {
            let tempCodeArr = state.tagStatus.status.split(',');
            tempCodeArr.splice(tempCodeArr.indexOf(item), 1);
            let tempCodeString = tempCodeArr.join(',');
            return (state.tagStatus = { ...state.tagStatus, status: tempCodeString });
          }
        }
      default:
        return state;
    }
  },
  SET_TAG_DATE(state, { startDate, endDate }) {
    state.tagStatus.date = `${startDate},${endDate}`;
  },
  SET_TAGS_INFO(state, data) {
    state.fetchedTags = data;
  },
  SET_LIST_SHOW(state, list) {
    state.selectedList = list;
  },
};
