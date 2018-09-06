import {getNumberFirstZero} from '../utils';
import {getElementFromTemplate} from '../utils';
import {INITIAL_GAME} from '../models/checkout-level';

const header = (data = INITIAL_GAME) => getElementFromTemplate(`
  <header class="game__header">
    <a class="game__back" href="#">
      <span class="visually-hidden">Сыграть ещё раз</span>
      <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
    </a>

    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle class="timer__line" cx="390" cy="390" r="370" style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center" />
    </svg>

    <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
      <span class="timer__mins">${getNumberFirstZero(Math.floor(data.time / 60 / 1000))}</span>
      <span class="timer__dots">:</span>
      <span class="timer__secs">${getNumberFirstZero(data.time - Math.floor(data.time / 60) * 60)}</span>
    </div>

    <div class="game__mistakes">
      ${new Array(data.lives).fill(`<div class="wrong"></div>`).join(``)}
    </div>
  </header>
`);

export default header;
