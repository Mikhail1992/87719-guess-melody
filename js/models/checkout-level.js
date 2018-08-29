import {getRandomInt} from '../utils';

export const INITIAL_GAME = Object.freeze({
  points: 0,
  level: 0,
  lives: 3,
  time: 300
});

export const mocksTracks = [
  {
    artist: `Kevin MacLeod`,
    name: `Long Stroll`,
    image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    genre: `Jazz`
  },
  {
    artist: `Jingle Punks`,
    name: `In the Land of Rhinoplasty`,
    image: `https://i.vimeocdn.com/portrait/992615_300x300`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
    genre: `Rock`
  },
  {
    artist: `Audionautix`,
    name: `Travel Light`,
    image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
    genre: `Country`
  },
  {
    artist: `Riot`,
    name: `	Level Plane`,
    image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    genre: `R&B`
  },
  {
    artist: `Jingle Punks`,
    name: `Lucky Day`,
    image: `https://i.vimeocdn.com/portrait/992615_300x300`,
    src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    genre: `Pop`
  },
  {
    artist: `Quincas Moreira`,
    name: `Firefly`,
    image: `http://www.atribuna.com.br/fileadmin/_processed_/csm_Quincas-Moreira-Foto-Divulgacao_76d1a8b00e.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7`,
    genre: `Electronic`
  }
];

const levelQuestions = [
  {
    id: 1,
    title: `Выберите поп треки`,
    type: `tracks`,
    tracks: [mocksTracks[0], mocksTracks[1], mocksTracks[2], mocksTracks[4]],
    answers: [4]
  },
  {
    id: 2,
    title: `Выберите электро треки`,
    type: `tracks`,
    tracks: [mocksTracks[0], mocksTracks[1], mocksTracks[5], mocksTracks[3]],
    answers: [2]
  },
  {
    id: 3,
    title: `Выберите R&B треки`,
    type: `tracks`,
    tracks: [mocksTracks[2], mocksTracks[3], mocksTracks[4], mocksTracks[1]],
    answers: [1]
  },
  {
    id: 4,
    title: `Выберите рок треки`,
    type: `tracks`,
    tracks: [mocksTracks[1], mocksTracks[4], mocksTracks[2], mocksTracks[0]],
    answers: [0]
  },
  {
    id: 5,
    title: `Выберите джаз треки`,
    type: `tracks`,
    tracks: [mocksTracks[0], mocksTracks[1], mocksTracks[2], mocksTracks[3]],
    answers: [1]
  },
  {
    id: 6,
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [mocksTracks[1], mocksTracks[0], mocksTracks[2]],
    answers: [0]
  },
  {
    id: 7,
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [mocksTracks[1], mocksTracks[2], mocksTracks[4]],
    answers: [1]
  },
  {
    id: 8,
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [mocksTracks[5], mocksTracks[1], mocksTracks[3]],
    answers: [2]
  },
  {
    id: 9,
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [mocksTracks[1], mocksTracks[2], mocksTracks[4]],
    answers: [2]
  },
  {
    id: 10,
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [mocksTracks[0], mocksTracks[3], mocksTracks[5]],
    answers: [0]
  },
];

const generateLevel = (levelsData) => {
  const randomQuestion = getRandomInt(0, levelsData.length - 1);
  const currentQuestion = levelsData[randomQuestion];

  return currentQuestion;
};

export const levels = {
  'level-0': generateLevel(levelQuestions),
  'level-1': generateLevel(levelQuestions),
  'level-2': generateLevel(levelQuestions),
};

const checkoutLevel = (game, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level should be of type number`);
  }

  if (level < 0) {
    throw new Error(`Level should not be negative value`);
  }

  const newGame = Object.assign({}, game, {
    level
  });
  return newGame;
};
export default checkoutLevel;
