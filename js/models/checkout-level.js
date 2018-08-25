export const INITIAL_GAME = Object.freeze({
  points: 0,
  level: 0,
  lives: 3,
  time: 100
});

const checkoutLevel = (game, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level should be of type number`);
  }

  if (level < 0) {
    throw new Error(`Level should not be negative value`);
  }

  const newGame = Object.assign({}, game, {
    level
  });
  return newGame;
};
export default checkoutLevel;
