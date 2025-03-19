import axios from 'axios'
import { API_BASE_URL } from 'configs/AppConfig'

const service = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000
})

service.interceptors.response.use((response) => response.data);

export default service