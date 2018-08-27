import {assert} from 'chai';
import checkoutLevel, {INITIAL_GAME} from '../../models/checkout-level';

describe(`Checkout current level`, () => {
  it(`should update level of the game`, () => {
    assert.equal(checkoutLevel(INITIAL_GAME, 1).level, 1);
    assert.equal(checkoutLevel(INITIAL_GAME, 2).level, 2);
    assert.equal(checkoutLevel(INITIAL_GAME, 10).level, 10);
    assert.equal(checkoutLevel(INITIAL_GAME, 102).level, 102);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => checkoutLevel(INITIAL_GAME, -1).level, /Level should not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => checkoutLevel(INITIAL_GAME, []).level, /Level should be of type number/);
  });
});
