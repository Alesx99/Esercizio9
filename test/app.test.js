const request = require('supertest');
const app = require('../index');

let server;

beforeAll(() => {
  server = app.listen(0); // Porta 0 per test
});

afterAll((done) => {
  server.close(done);
});

describe('Applicazione CI/CD', () => {
  test('GET / dovrebbe restituire un messaggio di benvenuto', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toContain('Applicazione CI/CD funzionante');
  });

  test('GET /health dovrebbe restituire status healthy', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
    expect(response.body).toHaveProperty('uptime');
    expect(response.body).toHaveProperty('timestamp');
  });

  test('GET /api/test dovrebbe restituire dati di test', async () => {
    const response = await request(app).get('/api/test');
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('random');
    expect(response.body.data).toHaveProperty('timestamp');
  });
}); 