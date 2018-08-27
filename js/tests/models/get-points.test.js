import {assert} from 'chai';
import getPoints from '../../models/get-points';

const answersTest1 = [
  {
    isSuccess: true,
    time: 4e4
  },
  {
    isSuccess: true,
    time: 1e4
  },
  {
    isSuccess: false,
    time: 1e4
  },
  {
    isSuccess: true,
    time: 4e4
  },
  {
    isSuccess: true,
    time: 1e4
  },
  {
    isSuccess: false,
    time: 1e4
  },
  {
    isSuccess: false,
    time: 1e4
  },
  {
    isSuccess: true,
    time: 4e4
  },
  {
    isSuccess: true,
    time: 1e4
  },
  {
    isSuccess: true,
    time: 1e4
  },
];

const answersTest2 = [
  {
    isSuccess: true,
    time: 4e4
  },
  {
    isSuccess: true,
    time: 5e4
  },
  {
    isSuccess: true,
    time: 35e3
  },
  {
    isSuccess: true,
    time: 4e4
  },
  {
    isSuccess: true,
    time: 5e4
  },
  {
    isSuccess: true,
    time: 43e3
  },
  {
    isSuccess: true,
    time: 4e4
  },
  {
    isSuccess: true,
    time: 5e4
  },
  {
    isSuccess: true,
    time: 31e3
  },
  {
    isSuccess: true,
    time: 33e3
  }
];

const answersTest3 = [
  {
    isSuccess: true,
    time: 2e4
  },
  {
    isSuccess: true,
    time: 1e4
  },
  {
    isSuccess: true,
    time: 12e3
  },
  {
    isSuccess: true,
    time: 1e4
  },
  {
    isSuccess: true,
    time: 2e4
  },
  {
    isSuccess: true,
    time: 13e3
  },
  {
    isSuccess: true,
    time: 2e4
  },
  {
    isSuccess: true,
    time: 1e4
  },
  {
    isSuccess: true,
    time: 15e3
  },
  {
    isSuccess: true,
    time: 19e3
  }
];

describe(`Scoring player points`, () => {
  it(`should return points scored`, () => {
    assert.equal(getPoints(answersTest1), -1);
    assert.equal(getPoints(answersTest2), 10);
    assert.equal(getPoints(answersTest3), 20);
  });
});
