import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'
import { TieFighter } from './opponent.js'


export class Bullet extends Actor {

    constructor() {
        super({ width: Resources.Bullet.width * .1, height: Resources.Bullet.height * 3 })
    }
    onInitialize() {
        const sprite = Resources.Bullet.toSprite()
        this.graphics.use(sprite)
        sprite.rotation = 4.71;
        this.vel = new Vector(0, -2000)
        this.scale = new Vector(.15, .15)
        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    hitSomething(event) {
        if (event.other instanceof TieFighter) {
            event.other.kill()
            // @ts-ignore
            this.scene?.addPoints(100)
        }
        this.kill()
    }
}