/* eslint-disable no-undef */
const fetchInvalidUrl = require('./errorHandling');

describe('Error Handling with Axios', () => {
  test('should throw an error with proper message when URL is invalid', async () => {
    await expect(fetchInvalidUrl()).rejects.toThrow('Request failed');
  });

  test('should reject with an instance of Error', async () => {
    await expect(fetchInvalidUrl()).rejects.toBeInstanceOf(Error);
  });
});
