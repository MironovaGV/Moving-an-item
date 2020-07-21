import '../css/style.css';
import GamePlay from './GamePlay';

const cells = document.getElementsByTagName('div');

const gamePlay = new GamePlay(cells, './../img/goblin.png');
gamePlay.init();
