import {sortDesc} from '../utils';

const getResult = (statistics, playerResult) => {
  const {points, notes, time, isWin} = playerResult;

  let message = ``;
  if (isWin) {
    const usersCount = statistics.length + 1;
    const fullStatistics = sortDesc([points, ...statistics]);
    let userPlace = 1;
    fullStatistics.forEach((item, index) => {
      if (item === points) {
        userPlace = index;
      }
    });
    const statisticResult = (usersCount - userPlace) * 100 / fullStatistics.length;
    message = `Вы заняли ${userPlace} место из ${usersCount} игроков. Это лучше, чем у ${statisticResult}% игроков`;
  } else if (!time) {
    message = `Время вышло! Вы не успели отгадать все мелодии`;
  } else if (!notes) {
    message = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }
  return message;
};

export default getResult;
