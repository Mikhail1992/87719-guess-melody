export const getElementFromTemplate = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element;
};

export const showScreen = (element) => {
  const mainElement = document.querySelector(`.app`);
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

export const sortDesc = (arr) => {
  return arr.sort((a, b) => a - b);
};

export const getNumberFirstZero = (num) => {
  if (typeof num !== `number`) {
    throw new Error(`num is not a number`);
  }

  return num < 10 ? `0${num}` : num;
};

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
