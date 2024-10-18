// src/apiService.js

import axios from 'axios';

// Base URL for the API
const BASE_URL = 'https://jsonplaceholder.typicode.com'; // Replace with your actual API endpoint

// Create an Axios instance
const api = axios.create({
  baseURL: BASE_URL,
});

// Function to fetch data
export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to handle it later
  }
};
