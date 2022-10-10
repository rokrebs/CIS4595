import request from 'supertest';
import * as jest from '@jest/globals';
import { create } from 'node:domain';
import { body } from 'express-validator';
import login from '../models/LoginModel.js';

const loginUser = jest.fn();

describe('given user name and password', () => {
  test('should find the user name and password in the database', async () => {
    const bodyData = [
      { username: 'username', password: 'password' },
      { username: 'username2', password: 'password2' },
      { username: 'username3', password: 'password3' },
    ];
    for (const body of bodyData) {
      loginUser.mockReset();
      expect(loginUser.mock.calls.length).toBe(1);
      expect(loginUser.mock.calls[0][0]).toBe(body.username);
      expect(loginUser.mock.calls[0][1]).toBe(body.password);
    }
  });
});
