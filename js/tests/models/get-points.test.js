import {assert} from 'chai';
import getPoints from '../../models/get-points';
import {INITIAL_GAME} from '../../models/checkout-level';

describe(`Scoring player points`, () => {
  it(`should return points scored`, () => {
    assert.equal(getPoints(INITIAL_GAME, 1e4, true).points, 2);
    assert.equal(getPoints(INITIAL_GAME, 2e4, false).points, -2);
    assert.equal(getPoints(INITIAL_GAME, 4e4, true).points, 1);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => getPoints(INITIAL_GAME, -1, true).points, /Time should not be negative value/);
  });
});
