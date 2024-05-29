import { Resources, ResourceLoader } from './resources.js'
import { Label, FontUnit, Font, ScreenElement, Actor, Vector, Color } from "excalibur";

export class UI extends ScreenElement {

    scoreText
    healthbar
    score = 0
    hp = 5


    onInitialize(engine) {
        let barbackground = new Actor({ x: 1200, y: 40, color: Color.fromRGB(255, 255, 255, 0.4), width: 200, height: 20, anchor: Vector.Zero })
        this.addChild(barbackground)

        this.healthbar = new Actor({ x: 1200, y: 40, color: Color.Green, width: 200, height: 20, anchor: Vector.Zero })
        this.addChild(this.healthbar)

        this.scoreText = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(50, 50),
            font: Resources.PixelFont.toFont({
                unit: FontUnit.Px,
                size: 20,
                color: Color.White
            })

        })
        this.addChild(this.scoreText)


    }

    updateScore(score) {
        this.score += score
        this.scoreText.text = `Score: ${this.score}`
    }

    updateHealth(hp, playerhp) {
        this.healthbar.scale = new Vector(hp / playerhp, 1)
    }
}
