const countTime = (game, time) => {
  if (typeof time !== `number`) {
    throw new Error(`Time should be of type number`);
  }

  if (time < 0) {
    throw new Error(`Time should not be negative value`);
  }

  const newTime = game.time - time;
  const newGame = Object.assign({}, game, {
    time: newTime
  });
  return newGame;
};
export default countTime;
