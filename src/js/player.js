import { Actor, CollisionType, Keys, Vector } from "excalibur"
import { Resources } from './resources.js'
import { Bullet } from "./bullet.js"
import { TieFighter } from "./opponent.js"
import { EnemyBullet } from "./enemybullet.js"

export class Xwing extends Actor {
    constructor(ui) {
        super({ width: Resources.Xwing.width * .6, height: Resources.Xwing.height * .3, anchor: new Vector(0.5, .6), collisionType: CollisionType.Active })

        this.hp = 5
        this.isImmune = false;
        this.ui = ui
    }

    onInitialize() {
        const sprite = Resources.Xwing.toSprite()
        this.graphics.use(sprite)
        this.pos = new Vector(720, 700)
        this.vel = new Vector(0, 0)
        this.scale = new Vector(0.15, 0.15)
        this.on('collisionstart', (event) => this.hitSomething(event))

    }

    hitSomething(event) {
        if (event.other instanceof TieFighter || event.other instanceof EnemyBullet && !this.isImmune) {
            this.getDamage(1)
        }
    }

    getDamage(amount) {
        if (!this.isImmune) {
            this.hp -= amount

            // @ts-ignore
            this.scene?.reduceHealth(this.hp)

            this.isImmune = true
            this.actions.blink(40, 40, 25).callMethod(() => {
                this.isImmune = false
            })
        } if (this.hp <= 0) {
            this.kill()
        }
    }

    onPostUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;
        this.rotation = 0

        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 750
            this.rotation = 6.8
        }

        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -750
            this.rotation = 6
        }

        this.vel = new Vector(xspeed, yspeed);
        this.graphics.flipHorizontal = (this.vel.x > 0)

        if (engine.input.keyboard.wasPressed(Keys.Space)) {
        }

        if (this.pos.x < -100) {
            this.pos.x = 1000
        }

        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            const bullet = new Bullet()
            bullet.pos = new Vector(this.pos.x, this.pos.y - 80)
            bullet.scale = new Vector(.15, .15)
            engine.add(bullet)
        }

        const leftBoundary = this.width / 2
        const rightBoundary = engine.drawWidth - this.width / 2
        const topBoundary = this.height / 2
        const bottomBoundary = engine.drawHeight - this.height / 2

        if (this.pos.x < leftBoundary) {
            this.pos.x = leftBoundary
        }

        if (this.pos.x > rightBoundary) {
            this.pos.x = rightBoundary
        }

        if (this.pos.y < topBoundary) {
            this.pos.y = topBoundary
        }

        if (this.pos.y > bottomBoundary) {
            this.pos.y = bottomBoundary
        }
    }
}