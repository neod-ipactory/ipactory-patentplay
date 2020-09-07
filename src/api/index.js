import axios from 'axios';

const config = {
  chartUrl: '//3.129.87.91:8000/chart',
  tagUrl: '//3.129.87.91:8000/main',
  //mock data url
  localHost: 'http://localhost:8081/data/',
};

const fetchApplyLineChart = () => {
  return axios.get(`${config.localHost}ChartData.json`);
};

export { config, fetchApplyLineChart };
