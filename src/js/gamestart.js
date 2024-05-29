import { Keys, Scene } from "excalibur";
import { GameStartBackground } from "./gamestartbackground.js";
import { Level } from './level.js'

export class GameStart extends Scene {
    constructor() {
        super()
    }

    onInitialize(engine) {
        const space = new GameStartBackground()
        this.add(space)

        const GameStart = new Level()
        this.engine.add('Level', GameStart)
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Enter)) {
            this.engine.goToScene('Level')
        }
    }
}