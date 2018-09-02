import gameArtistElement from './game-artist';
import gameGenreElement from './game-genre';
import {getElementFromTemplate} from '../utils';
import {getNextLevel} from '../models/checkout-level';
import header from './header';

export const renderScreen = (state) => {
  const currentLevel = getNextLevel(state.level);
  const gameTemplate = currentLevel.type === `tracks` ? gameGenreElement : gameArtistElement;

  const setDestination = (template) => {
    const listTemplates = currentLevel[currentLevel.type].map((item, index) => {
      return template(item, index);
    }).join(``);

    return listTemplates;
  };

  const templateData = Object.assign({}, currentLevel, {setDestination});
  const game = getElementFromTemplate(gameTemplate(templateData));
  const container = game.querySelector(`.game__screen`);
  container.insertAdjacentElement(`beforebegin`, header(state));
  const form = game.querySelector(`form`);

  form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    renderScreen(Object.assign({}, state, {'level': state.level + 1}));
  });

  return game;
};
