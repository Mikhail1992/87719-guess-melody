import {assert} from 'chai';
import calculateLives from '../../models/calculate-lives';
import {INITIAL_GAME} from '../../models/checkout-level';

describe(`Calculate the lives count`, () => {
  it(`should return lives count`, () => {
    assert.equal(calculateLives(INITIAL_GAME, 1).lives, 2);
    assert.equal(calculateLives(INITIAL_GAME, 2).lives, 1);
    assert.equal(calculateLives(INITIAL_GAME, 3).lives, 0);
  });

  it(`should not be more then initial value`, () => {
    assert.throws(() => calculateLives(INITIAL_GAME, 4).lives, /Lives should not be more then initial value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => calculateLives(INITIAL_GAME, []).lives, /Lives should be of type number/);
  });
});
