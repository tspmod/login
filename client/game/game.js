var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y : 0}
		}
	},
	scene: [StartScreen, scene1, scene2]
};

var game = new Phaser.Game(config);

var space;
var player;
var group;
var bullet;
var lives = 3;
var score = 0;
var scoreText;
var livesText;
var gameoverText;
var restartGame;
var gameOver = false;
