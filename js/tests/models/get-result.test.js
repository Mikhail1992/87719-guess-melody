import {assert} from 'chai';
import getResult from '../../models/get-result';

const statistics1 = [14, 8, 12, 13, 5];
const playerResult1 = {
  points: 10,
  lives: 1,
  time: 2e4,
  isWin: true
};

const statistics2 = [12, 18, 10, 5, 5];
const playerResult2 = {
  points: 10,
  lives: 0,
  time: 2e4,
  isWin: false
};

const statistics3 = [16, 13, 4, 12, 19, 12];
const playerResult3 = {
  points: 15,
  lives: 2,
  time: 0,
  isWin: false
};

describe(`Displays the results of the player`, () => {
  it(`should return results of the player`, () => {
    assert.equal(getResult(statistics1, playerResult1), `Вы заняли 3 место из 6 игроков. Это лучше, чем у 50% игроков`);
    assert.equal(getResult(statistics2, playerResult2), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
    assert.equal(getResult(statistics3, playerResult3), `Время вышло! Вы не успели отгадать все мелодии`);
  });
});
