'use strict';

(function () {
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
          border: 2px solid black;
          padding: 5px 20px;
        }
      </style>
      <button class="arrows__btn"><-</button>
      <button class="arrows__btn">-></button>
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

  document.addEventListener(`keydown`, function (event) {
    if (event.keyCode === KEY_CODE_LEFT) {
      renderPreviousScreen();
    }
    if (event.keyCode === KEY_CODE_RIGHT) {
      renderNextScreen();
    }
  });

  const buttonArrowsWrapper = document.querySelector(`.arrows__wrap`);
  buttonArrowsWrapper.addEventListener(`click`, function (event) {
    if (event.target.innerText === `<-`) {
      renderPreviousScreen();
    }
    if (event.target.innerText === `->`) {
      renderNextScreen();
    }
  });
})();
