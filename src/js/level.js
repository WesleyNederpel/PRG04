import '../css/style.css'
import { Xwing } from './player.js'
import { Background } from './background.js';
import { TieFighter } from './opponent'
import { UI } from './ui.js'
import { Scene } from 'excalibur';
import { GameWon } from './gamewon.js';

export class Level extends Scene {

    constructor() {
        super()
    }

    score = 0
    health = 5
    ui

    addPoints(points) {
        this.score += points
        this.ui.updateScore(points)
        if (this.score >= 1000) {
            this.engine.goToScene('GameEnd')
        }
    }

    reduceHealth(hp) {
        this.ui.updateHealth(hp, this.health)
    }

    onInitialize() {
        const space = new Background()
        this.add(space)
        this.createPlayer()

        for (let i = 0; i < 10; i++) {
            this.createOpponent()
        }
        this.ui = new UI()
        this.add(this.ui)

        const GameEnd = new GameWon()
        this.engine.add('GameEnd', GameWon)
    }
    createPlayer() {
        const xwing = new Xwing(this.ui)
        this.add(xwing)
    }

    createOpponent() {
        const tiefighter = new TieFighter()
        this.add(tiefighter)
    }
}
