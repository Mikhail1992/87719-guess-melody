import {sortDesc} from '../utils';
import {levelQuestions} from './checkout-level';

const getUserPlace = (statistics, userPoints) => {
  let userPlace = 1;
  statistics.forEach((item, index) => {
    if (item === userPoints) {
      userPlace = index + 1;
    }
  });
  return userPlace;
};

const getResult = (statistics, playerResult) => {
  const {points, lives, time, level} = playerResult;

  let message = ``;
  if (lives > 0 && level === levelQuestions.length - 1 && time > 0) {
    const usersCount = statistics.length + 1;
    const fullStatistics = sortDesc([points, ...statistics]);
    const userPlace = getUserPlace(fullStatistics, points);
    const statisticResult = (usersCount - userPlace) * 100 / fullStatistics.length;

    message = `Вы заняли ${userPlace} место из ${usersCount} игроков. Это лучше, чем у ${statisticResult}% игроков`;
  } else if (time <= 0) {
    message = `Время вышло! Вы не успели отгадать все мелодии`;
  } else if (lives <= 0) {
    message = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }
  return message;
};

export default getResult;
