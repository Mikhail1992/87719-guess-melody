const getPoints = (game, spendTime, isCorrect) => {
  if (spendTime < 0) {
    throw new Error(`Time should not be negative value`);
  }

  if (!game.lives) {
    return -1;
  }

  let points = 1;
  if (spendTime < 3e4 && isCorrect) {
    points = 2;
  } else if (!isCorrect) {
    points = -2;
  }
  const newPoints = game.points + points;
  const newGame = Object.assign({}, game, {
    points: newPoints
  });
  return newGame;
};

export default getPoints;
