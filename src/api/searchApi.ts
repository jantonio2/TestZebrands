import axios from 'axios';

// Base url for search requests
const searchApi = axios.create({
  baseURL: 'https://api.github.com/search'
})

export default searchApi;