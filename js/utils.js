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
  return arr.sort((a, b) => {
    if (a > b) {
      return -1;
    }

    if (a < b) {
      return 1;
    }

    return 0;
  });
};
