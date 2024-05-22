import { ImageSource, Sound, Resource, Loader, ImageWrapping, FontSource } from 'excalibur'

const Resources = {
    Xwing: new ImageSource('images/xwing.png'),
    Opponent: new ImageSource('images/tiefighter.png'),
    Background: new ImageSource('images/background.png', { wrapping: ImageWrapping.Repeat }),
    Bullet: new ImageSource('./images/bullet.png'),
    PixelFont: new FontSource('fonts/PressStart2P.ttf', 'PressStart'),
    HeartImage: new ImageSource('./images/heart.png')
}
const ResourceLoader = new Loader([
    Resources.Xwing,
    Resources.Opponent,
    Resources.Background,
    Resources.Bullet,
    Resources.PixelFont,
    Resources.HeartImage,
])

export { Resources, ResourceLoader }