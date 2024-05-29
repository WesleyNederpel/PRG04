import { Scene } from "excalibur";
import { GameEndBackground } from "./gameendbackground";

export class GameWon extends Scene {
    constructor() {
        super()
    }

    onInitialize(engine) {
        const space = new GameEndBackground()
        this.add(space)
    }
}