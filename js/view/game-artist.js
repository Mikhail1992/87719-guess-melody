import {getElementFromTemplate, showScreen} from '../utils';
import {INITIAL_GAME, mocksTracks} from '../models/checkout-level';
import header from './header';
import resultSuccessElement from './result-success';
import failTimeElement from './fail-time';
import failTriesElement from './fail-tries';
import welcomeElement from './welcome';

const gameArtistElement = getElementFromTemplate(`
  <section class="game game--artist">
    <section class="game__screen">
      <h2 class="game__title">Кто исполняет эту песню?</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio></audio>
      </div>
      <form class="game__artist">

        ${mocksTracks.slice(0, 3).map((track, index) => `
          <div class="artist">
            <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${index}" id="answer-${index}">
            <label class="artist__name" for="answer-${index}">
              <img class="artist__picture" src="${track.image}" alt="${track.artist}">
              ${track.artist}
            </label>
          </div>
        `).join(``)}

      </form>
    </section>
  </section>
`);

const container = gameArtistElement.querySelector(`.game__screen`);
container.insertAdjacentElement(`beforebegin`, getElementFromTemplate(header(INITIAL_GAME)));

const form = gameArtistElement.querySelector(`.game__artist`);
const buttonBack = gameArtistElement.querySelector(`.game__back`);
buttonBack.addEventListener(`click`, () => {
  showScreen(welcomeElement);
});

const resultScreens = [resultSuccessElement, failTimeElement, failTriesElement];
const randomResultScreen = () => resultScreens[Math.floor(Math.random() * resultScreens.length)];

form.addEventListener(`click`, (event) => {
  event.preventDefault();
  if (event.target.tagName === `IMG`) {
    form.reset();
    showScreen(randomResultScreen());
  }
});

export default gameArtistElement;
