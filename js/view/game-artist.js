import {INITIAL_GAME} from '../models/checkout-level';

const gameArtistElement = (data = INITIAL_GAME) => `
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

export default gameArtistElement;
