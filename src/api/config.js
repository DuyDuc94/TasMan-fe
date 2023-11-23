import { API_BASE_URL } from '../configs/config';
import axios from 'axios';

const server = axios.create({
	  baseURL: API_BASE_URL,
});

export default server;
