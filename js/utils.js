export const getElementFromTemplate = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element;
};

const mainElement = document.querySelector(`.app`);
export const showScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};
