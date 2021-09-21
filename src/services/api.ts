import axios from 'axios';

const url = 'https://api.opensea.io/api/v1/';

const api = axios.create({
  baseURL: url,
});


export default api;