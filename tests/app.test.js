const request = require("supertest");
const app = require("../config/appSetup");

require("dotenv").config();

describe('Routers endpoint', () => {
  test('GET /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.header['content-type']).toBe('text/html; charset=UTF-8');
  });

  test('GET /InvalidCredentials', async () => {
    const res = await request(app).get('/InvalidCredentials');
    expect(res.statusCode).toEqual(200);
    expect(res.header['content-type']).toBe('text/html; charset=UTF-8');
  });

  test('GET /InvalidProfCredential', async () => {
    const res = await request(app).get('/InvalidProfCredentials');
    expect(res.statusCode).toEqual(200);
    expect(res.header['content-type']).toBe('text/html; charset=UTF-8');
  });

})


