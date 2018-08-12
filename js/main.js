"use strict";

(() => {
  const KEY_CODE_LEFT = 37;
  const KEY_CODE_RIGHT = 39;
  const screenList = {
    'welcome': null,
    'game-genre': null,
    'game-artist': null,
    'result-success': null,
    'fail-time': null,
    'fail-tries': null,
    'modal-error': null,
    'modal-confirm': null
  };
  const app = document.querySelector(`.app`);
  const container = app.querySelector(`.main`);
  const arrows = `
    <div class="arrows__wrap">
      <style>
        .arrows__wrap {
          position: absolute;
          top: 135px;
          left: 50%;
          margin-left: -56px;
        }
        .arrows__btn {
          background: none;
          border: 2px solid white;
          padding: 5px 20px;
          color: white;
        }
      </style>
      <button class="arrows__btn arrows__btn_prev"><-</button>
      <button class="arrows__btn arrows__btn_next">-></button>
    </div>
  `;

  const setCacheContext = () => {
    Object.keys(screenList).forEach((item) => {
      screenList[item] = document.querySelector(`#${item}`).content;
    });
  };
  setCacheContext();

  let activeScreen = 0;
  const checkoutScreen = (screenNumber) => {
    const screenKey = Object.keys(screenList)[screenNumber];
    return screenList[screenKey].cloneNode(true);
  };

  const renderScreen = (node, screenNumber) => {
    node.innerHTML = ``;
    node.appendChild(checkoutScreen(screenNumber));
  };

  const renderPreviousScreen = () => {
    activeScreen = activeScreen > 0 ? --activeScreen : Object.keys(screenList).length - 1;
    renderScreen(container, activeScreen);
  };

  const renderNextScreen = () => {
    activeScreen = activeScreen < Object.keys(screenList).length - 1 ? ++activeScreen : 0;
    renderScreen(container, activeScreen);
  };

  const renderHTML = (parentNode, htmlCode) => {
    parentNode.insertAdjacentHTML(`beforeEnd`, htmlCode);
  };

  renderScreen(container, activeScreen);
  renderHTML(app, arrows);

  document.addEventListener(`keydown`, (event) => {
    if (event.keyCode === KEY_CODE_LEFT) {
      renderPreviousScreen();
    }
    if (event.keyCode === KEY_CODE_RIGHT) {
      renderNextScreen();
    }
  });

  const buttonPrev = document.querySelector(`.arrows__btn_prev`);
  buttonPrev.addEventListener(`click`, () => {
    renderPreviousScreen();
  });

  const buttonNext = document.querySelector(`.arrows__btn_next`);
  buttonNext.addEventListener(`click`, () => {
    renderNextScreen();
  });
})();
