import '../css/style.css';
import GamePlay from './GamePlay';

const cells = document.getElementsByTagName('div');
// let imgEl = document.createElement('img');
// imgEl.src =  './../img/goblin.png';
// cells[0].append(imgEl);

const gamePlay = new GamePlay(cells, './../img/goblin.png');
gamePlay.init();
