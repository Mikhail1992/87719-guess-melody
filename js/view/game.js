import gameArtistElement from './game-artist';
import gameGenreElement from './game-genre';
import {getElementFromTemplate, showScreen} from '../utils';
import {levels, INITIAL_GAME} from '../models/checkout-level';
import header from './header';
import welcomeElement from './welcome';

const renderScreen = (state) => {
  const currentLevel = levels[`level-${state.level}`];
  const gameTemplate = currentLevel.type === `tracks` ? gameGenreElement : gameArtistElement;
  const game = getElementFromTemplate(gameTemplate(currentLevel));
  const container = game.querySelector(`.game__screen`);
  container.insertAdjacentElement(`beforebegin`, getElementFromTemplate(header(state)));
  return game;
};

const render = renderScreen(INITIAL_GAME);
const buttonBack = render.querySelector(`.game__back`);
buttonBack.addEventListener(`click`, () => {
  showScreen(welcomeElement);
});

export default render;
