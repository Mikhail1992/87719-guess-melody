import {getElementFromTemplate, showScreen} from '../utils';
import {INITIAL_GAME, mocksTracks} from '../models/checkout-level';
import header from './header';
import gameArtistElement from './game-artist';
import welcomeElement from './welcome';

const gameGenreElement = getElementFromTemplate(`
  <section class="game game--genre">
    <section class="game__screen">
      <h2 class="game__title">Выберите инди-рок треки</h2>
      <form class="game__tracks">

        ${mocksTracks.slice(0, 4).map((track, index) => `
          <div class="track">
            <button class="track__button track__button--play" type="button"></button>
            <div class="track__status">
              <audio src="${track.src}"></audio>
            </div>
            <div class="game__answer">
              <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-${index}" id="answer-${index}">
              <label class="game__check" for="answer-${index}">Отметить</label>
            </div>
          </div>
        `).join(``)}

        <button class="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  </section>
`);

const container = gameGenreElement.querySelector(`.game__screen`);
container.insertAdjacentElement(`beforebegin`, getElementFromTemplate(header(INITIAL_GAME)));

const gameInput = gameGenreElement.querySelectorAll(`.game__input`);
const buttonSubmit = gameGenreElement.querySelector(`.game__submit`);
const handleDisable = () => {
  let isDisabled = true;
  gameInput.forEach((input) => {
    if (input.checked) {
      isDisabled = !input.checked;
    }
  });

  buttonSubmit.disabled = isDisabled;
};

const gameTracks = gameGenreElement.querySelector(`.game__tracks`);
gameTracks.addEventListener(`click`, (event) => {
  if (event.target.tagName === `INPUT`) {
    handleDisable();
  }
});

const form = gameGenreElement.querySelector(`.game__tracks`);
const buttonBack = gameGenreElement.querySelector(`.game__back`);
buttonBack.addEventListener(`click`, () => {
  form.reset();
  showScreen(welcomeElement);
});

buttonSubmit.addEventListener(`click`, () => {
  event.preventDefault();
  form.reset();
  showScreen(gameArtistElement);
});

handleDisable();

export default gameGenreElement;
