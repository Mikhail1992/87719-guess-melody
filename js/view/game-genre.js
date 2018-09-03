import {INITIAL_GAME} from '../models/checkout-level';

const gameGenreElement = (data = INITIAL_GAME) => `
  <section class="game game--genre">
    <section class="game__screen">
      <h2 class="game__title">${data.title}</h2>
      <form class="game__tracks">

        ${data.setDestination && data.setDestination((track, index) => `
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
        `)}

        <button class="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  </section>
`;

export default gameGenreElement;
