const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");

require("dotenv").config();

describe('Routers endpoint', () => {
  test('GET /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.header['content-type']).toBe('text/html; charset=UTF-8');
  });

  test('GET /invalidCredential', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.header['content-type']).toBe('text/html; charset=UTF-8');
  });
})


