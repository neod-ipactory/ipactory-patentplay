import axios from 'axios';

const config = {
  localHost: 'http://localhost:8081/data/',
  chartUrl: '//3.129.87.91:8000/chart?date=',
};

const fetchApplyLineChart = () => {
  // return axios.get(`${config.localHost}applyLineChart.json`);
  return axios.get(`${config.localHost}ChartData.json`);
};

// const fetchDateApplyLineChart = (data) => {
//   return axios.post('config.chartUrl', data);
// };

// const fetchDateApplyLineChart = () => {
//   return axios.get('3.129.87.91:8000/chart?date=');
// };

export { config, fetchApplyLineChart };
