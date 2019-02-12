class StartScreen extends Phaser.Scene {
  constructor() {
    super({
      key: 'StartScreen'
    });
  }
  preload() {
    console.log("Start screen");

    this.load.image('background', 'game/assets/spc.png');



  }
  create() {
    this.space = this.add.tileSprite(400,300,800,600,'background');

    this.input.on('pointerdown',function(event){
      startGameplay();
    },this);




    // instructions
    var testText = this.add.text(250,60,'HOW TO PLAY',{
      fontSize: '20px',
      fill: '#FFF'
    });
    var testText = this.add.text(250,90,'move left `A`',{
      fontSize: '16px',
      fill: '#FFF'
    });
    var testText = this.add.text(250,120,'move up `W`',{
      fontSize: '16px',
      fill: '#FFF'
    });
    var testText = this.add.text(250,150,'move right `D`',{
      fontSize: '16px',
      fill: '#FFF'
    });
    var testText = this.add.text(250,180,'move down `S`',{
      fontSize: '16px',
      fill: '#FFF'
    });
    var testText = this.add.text(250,210,'shoot button `P`',{
      fontSize: '16px',
      fill: '#FFF'
    });

    //play button
    var testText = this.add.text(250,300,'PLAY',{
      fontSize: '100px',
      fill: '#FFF'
    });
    // testText.setInteractive()
    // testText.on('pointerdown',startGameplay);



  }
  update() {

  }
}
function startGameplay() {
    game.scene.stop('StartScreen');
    game.scene.start('scene1');
}
