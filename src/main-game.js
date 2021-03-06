import { Game, AUTO } from 'phaser';

import TestScene from './test-scene.js'


const config = {
    type: AUTO,
    width: 800,
    height: 800,
    physics: {
        default: 'matter',
        matter: {
            gravity: { y: .5 },
            debug: false
        }
    },
    scene: [
        TestScene
    ]
};

export class MainGame extends Game {
    constructor() {
        super(config)
    }
}


export default MainGame;
