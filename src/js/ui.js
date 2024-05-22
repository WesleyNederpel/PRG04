import { Resources, ResourceLoader } from './resources.js'
import { Label, FontUnit, Font, ScreenElement, Actor, Vector, Color } from "excalibur";

export class UI extends ScreenElement {

    scoreText

    onInitialize(engine) {
        for (let i = 0; i < 3; i++) {
            const heart = new Actor()
            heart.graphics.use(Resources.HeartImage.toSprite())
            heart.pos = new Vector(1230 + (i * 75), 60)
            heart.scale = new Vector(0.1, 0.1)
            this.addChild(heart)
        }

        this.scoreText = new Label({
            text: 'Score: 0',
            pos: new Vector(50, 50),
            font: Resources.PixelFont.toFont({
                unit: FontUnit.Px,
                size: 20,
                color: Color.White
            })

        })
        this.addChild(this.scoreText)


    }

    updateScore() {
        this.scoreText.text = `Score: 200`
    }
}