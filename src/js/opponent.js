import { Actor, Timer, Vector } from "excalibur"
import { Resources } from './resources.js'
import { EnemyBullet } from "./enemybullet.js"

export class TieFighter extends Actor {
    constructor() {
        super({ width: Resources.Opponent.width * .6, height: Resources.Opponent.height * .6, anchor: new Vector(.5, .4) })
    }
    onInitialize(engine) {
        const sprite = Resources.Opponent.toSprite()
        this.graphics.use(sprite)
        this.pos = new Vector(Math.random() * 1400, Math.random() * 250)
        this.vel = new Vector(0, 100)
        this.scale = new Vector(0.15, 0.15)

        this.timer = new Timer({
            fcn: () => this.enemyShoot(),
            interval: 800,
            repeats: true
        })
        engine.add(this.timer)
        this.timer.start()
    }

    enemyShoot() {
        this.addChild(new EnemyBullet())
    }
}