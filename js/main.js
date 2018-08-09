'use strict';

(() => {
  const KEY_CODE_LEFT = 37;
  const KEY_CODE_RIGHT = 39;
  const screenList = [
    `welcome`,
    `game-genre`,
    `game-artist`,
    `result-success`,
    `fail-time`,
    `fail-tries`,
    `modal-error`,
    `modal-confirm`
  ];
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

  let activeScreen = 0;
  const checkoutScreen = (screenNumber) => {
    const screen = document.querySelector(`#${screenList[screenNumber]}`);
    const clonedScreen = screen.cloneNode(true);
    return clonedScreen.content;
  };

  const renderScreen = (node, screenNumber) => {
    node.innerHTML = ``;
    node.appendChild(checkoutScreen(screenNumber));
  };

  const renderPreviousScreen = () => {
    if (activeScreen > 0) {
      activeScreen--;
      renderScreen(container, activeScreen);
    }
  };

  const renderNextScreen = () => {
    if (activeScreen < screenList.length - 1) {
      activeScreen++;
      renderScreen(container, activeScreen);
    }
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
