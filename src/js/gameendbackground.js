import { Actor, Sprite, Vector } from "excalibur"
import { Resources } from './resources.js'

export class GameEndBackground extends Actor {

    sprite

    onInitialize(engine) {
        this.sprite = new Sprite({
            image: Resources.GameEndBackground,
            sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
        })
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
    }
}