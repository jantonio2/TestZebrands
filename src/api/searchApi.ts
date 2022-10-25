import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.github.com/search'
})

export default searchApi;