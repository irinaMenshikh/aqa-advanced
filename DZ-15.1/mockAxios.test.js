/* eslint-disable no-undef */
const axios = require('axios');

jest.mock('axios');

describe('Mocking Axios in Jest', () => {
  test('successful mocked GET request returns expected data', async () => {
    const mockData = { id: 1, title: 'Mocked title' };
    axios.get.mockResolvedValue({ status: 200, data: mockData });

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status).toBe(200);
    expect(response.data).toEqual(mockData);
  });

  test('failed mocked GET request throws an error', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    await expect(
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
    ).rejects.toThrow('Network Error');
  });

  test('successful mocked POST request returns created resource', async () => {
    const newPost = { title: 'foo', body: 'bar', userId: 1 };
    const mockResponse = { id: 101, ...newPost };
    axios.post.mockResolvedValue({ status: 201, data: mockResponse });

    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);

    expect(response.status).toBe(201);
    expect(response.data).toEqual(mockResponse);
  });

  test('failed mocked POST request throws an error', async () => {
    axios.post.mockRejectedValue(new Error('Bad Request'));

    await expect(
      axios.post('https://jsonplaceholder.typicode.com/posts', {})
    ).rejects.toThrow('Bad Request');
  });
});