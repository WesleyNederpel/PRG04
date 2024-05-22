import { Actor, Color, Engine, Keys, Vector, VertexBuffer, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class TieFighter extends Actor {
    constructor() {
        super({ width: Resources.Opponent.width * .6, height: Resources.Opponent.height * .6, anchor: new Vector(.5, .4) })
    }
    onInitialize() {
        const sprite = Resources.Opponent.toSprite()
        this.graphics.use(sprite)
        this.pos = new Vector(randomInRange(0, 1440), 0)
        this.vel = new Vector(0, 100)
        this.scale = new Vector(0.2, 0.2)
    }
}