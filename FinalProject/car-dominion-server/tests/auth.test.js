const request = require('supertest');
const app = require('../index');

describe('Auth Endpoints', () => {
  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/auth/signup')
      .send({
        username: 'testuser',
        password: 'testpassword'
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('token');
  });

  it('should log in the user', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'testpassword'
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});