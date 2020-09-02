import axios from 'axios';
import { config, fetchApplyLineChart } from '../api/index';

export default {
  FETCH_APPLY_LINE_CHART(context) {
    fetchApplyLineChart()
      .then((response) => context.commit('SET_APPLY_LINE_CHART', response.data.chart1))
      .catch((error) => console.log(error));
  },
  FETCH_APPLY_LINE_CHART2(context, { dateUnit, startDate, endDate }) {
    axios
      .get(`${config.chartUrl}${dateUnit}&f_date=${startDate}&e_date=${endDate}`)
      .then((response) => context.commit('SET_APPLY_LINE_CHART', response.data.chart1))
      .catch((error) => console.log(error));
  },
  FETCH_REGISTER_LINE_CHART(context) {
    fetchApplyLineChart()
      .then((response) => context.commit('SET_REGISTER_LINE_CHART', response.data.chart2))
      .catch((error) => console.log(error));
  },
};
