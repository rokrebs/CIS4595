const pointModel = require('../models/PointModel');

describe('Points functionality', () => {
  beforeAll(() => {
    pointModel.findOne = jest.fn().mockResolvedValue([{
        _id: '3479b412a21459dafed81fa2',
        user: 'rk1',
        points: 0,
        __v: 0,
    },
    ]);
    pointModel.updateOne = jest.fn().mockResolvedValue([{
        _id: '3479b412a21459dafed81fa2',
        user: 'rk1',
        points: 5,
        __v: 0,
    }])

  });

  it('will add points to student', async () => {
    const expected = [{
        _id: '3479b412a21459dafed81fa2',
        user: 'rk1',
        points: 0,
        __v: 0,
    },
    ];
    const expected1 =  [{
        _id: '3479b412a21459dafed81fa2',
        user: 'rk1',
        points: 5,
        __v: 0,
    },
    ];
    await expect(pointModel.findOne('rk1')).resolves.toEqual(expected);
    await expect(pointModel.updateOne('rk1',5)).resolves.toEqual(expected1);
  });
});

