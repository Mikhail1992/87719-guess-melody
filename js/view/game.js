import gameArtistElement from './game-artist';
import gameGenreElement from './game-genre';
import {getElementFromTemplate, showScreen} from '../utils';
import checkoutLevel, {getNextLevel, currentGame, INITIAL_GAME, levelQuestions} from '../models/checkout-level';
import header from './header';
import resultSuccessElement from './result-success';
import getResult from '../models/get-result';
import welcomeElement from './welcome';
import countTime from '../models/count-time';
import getPoints from '../models/get-points';
import calculateLives from '../models/calculate-lives';

const container = document.querySelector(`.app`);
export const renderScreen = (state) => {
  const startTime = new Date().valueOf();
  const currentLevel = getNextLevel(state.level);
  const gameTemplate = currentLevel.type === `tracks` ? gameGenreElement : gameArtistElement;
  const setDestination = (template) => {
    const listTemplates = currentLevel[currentLevel.type].map((item, index) => {
      return template(item, index);
    }).join(``);

    return listTemplates;
  };

  container.innerHTML = ``;
  if (state.level < levelQuestions.length - 1) {
    const templateData = Object.assign({}, currentLevel, {setDestination});
    container.appendChild(header(currentGame));
    container.appendChild(getElementFromTemplate(gameTemplate(templateData)));
  } else {
    container.appendChild(getElementFromTemplate(resultSuccessElement(getResult([], currentGame))));
    currentGame.level = INITIAL_GAME.level;
  }

  const checkAnswer = () => {
    const inputs = form.querySelectorAll(`.game__input`);
    const checkedInputs = [...inputs].filter((input) => input.checked);
    const answerIndexes = checkedInputs.map((input) => +input.defaultValue.split(`-`)[1]);
    const correctAnswers = currentLevel[currentLevel.type].filter((item) => item.correct);
    const isAllCorrect = answerIndexes.every((item) => currentLevel[currentLevel.type][item].correct);
    const spendTime = new Date().valueOf() - startTime;

    let newState = countTime(currentGame, spendTime);
    if (checkedInputs.length === correctAnswers.length && isAllCorrect) {
      newState = getPoints(newState, spendTime, true);
    } else {
      newState = calculateLives(newState, 1);
      newState = getPoints(newState, spendTime, false);
    }

    renderScreen(checkoutLevel(newState, ++currentGame.level));
  };

  const gameInput = container.querySelectorAll(`.game__input`);
  const form = container.querySelector(`form`);
  const artistInput = container.querySelector(`.game__artist`);
  if (artistInput) {
    artistInput.addEventListener(`change`, (evt) => {
      if (evt.target.tagName === `INPUT`) {
        checkAnswer();
      }
    });
  }

  if (form) {
    form.addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      checkAnswer();
    });
  }

  const buttonBack = container.querySelector(`.game__back`);
  if (buttonBack) {
    buttonBack.addEventListener(`click`, () => {
      showScreen(welcomeElement);
    });
  }

  const buttonSubmit = container.querySelector(`.game__submit`);
  const handleDisable = () => {
    let isDisabled = true;
    gameInput.forEach((input) => {
      if (input.checked) {
        isDisabled = !input.checked;
      }
    });

    buttonSubmit.disabled = isDisabled;
  };

  const gameTracks = container.querySelector(`.game__tracks`);
  if (gameTracks) {
    gameTracks.addEventListener(`click`, (evt) => {
      if (evt.target.tagName === `INPUT`) {
        handleDisable();
      }
    });
    handleDisable();
  }

  const togglePlay = (audio) => {
    if (audio.classList.contains(`active`)) {
      audio.classList.remove(`active`);
      audio.pause();
    } else {
      audio.classList.add(`active`);
      audio.play();
    }
  };

  const toggleButtonPlay = (currentBtnNode) => {
    if (currentBtnNode.classList.contains(`track__button--play`)) {
      currentBtnNode.classList.remove(`track__button--play`);
      currentBtnNode.classList.add(`track__button--pause`);
    } else {
      currentBtnNode.classList.add(`track__button--play`);
      currentBtnNode.classList.remove(`track__button--pause`);
    }
  };

  if (gameTracks) {
    gameTracks.addEventListener(`click`, (evt) => {
      if (evt.target.tagName === `BUTTON`) {
        const audio = evt.target.closest(`.track`).querySelector(`audio`);
        togglePlay(audio);
        toggleButtonPlay(evt.target);
      }
    });
  }

  const restartButton = document.querySelector(`.result__replay`);
  if (restartButton) {
    restartButton.addEventListener(`click`, () => {
      showScreen(welcomeElement);
    });
  }
};
