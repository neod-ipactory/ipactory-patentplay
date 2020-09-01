import axios from 'axios';

const config = {
  localHost: 'http://localhost:8081/data/',
};

const fetchApplyLineChart = () => {
  return axios.get(`${config.localHost}applyLineChart.json`);
};

export { fetchApplyLineChart };
