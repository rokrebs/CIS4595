const pointModel = require('../models/PointModel.js');

describe('Points functionality', () => {
  beforeAll(() => {
    pointModel.findOne = jest.fn().mockReturnValueOnce([{
      _id: '3479b412a21459dafed81fa2',
      user: 'rk1',
      points: 0,
      __v: 0,
    },
    ]);
    pointModel.updateOne = jest.fn().mockReturnValueOnce([{
      _id: '3479b412a21459dafed81fa2',
      user: 'rk1',
      points: 5,
      __v: 0,
    }]);
  });

  it('will add points to student', async () => {
    await expect(pointModel.addPoints('rk1', 5)).toBeTruthy();
  });
});
