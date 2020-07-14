export default class GamePlay {
  constructor(cells, imgPath) {
    this.cells = cells;
    this.imgPath = imgPath;
    this.previousCell = null;
  }

  init() {
    this.run();
  }

  createImg() {
    const img = document.createElement('img');
    img.src = this.imgPath;
    return img;
  }

  getRandomCellNumber(number = null) {
    const min = 0;
    const max = this.cells.length - 1;
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomNumber = Math.round(rand);

    if (randomNumber === number) {
      return this.getRandomCellNumber(number);
    }

    return randomNumber;
  }

  run() {
    setInterval(GamePlay.putImage, 1000, this);
  }

  setPreviousCell(cell) {
    this.previousCell = cell;
  }

  static putImage(gamePlay) {
    const newCell = gamePlay.getRandomCellNumber(gamePlay.previousCell);

    if (gamePlay.previousCell === null) {
      gamePlay.cells[newCell].append(gamePlay.createImg());
      gamePlay.setPreviousCell(newCell);
    } else {
      const body = gamePlay.cells[gamePlay.previousCell].parentNode;
      body.replaceChild(document.createElement('div'), gamePlay.cells[gamePlay.previousCell]);
      gamePlay.cells[newCell].append(gamePlay.createImg());
      gamePlay.setPreviousCell(newCell);
    }
  }
}
