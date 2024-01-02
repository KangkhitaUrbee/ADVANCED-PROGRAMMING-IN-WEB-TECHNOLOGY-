import axios from 'axios';

// Create an Axios instance with a custom configuration
const instance = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your actual backend API base URL
  withCredentials: true, // Include credentials (e.g., cookies) with requests
});

export default instance;
