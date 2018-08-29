import {getElementFromTemplate, showScreen} from '../utils';
import gameArtistElement from './game-artist';

const gameGenreElement = (data = {}) => `
  <section class="game game--genre">
    <section class="game__screen">
      <h2 class="game__title">Выберите инди-рок треки</h2>
      <form class="game__tracks">

        ${data.tracks && data.tracks.map((track, index) => `
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
`;

const gameGenre = getElementFromTemplate(gameGenreElement());
const gameInput = gameGenre.querySelectorAll(`.game__input`);
const buttonSubmit = gameGenre.querySelector(`.game__submit`);
const handleDisable = () => {
  let isDisabled = true;
  gameInput.forEach((input) => {
    if (input.checked) {
      isDisabled = !input.checked;
    }
  });

  buttonSubmit.disabled = isDisabled;
};

const gameTracks = gameGenre.querySelector(`.game__tracks`);
gameTracks.addEventListener(`click`, (event) => {
  if (event.target.tagName === `INPUT`) {
    handleDisable();
  }
});

buttonSubmit.addEventListener(`click`, () => {
  event.preventDefault();
  gameTracks.reset();
  showScreen(gameArtistElement);
});

handleDisable();

export default gameGenreElement;
