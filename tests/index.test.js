import { expectCt } from 'helmet';
import { request } from 'http';
import supertest from 'supertest';
import app from '../index.js';

describe('POST /login', () => {
  describe('given a username and passwrod', () => {
    // should login into the datapase
    // should respond with a 200 status code
    // should specify html in the content type header
    test('should respond with a 200 status code', () => {
      const response = request(app).post('/login').send({
        username: 'rk1',
        password: 'loop',
      });
      expect(response.statusCode).toBe(200);
    });
  });

  describe('when username is missing', () => {
    // should respond with a status code 400
  });

  describe('when password is missing', () => {
    // should respond with a status code 400
  });
});
