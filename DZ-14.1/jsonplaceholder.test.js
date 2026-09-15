const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder API tests', () => {

  // 1. GET - отримати конкретний пост
  test('GET /posts/1 - повертає пост з id 1', async () => {
    const response = await axios.get(`${BASE_URL}/posts/1`);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
    expect(response.data).toHaveProperty('title');
    expect(response.data).toHaveProperty('body');
    expect(response.data).toHaveProperty('userId');
  });

  // 2. GET - отримати конкретного користувача
  test('GET /users/1 - повертає користувача з id 1', async () => {
    const response = await axios.get(`${BASE_URL}/users/1`);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
    expect(response.data).toHaveProperty('name');
    expect(response.data).toHaveProperty('email');
  });

  // 3. GET - отримати коментарі до посту
  test('GET /comments?postId=1 - повертає масив коментарів', async () => {
    const response = await axios.get(`${BASE_URL}/comments`, {
      params: { postId: 1 }
    });

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);

    response.data.forEach(comment => {
      expect(comment).toHaveProperty('postId', 1);
      expect(comment).toHaveProperty('email');
    });
  });

  // 4. POST - створити новий пост
  test('POST /posts - створює новий пост', async () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };

    const response = await axios.post(`${BASE_URL}/posts`, newPost);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.userId).toBe(newPost.userId);
  });

  // 5. POST - створити нового користувача
  test('POST /users - створює нового користувача', async () => {
    const newUser = {
      name: 'John Doe',
      username: 'johndoe',
      email: 'john@example.com'
    };

    const response = await axios.post(`${BASE_URL}/users`, newUser);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.name).toBe(newUser.name);
    expect(response.data.email).toBe(newUser.email);
  });

});