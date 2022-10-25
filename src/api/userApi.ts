import axios from 'axios';

const userApi = axios.create({
  baseURL: 'https://api.github.com/users'
})

export default userApi;