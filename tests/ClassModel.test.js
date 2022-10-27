const classModel = require('../models/ClassModel.js');

describe('When professor login correct', () => {
  beforeAll(() => {
    classModel.find = jest.fn().mockResolvedValue([{
      _id: '5dbff32e3634faec716b7f5ab63a5d140',
      name: 'Dr. OK',
      user: 'ok1',
      __v: 0,
    },
    ]);
  });

  it('will return classes', async () => {
    await expect(classModel.findProfClasses('ok1')).toBeTruthy();
  });
});

describe('When student login correct', () => {
  beforeAll(() => {
    classModel.find = jest.fn().mockResolvedValue([{
      _id: '633c833417b7a7d6a6fec892',
      name: 'Rocio Krebs',
      user: 'rk1',
      __v: 0,
    },
    ]);
  });

  it('will return classes', async () => {
    await expect(classModel.findStudentClasses('rk1')).toBeTruthy();
  });
});
