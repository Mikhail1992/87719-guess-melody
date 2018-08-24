import {assert} from 'chai';
import {INITIAL_GAME} from '../../models/checkout-level';
import countTime from '../../models/count-time';

describe(`Calculate time`, () => {
  it(`should return time count`, () => {
    assert.equal(countTime(INITIAL_GAME, 100).time, 0);
    assert.equal(countTime(INITIAL_GAME, 0).time, 100);
    assert.equal(countTime(INITIAL_GAME, 20).time, 80);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => countTime(INITIAL_GAME, -1).time, /Time should not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => countTime(INITIAL_GAME, []).time, /Time should be of type number/);
  });
});
