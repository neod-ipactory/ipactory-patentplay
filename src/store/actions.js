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
  FETCH_ALL_TAG({ commit }) {
    axios
      .get(`${config.tagUrl}`)
      .then(({ data }) => commit('SET_ALL_TAG', data))
      .catch((error) => console.log(error));
  },
  // FETCH_ALL_TAG() {
  //   axios
  //     .get(`${config.tagUrl}`)
  //     .then((response) => console.log(response.data))
  //     .catch((error) => console.log(error));
  // },
  // FETCH_TAG_STATUS({ commit }, tagCode) {
  // // FETCH_TAG_STATUS() {
  //   axios
  //     // .post(`${config.tagUrl}`, )
  //     .then(({data}) => console.log(data.data));
  // },type,
  FETCH_TAG_STATUS({ commit }, { action, type, item }) {
    commit('SET_TAG_STATUS', { action, type, item });
  },
};
