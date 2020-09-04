import axios from 'axios';
import { config } from '../api/index';

export default {
  FETCH_CHART_DATA(context, { dateUnit, startDate, endDate }) {
    axios
      .get(`${config.chartUrl}?date=${dateUnit}&f_date=${startDate}&e_date=${endDate}`)
      .then((response) => context.commit('SET_CHART_DATA', response.data))
      .catch((error) => console.log(error));
  },
  FETCH_MAJOR(context, { startDate, endDate, major }) {
    axios
      .post(`${config.chartUrl}`, { f_date: startDate, e_date: endDate, major })
      .then((response) => context.commit('SET_MAJOR', response.data.Professor))
      .catch((error) => console.log(error));
  },
};
