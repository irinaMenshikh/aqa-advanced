/* eslint-disable no-undef */
const axios = require('axios');

async function fetchInvalidUrl() {
  try {
    const response = await axios.get('https://invalid-url-that-does-not-exist-12345.com');
    return response.data;
  } catch (error) {
    throw new Error(`Request failed: ${error.message}`);
  }
}

module.exports = fetchInvalidUrl;