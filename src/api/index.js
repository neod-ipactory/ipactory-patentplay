import axios from 'axios';

const config = {
  // basicUrl: '//3.129.87.91:8000/',
  basicUrl: 'http://210.114.17.237:8000/',
  //mock data url
  localHost: 'http://localhost:8081/data/',
};

const fetchApplyLineChart = () => {
  return axios.get(`${config.localHost}ChartData.json`);
};

export { config, fetchApplyLineChart };
