import {getElementFromTemplate, showScreen} from '../utils';
import resultSuccessElement from './result-success';
import failTimeElement from './fail-time';
import failTriesElement from './fail-tries';

const gameArtistElement = (data = {}) => `
  <section class="game game--artist">
    <section class="game__screen">
      <h2 class="game__title">Кто исполняет эту песню?</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio></audio>
      </div>
      <form class="game__artist">

        ${data.setDestination && data.setDestination((artist, index) => `
          <div class="artist">
            <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${index}" id="answer-${index}">
            <label class="artist__name" for="answer-${index}">
              <img class="artist__picture" src="${artist.image}" alt="${artist.artist}">
              ${artist.artist}
            </label>
          </div>
        `)}

      </form>
    </section>
  </section>
`;

const gameArtist = getElementFromTemplate(gameArtistElement());
const form = gameArtist.querySelector(`.game__artist`);
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
