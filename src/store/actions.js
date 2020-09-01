import { fetchApplyLineChart } from '../api/index';

export default {
  FETCH_APPLY_LINE_CHART(context) {
    fetchApplyLineChart()
      .then((response) => context.commit('SET_APPLY_LINE_CHART', response.data.data))
      .catch((error) => console.log(error));
  },
};
