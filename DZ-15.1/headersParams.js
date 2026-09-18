/* eslint-disable no-undef */
const axios = require('axios');

async function fetchWithHeadersAndParams() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      'Custom-Header': 'MyValue',
      Authorization: 'Bearer test-token'
    },
    params: {
      userId: 1,
      _limit: 5
    }
  });
  return response;
}

module.exports = fetchWithHeadersAndParams;