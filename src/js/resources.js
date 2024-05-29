import { ImageSource, Sound, Resource, Loader, ImageWrapping, FontSource } from 'excalibur'

const Resources = {
    Xwing: new ImageSource('images/xwing-exhaust.png'),
    Opponent: new ImageSource('images/tiefighter.png'),
    Background: new ImageSource('images/background.png', { wrapping: ImageWrapping.Repeat }),
    GameStartBackground: new ImageSource('images/background.png'),
    Bullet: new ImageSource('./images/bullet.png'),
    EnemyBullet: new ImageSource('./images/enemybullet.png'),
    PixelFont: new FontSource('fonts/PressStart2P.ttf', 'PressStart'),
}
const ResourceLoader = new Loader([
    Resources.Xwing,
    Resources.Opponent,
    Resources.Background,
    Resources.GameStartBackground,
    Resources.Bullet,
    Resources.EnemyBullet,
    Resources.PixelFont,
])

export { Resources, ResourceLoader }