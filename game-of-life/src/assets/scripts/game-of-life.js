/**
 * Game of Life
 * 
 * {@link} https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
 * @export GameOfLife
 * @class  GameOfLife
 */
export class GameOfLife {

  constructor (boardSize, cellSize) {
    this.boardSize   = boardSize;
    this.cellSize    = cellSize;
    this.cellsPerRow = boardSize / cellSize;
    this.totalCells  = this.cellsPerRow * this.cellsPerRow;
    this.seeds       = Math.round(this.totalCells * 0.2);
    this.cells       = this.generateCells();
    this.gameStatus  = setInterval(this.updateStatus.bind(this), 200);

    this.bindEvents();
  }

  /**
   * Creates the Game of Life board using a canvas element.
   * 
   * @memberof GameOfLife
   */
  createBoard () {

    const canvas = document.getElementById('canvas');

    canvas.setAttribute('height', this.boardSize);
    canvas.setAttribute('width', this.boardSize);
  }

  /**
   * Generate an array of cells to be placed on the board.
   * 
   * @returns {array} The cell objects.
   * @memberof GameOfLife
   */
  generateCells () {

    let cells     = [],
        liveCells = this.generateLiveCells(this.seeds, this.totalCells);

    for (let x = 0; x < this.cellsPerRow; x++) {

      for (let y = 0; y < this.cellsPerRow; y++) {

        let cell = {
          x: x,
          y: y,
          status: liveCells.indexOf(cells.length) !== -1 ? 'live' : 'dead'
        };

        cells.push(cell);
      }
    }

    return cells;
  }

  /**
   * Randomly generate which cells will be active at beginning of game.
   * 
   * @param   {number} numLiveCells The number of live cells desired.
   * @param   {number} max          The maximum number of cells.
   * @returns {array}               The list of living cells.
   * @memberof GameOfLife
   */
  generateLiveCells (numLiveCells, max) {

    let liveCells = [];

    for (let i = 0; i < numLiveCells; i++) {
      liveCells.push(Math.floor(Math.random() * (max - 1)) + 1);
    }

    return liveCells;
  }

  /**
   * Gets each neighboring cell's status.
   * 
   * @memberof GameOfLife
   */
  getNeighborStatus () {

    for (let i = 0; i < this.cells.length; i++) {

      this.cells[i].neighborsStatus = {
        upperLeft: this.cells[i - this.cellsPerRow - 1] !== undefined ? this.cells[i - this.cellsPerRow - 1].status : undefined,
        upperMiddle: this.cells[i - this.cellsPerRow] !== undefined ? this.cells[i - this.cellsPerRow].status : undefined,
        upperRight: this.cells[i - this.cellsPerRow + 1] !== undefined ? this.cells[i - this.cellsPerRow + 1].status : undefined,
        middleLeft: this.cells[i - 1] !== undefined ? this.cells[i - 1].status : undefined,
        middleRight: this.cells[i + 1] !== undefined ? this.cells[i + 1].status : undefined,
        lowerLeft: this.cells[i + this.cellsPerRow - 1] !== undefined ? this.cells[i + this.cellsPerRow - 1].status : undefined,
        lowerMiddle: this.cells[i + this.cellsPerRow] !== undefined ? this.cells[i + this.cellsPerRow].status : undefined,
        lowerRight: this.cells[i + this.cellsPerRow + 1] !== undefined ? this.cells[i + this.cellsPerRow + 1].status : undefined
      }
    }
  }

  /**
   * Renders cells on canvas.
   * 
   * @memberof GameOfLife
   */
  renderCells () {

    const canvas = document.getElementById('canvas'),
          context = canvas.getContext('2d');

    this.cells.forEach(cell => {

      if (cell.status === 'live') {
        context.fillStyle = '#0e3cda';
        context.fillRect(cell.x * this.cellSize, cell.y * this.cellSize, this.cellSize, this.cellSize);
      } else {
        context.clearRect(cell.x * this.cellSize, cell.y * this.cellSize, this.cellSize, this.cellSize);
      }
    });
  }

  /**
   * Updates the status of a cell based on the Game of Life rules.
   * 
   * @memberof GameOfLife
   */
  updateStatus () {

    this.getNeighborStatus();

    let anyLivingCells = false;

    this.cells.forEach(cell => {

      let liveNeighbors = 0;

      for (const neighbor in cell.neighborsStatus) {
        if (cell.neighborsStatus.hasOwnProperty(neighbor) && cell.neighborsStatus[neighbor] === 'live') {
          liveNeighbors++;
        }
      }

      if (cell.status === 'live' && liveNeighbors < 2) {
        cell.status = 'dead';
      }

      if (cell.status === 'live' && liveNeighbors > 3) {
        cell.status = 'dead';
      }

      if (cell.status === 'dead' && liveNeighbors === 3) {
        cell.status = 'live';
      }

      for (const status in cell) {
        if (cell.hasOwnProperty(status) && cell[status] === 'live') {
          anyLivingCells = true;
        }
      }
    });

    if (!anyLivingCells) {
      clearInterval(this.gameStatus);
    }

    this.renderCells();
  }

  /**
   * Events to fire when Game of Life is instantiated.
   * 
   * @memberof GameOfLife
   */
  bindEvents () {

    this.createBoard();
    this.renderCells();

    document.addEventListener('click', event => {

      const target = event.target.closest('#endGame');

      if (!target) {
        return false;
      }

      if (target.getAttribute('id') === 'endGame') {
        const form = document.getElementById('gameSettings');
        clearInterval(this.gameStatus);

        form.classList.remove('is-hidden');
        document.body.classList.remove('game-started');
        target.classList.remove('is-visible');
        return true;
      }
    });
  }
}
