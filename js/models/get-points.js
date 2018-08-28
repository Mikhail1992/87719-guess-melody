const getPoints = (listAnswers, lives = 3) => {
  if (listAnswers.length < 10 || !lives) {
    return -1;
  }

  let points = 1;
  return listAnswers.reduce((sum, item) => {
    if (item.isSuccess && item.time <= 3e4) {
      points = 2;
    } else if (!item.isSuccess) {
      points = -2;
      lives--;
    }

    return sum + points;
  }, 0);
};

export default getPoints;
