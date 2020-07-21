import '../css/style.css';
import img from '../img/goblin.png'
import GamePlay from './GamePlay';

const cells = document.getElementsByTagName('div');

const gamePlay = new GamePlay(cells, img);
gamePlay.init();
