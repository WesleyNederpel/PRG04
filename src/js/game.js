import '../css/style.css'
import { DisplayMode, Engine } from "excalibur"
import { ResourceLoader } from './resources.js'
import { GameStart } from './gamestart.js'
import { Level } from './level.js'
import { GameWon } from './gamewon.js'

class Game extends Engine {
    constructor() {
        super({ width: 1440, height: 900, displayMode: DisplayMode.FitScreen })
        this.score = 0
        this.ui = null
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.add('gamestart', new GameStart())
        this.goToScene('GameStart')
        this.add('level', new Level())
        this.add('gamewon', new GameWon())
        this.goToScene('gamestart')
    }
}

new Game()
