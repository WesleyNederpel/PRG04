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
        this.start(ResourceLoader).then(() => this.startGame())
    }

    ui

    startGame() {
        const land = new Background()
        this.add(land)
        this.createPlayer()
        this.createOpponent()
        this.ui = new UI()
        this.add(this.ui)
    }
    createPlayer() {
        const xwing = new Xwing()
        this.add(xwing)
    }
    createOpponent() {
        const tiefighter = new TieFighter()
        this.add(tiefighter)
    }
}

new Game()
