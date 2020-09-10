import axios from 'axios';
import { config } from '../api/index';

export default {
  FETCH_CHART_DATA(context, { dateUnit, startDate, endDate }) {
    axios
      .get(`${config.basicUrl}chart?date=${dateUnit}&f_date=${startDate}&e_date=${endDate}`)
      .then((response) => context.commit('SET_CHART_DATA', response.data))
      .catch((error) => console.log(error));
  },
  FETCH_MAJOR(context, { startDate, endDate, major }) {
    axios
      .post(`${config.basicUrl}chart`, { f_date: startDate, e_date: endDate, major })
      .then((response) => context.commit('SET_MAJOR', response.data.Professor))
      .catch((error) => console.log(error));
  },
  FETCH_ALL_TAG({ commit }) {
    axios
      .get(`${config.basicUrl}main`)
      .then(({ data }) => commit('SET_ALL_TAG', data))
      .catch((error) => console.log(error));
  },
  COMPUTE_TAG_STATUS({ commit }, { action, type, item, tagName, tagCount }) {
    commit('SET_TAG_STATUS', { action, type, item, tagName, tagCount });
  },
  COMPUTE_TAG_DATE({ commit }, { startDate, endDate }) {
    commit('SET_TAG_DATE', { startDate, endDate });
  },
  FETCH_TAG_STATUS(context, { tagStatus }) {
    axios
      .post(`${config.basicUrl}main`, tagStatus)
      .then(({ data }) => context.commit('SET_TAGS_INFO', data))
      .catch((error) => console.log(error));
  },
  FETCH_LIST_SHOW(context, { listshow, vm }) {
    // FETCH_LIST_SHOW(context, { listshow }) {
    axios
      .post(`${config.basicUrl}list`, { listshow })
      .then(({ data }) => {
        // return console.log(data);
        context.commit('SET_LIST_SHOW', data.list),
          localStorage.setItem('list', JSON.stringify(data.list)),
          vm.$router.push('/list'),
          vm.$router.go(vm.$router.currentRoute);
      })
      .catch((error) => console.log(error));
  },
};
