import axios from 'axios';

const API = axios.create({
    baseURL: 'http://47.130.121.192:8000/api', // Adjust if necessary
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default API;
