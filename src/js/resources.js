import { ImageSource, Sound, Resource, Loader, ImageWrapping, FontSource } from 'excalibur'

const Resources = {
    Xwing: new ImageSource('images/xwing-exhaust.png'),
    Opponent: new ImageSource('images/tiefighter.png'),
    Background: new ImageSource('images/background.png', { wrapping: ImageWrapping.Repeat }),
    Bullet: new ImageSource('./images/bullet.png'),
    PixelFont: new FontSource('fonts/PressStart2P.ttf', 'PressStart'),
}
const ResourceLoader = new Loader([
    Resources.Xwing,
    Resources.Opponent,
    Resources.Background,
    Resources.Bullet,
    Resources.PixelFont,
])

export { Resources, ResourceLoader }