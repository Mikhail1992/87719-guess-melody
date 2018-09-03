export const INITIAL_GAME = Object.freeze({
  points: 0,
  level: 0,
  lives: 3,
  time: 3e5
});
export const currentGame = Object.assign({}, INITIAL_GAME);
const mocksTracks = [
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

export const levelQuestions = [
  {
    title: `Выберите поп треки`,
    type: `tracks`,
    tracks: [
      mocksTracks[0],
      mocksTracks[1],
      mocksTracks[2],
      Object.assign({}, mocksTracks[4], {correct: true})
    ],
  },
  {
    title: `Выберите электро треки`,
    type: `tracks`,
    tracks: [
      mocksTracks[0],
      mocksTracks[1],
      Object.assign({}, mocksTracks[5], {correct: true}),
      mocksTracks[3]
    ],
  },
  {
    title: `Выберите R&B треки`,
    type: `tracks`,
    tracks: [
      mocksTracks[2],
      Object.assign({}, mocksTracks[3], {correct: true}),
      mocksTracks[4],
      mocksTracks[1]
    ],
  },
  {
    title: `Выберите рок треки`,
    type: `tracks`,
    tracks: [
      Object.assign({}, mocksTracks[1], {correct: true}),
      mocksTracks[4],
      mocksTracks[2],
      mocksTracks[0]
    ],
  },
  {
    title: `Выберите джаз треки`,
    type: `tracks`,
    tracks: [
      mocksTracks[0],
      Object.assign({}, mocksTracks[1], {correct: true}),
      mocksTracks[2],
      mocksTracks[3]
    ],
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [
      Object.assign({}, mocksTracks[1], {correct: true}),
      mocksTracks[0],
      mocksTracks[2]
    ],
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [
      mocksTracks[1],
      Object.assign({}, mocksTracks[2], {correct: true}),
      mocksTracks[4]
    ],
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [
      mocksTracks[5],
      mocksTracks[1],
      Object.assign({}, mocksTracks[3], {correct: true})
    ],
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [
      mocksTracks[1],
      mocksTracks[2],
      Object.assign({}, mocksTracks[4], {correct: true})
    ],
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [
      Object.assign({}, mocksTracks[0], {correct: true}),
      mocksTracks[3],
      mocksTracks[5]
    ],
  },
];

export const getNextLevel = (currentLevel) => {
  return levelQuestions[currentLevel];
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
