import '../css/style.css'
import { Actor, Color, DisplayMode, Engine, ScreenElement, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Label, FontUnit, Font } from "excalibur";
import { Xwing } from './player.js'
import { Background } from './background.js';
import { TieFighter } from './opponent'
import { UI } from './ui.js'

export class Game extends Engine {

    constructor() {
        super({ width: 1440, height: 900, displayMode: DisplayMode.FitScreen })
        this.score = 0
        this.ui = null
        this.start(ResourceLoader).then(() => this.startGame())
    }

    score = 0
    health = 5
    ui

    addPoints(points) {
        this.ui.updateScore(points)
    }

    reduceHealth(hp) {
        this.ui.updateHealth(hp)
    }

    startGame() {
        const land = new Background()
        this.add(land)
        this.createPlayer()

        for (let i = 0; i < 10; i++) {
            this.createOpponent()
        }
        this.ui = new UI()
        this.add(this.ui)
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

new Game()
