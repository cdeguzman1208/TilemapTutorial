let config = {
    type: Phaser.CANVAS,
    render: {
        pixelArt: true
    },
    width: 320,
    height: 320,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    zoom: 2,
    scene: [ Overworld ]
}

let game = new Phaser.Game(config);