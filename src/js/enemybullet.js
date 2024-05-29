import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'
import { Xwing } from "./player.js"

export class EnemyBullet extends Actor {

    constructor() {
        super({ width: Resources.EnemyBullet.width * .1, height: Resources.EnemyBullet.height * 3 })
    }
    onInitialize() {
        const sprite = Resources.EnemyBullet.toSprite()
        this.graphics.use(sprite)
        sprite.rotation = -4.71;
        this.vel = new Vector(0, 2000)
        this.scale = new Vector(.15, .15)
        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    hitSomething(event) {
        if (event.other instanceof Xwing) {
            this.kill()
        }
    }
}