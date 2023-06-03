class Scene1 extends Phaser.Scene {
    constructor() {
        super('Scene1');
    }
    waterBoy;
    gameEnded = false;
    create() {
        this.add.text(game.config.width/2, 260, 'Title and Victory screen design (WIP)', { font: '24px Futura', fill: '#FFFFFF' }).setOrigin(0.5);


    }



    update() {
        

        
    }
}