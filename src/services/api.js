import axios from 'axios';

// https://api.github.com/users/username
const api = axios.create({
  baseURL: 'https://api.github.com/users/',
});

export default api;
