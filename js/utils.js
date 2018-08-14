export const getElementFromTemplate = (template) => {
  return document.createRange().createContextualFragment(template);
};

const mainElement = document.querySelector(`.app`);
export const showScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};
