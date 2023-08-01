const request = require('supertest');
const app = require('../server/server.js');

describe('Test the root path', () => {
  test('It should respond with "Hello, Jest!"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, Jest!');
  });
});
