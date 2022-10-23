const request = require("supertest");
const app = require("../config/appSetup");
const router = require("../routers/TestRouter");

require("dotenv").config();

describe('Routers endpoints', () => {
    
    test('GET /private', async () => {
        const res = await request(app).get('/private');
        expect(res.statusCode).toEqual(200);
      });

      test('GET /addPoints', async () => {
        const res = await request(app).get('/addPoints');
        expect(res.statusCode).toEqual(200);
      });

      test('GET /logout', async () => {
        const res = await request(app).get('/logout');
        expect(res.statusCode).toEqual(302);
      });
})