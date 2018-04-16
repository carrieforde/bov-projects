/* eslint-disable */
const sass = require('main.scss');

import { GameOfLife } from 'game-of-life';

document.addEventListener('click', event => {

  const target = event.target.closest('#startGame');

  if (!target) {
    return false;
  }

  const boardSize = document.getElementById('boardSize').value,
        cellSize  = document.getElementById('cellSize').value,
        endGame   = document.getElementById('endGame'),
        form      = document.getElementById('gameSettings');

  document.body.classList.add('game-started');
  endGame.classList.add('is-visible');
  form.classList.add('is-hidden');

  new GameOfLife(boardSize, cellSize);
});
