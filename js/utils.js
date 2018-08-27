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
