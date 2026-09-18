/* eslint-disable no-undef */
const axios = require('axios');
const fetchWithHeadersAndParams = require('./headersParams');

jest.mock('axios');

describe('Testing Request Headers and Params', () => {
  test('should send request with correct custom headers and params', async () => {
    axios.get.mockResolvedValue({ status: 200, data: [] });

    await fetchWithHeadersAndParams();

    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts',
      {
        headers: {
          'Custom-Header': 'MyValue',
          Authorization: 'Bearer test-token'
        },
        params: {
          userId: 1,
          _limit: 5
        }
      }
    );
  });
});