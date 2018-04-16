(function($) {
  'use strict';

  let neighbors = {
        0: [1, 3, 4],
        1: [0, 2, 3, 4, 5],
        2: [1, 4, 5],
        3: [0, 1, 4, 6, 7],
        4: [0, 1, 2, 3, 5, 6, 7, 8],
        5: [1, 2, 4, 7, 8],
        6: [3, 4, 7],
        7: [3, 4, 5, 6, 8],
        8: [4, 5, 7]
      },
      board = {},
      winner;

  /**
   * Check whether the target space is free.
   *
   * @param   {string}  target The target space element.
   * @returns {boolean}        Whether the target space is free.
   */
  function isSpaceFree(target) {
    const $target = $(target);

    if ($target.closest('.space').hasClass('is-occupied')) {
      return false;
    }

    return true;
  }

  /**
   * Gets the number of open spaces left on the board.
   *
   * @returns {number} The number of open spaces.
   */
  function getNumberAvailableSpaces() {
    return 9 - $('.is-occupied').length;
  }

  /**
   * Chooses any random open space on the board.
   *
   * @returns {number} The index of the chosen space.
   */
  function heavenMode() {
    const $spaces = $('.space'),
      target = getRandomNum(0, 8);

    if (isSpaceFree($spaces.get(target))) {
      playO(target);
      return target;
    }

    heavenMode();
  }

  function updateAvailablePlays(played) {
    for (const p in neighbors) {
      for (let i = 0; i < neighbors[p].length; i++) {
        if (neighbors[p][i] === played) {
          neighbors[p].splice(neighbors[p].indexOf(played), 1);
        }
      }
    }
  }

  /**
   * Chooses a random spot around the X piece played.
   *
   * @param   {number} xPlayed The index of the x-piece's space.
   * @returns {number}         The index of the chosen space.
   */
  function hellMode(xPlayed) {
    const $spaces = $('.space');

    let target;

    target = neighbors[xPlayed][getRandomNum(0, neighbors[xPlayed].length)];

    if (isSpaceFree($spaces.get(target))) {
      playO(target);
      delete neighbors[xPlayed];
      return target;
    }

    hellMode(xPlayed);
  }

  /**
   * Plays an X piece.
   *
   * @param   {string}  target The target space.
   * @returns {boolean}        Whether the piece was played.
   */
  function playX(target) {
    const $target = $(target),
      $piece = $('<div>').addClass('piece x-piece'),
      pieceIndex = $('.space').index($target);

    if (!isSpaceFree($target)) {
      return false;
    }

    $target.addClass('is-occupied');
    $piece.appendTo($target);
    board[pieceIndex] = 'X';
    updateAvailablePlays(pieceIndex);

    if (getWinner()) {
      declareWinner();
      return false;
    }

    if (getRandomNum(0, 1) === 0) {
      hellMode(pieceIndex);
    } else {
      heavenMode();
    }

    return true;
  }

  /**
   * Plays an O piece.
   *
   * @returns {boolean} Whether the play was successful.
   */
  function playO(target) {
    const $spaces = $('.space'),
      $target = $($spaces.get(target)),
      $piece = $('<div>').addClass('piece o-piece');

    delete neighbors[target];
    updateAvailablePlays(target);

    $target.addClass('is-occupied');
    board[target] = 'O';
    setTimeout(() => {
      $piece.appendTo($target);
    }, 300);

    if (getWinner()) {
      declareWinner();
      return false;
    }

    return true;
  }

  /**
   * Generate a random number within a range of given numbers (inclusive).
   *
   * @param {number} min The smallest number.
   * @param {number} max The largest number.
   * @returns            The random number.
   */
  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Determines if there is a winner.
   *
   * @returns {null|string} The winner or null if there are still pieces to play.
   */
  function getWinner() {
    if (board[0] === board[1] && board[1] === board[2]) {
      winner = board[0];
    }

    if (board[3] === board[4] && board[4] === board[5]) {
      winner = board[3];
    }

    if (board[6] === board[7] && board[7] === board[8]) {
      winner = board[6];
    }

    if (board[0] === board[3] && board[3] === board[6]) {
      winner = board[0];
    }

    if (board[1] === board[4] && board[4] === board[7]) {
      winner = board[1];
    }

    if (board[2] === board[5] && board[5] === board[8]) {
      winner = board[2];
    }

    if (board[0] === board[4] && board[4] === board[8]) {
      winner = board[0];
    }

    if (board[2] === board[4] && board[4 === board[6]]) {
      winner = board[2] + ' wins!';
    }

    if (!winner) {
      if (getNumberAvailableSpaces() === 0) {
        return (winner = 'tie');
      }

      return null;
    }

    if (winner === 'tie') {
      return `It's a ${winner}!`;
    }

    return `${winner} wins the game!`;
  }

  /**
   * Adds a message to the screen declaring the winner.
   *
   */
  function declareWinner() {
    const $winner = $('<h2>')
        .addClass('winner')
        .text(getWinner()),
      $board = $('.board'),
      $reset = $('<button>')
        .addClass('reset-game')
        .text('Play Again');

    $board.after($winner, $reset);
    $reset.on('click', resetGame);
  }

  /**
   * Resets the game.
   *
   * @param {object} event The event object.
   */
  function resetGame(event) {
    // Remove all pieces, occupied classes, and winner elements.
    $('.piece').remove();
    $('.space').removeClass('is-occupied');
    $('.winner').remove();
    $(event.target).remove();

    // Reset the winner, board, and neighbors.
    winner = null;
    board = {};
    neighbors = {
      0: [1, 3, 4],
      1: [0, 2, 3, 4, 5],
      2: [1, 4, 5],
      3: [0, 1, 4, 6, 7],
      4: [0, 1, 2, 3, 5, 6, 7, 8],
      5: [1, 2, 4, 7, 8],
      6: [3, 4, 7],
      7: [3, 4, 5, 6, 8],
      8: [4, 5, 7]
    };
  }

  $('.space').on('click', event => {
    playX(event.target);
  });
})(jQuery);
