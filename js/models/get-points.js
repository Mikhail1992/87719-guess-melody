const getPoints = (listAnswers, notes = 3) => {
  if (listAnswers.length < 10 || !notes) {
    return -1;
  }

  let points = 1;
  return listAnswers.reduce((sum, item) => {
    if (item.isSuccess && item.time <= 3e4) {
      points = 2;
    } else if (!item.isSuccess) {
      points = -2;
      notes--;
    }

    return sum + points;
  }, 0);
};

export default getPoints;
