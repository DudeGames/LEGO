controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 5 5 . 5 5 . . 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, lego, 200, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    lego.vy = -200
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.splash("final level")
    game.splash("Alien warship ")
    tiles.placeOnRandomTile(lego, assets.tile`myTile8`)
    tiles.setCurrentTilemap(tilemap`level4`)
    lego.y = 235
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    info.changeLifeBy(-0.001)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.splash("hard level")
    game.splash("deep volcano")
    tiles.placeOnRandomTile(lego, assets.tile`myTile8`)
    lego.y = 235
    tiles.setCurrentTilemap(tilemap`level3`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    game.splash("dark cave ")
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(lego, assets.tile`myTile`)
    lego.y = 235
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    alien.destroy(effects.fire, 100)
    projectile.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
    game.splash("congratulations! you have beaten the alien invasion")
    alien.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    alien.destroy()
    info.changeLifeBy(-1)
})
let alien: Sprite = null
let projectile: Sprite = null
let lego: Sprite = null
game.splash("save the world from aliens by shooting them with B  ")
game.splash("at the end of each level there will be a portal, enter it")
tiles.setCurrentTilemap(tilemap`level1`)
lego = sprites.create(img`
    . . . . . . f f f f f f . . . . 
    . . . . f f 5 5 5 5 5 5 f . . . 
    . . . f f 5 5 5 5 5 5 5 5 f . . 
    . . . f 5 5 5 5 5 5 5 f 5 f . . 
    . . . f 5 5 5 5 5 5 f f f 5 f . 
    . . . f 5 5 5 5 5 5 5 f 5 5 f . 
    . . f f 5 5 5 5 5 5 5 5 5 5 f . 
    . . f f 5 5 5 5 5 5 5 5 f 5 f . 
    . . f 5 5 5 5 5 5 5 5 5 5 f . . 
    . . . f 5 5 5 5 5 5 5 5 f . . . 
    . . . . f f 5 5 5 5 5 5 f . . . 
    . . . . . 2 2 2 2 2 2 2 f . . . 
    . . . . . 2 2 2 2 2 2 2 f . . . 
    . . . . . f 2 2 2 2 2 2 f . . . 
    . . . . . . 8 8 8 8 8 8 . . . . 
    . . . . . . . 8 8 8 . . . . . . 
    `, SpriteKind.Player)
lego.y = 235
lego.ay = 500
lego.vx = 100
info.setLife(5)
animation.runImageAnimation(
lego,
[img`
    . . . . . . f f f f f f . . . . 
    . . . . f f 5 5 5 5 5 5 f . . . 
    . . . f f 5 5 5 5 5 5 5 5 f . . 
    . . . f 5 5 5 5 5 5 5 f 5 f . . 
    . . . f 5 5 5 5 5 5 f f f 5 f . 
    . . . f 5 5 5 5 5 5 5 f 5 5 f . 
    . . . f 5 5 5 5 5 5 5 5 5 5 f . 
    . . . f 5 5 5 5 5 5 5 f 5 5 f . 
    . . . 5 5 5 5 5 5 5 5 5 f f . . 
    . . . f 5 5 5 5 5 5 5 5 f . . . 
    . . . . f f 5 5 5 5 5 5 f . . . 
    . . . . . 2 2 2 2 2 2 2 f . . . 
    . . . . . 2 2 2 2 2 2 2 f . . . 
    . . . . . 2 2 2 2 2 2 2 f . . . 
    . . . . . . 8 8 8 8 8 8 . . . . 
    . . . . . . . 8 8 8 . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f 5 5 5 5 5 5 f . . . 
    . . . f f 5 5 5 5 5 5 5 5 f . . 
    . . . f 5 5 5 5 5 5 5 f 5 f . . 
    . . . f 5 5 5 5 5 5 f f f 5 f . 
    . . . f 5 5 5 5 5 5 5 f 5 5 f . 
    . . f f 5 5 5 5 5 5 5 5 5 5 f . 
    . . f f 5 5 5 5 5 5 5 5 f 5 f . 
    . . f f 5 5 5 5 5 5 5 5 5 f . . 
    . . . f 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . 2 2 2 2 2 2 2 2 . . . 
    . . . . . 2 2 2 2 2 2 2 2 . . . 
    . . . . 8 8 8 8 8 8 8 8 8 8 . . 
    . . . . 8 8 8 8 8 8 8 8 8 8 . . 
    . . . . . 8 8 . . . 8 8 8 . . . 
    `,img`
    . . . . . . f f f f f f . . . . 
    . . . . f f 5 5 5 5 5 5 f . . . 
    . . . f f 5 5 5 5 5 5 5 5 f . . 
    . . . f 5 5 5 5 5 5 5 f 5 f . . 
    . . . f 5 5 5 5 5 5 f f f 5 f . 
    . . . f 5 5 5 5 5 5 5 f 5 5 f . 
    . . f f 5 5 5 5 5 5 5 5 5 5 f . 
    . . f f 5 5 5 5 5 5 5 5 f 5 f . 
    . . f 5 5 5 5 5 5 5 5 5 5 f . . 
    . . . f 5 5 5 5 5 5 5 5 f . . . 
    . . . . f f 5 5 5 5 5 5 f . . . 
    . . . . . 2 2 2 2 2 2 2 f . . . 
    . . . . . 2 2 2 2 2 2 2 f . . . 
    . . . . . 2 2 2 2 2 2 2 f . . . 
    . . . . . . 8 8 8 8 8 8 . . . . 
    . . . . . . . 8 8 8 . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f 5 5 5 5 5 5 f . . . 
    . . . f f 5 5 5 5 5 5 5 5 f . . 
    . . . f 5 5 5 5 5 5 5 f 5 f . . 
    . . . f 5 5 5 5 5 5 f f f 5 f . 
    . . . f 5 5 5 5 5 5 5 f 5 5 f . 
    . . f f 5 5 5 5 5 5 5 5 5 5 f . 
    . . f f 5 5 5 5 5 5 5 5 f 5 f . 
    . . f 5 5 5 5 5 5 5 5 5 5 f . . 
    . . . f 5 5 5 5 5 5 5 5 f . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . 8 8 8 8 8 8 8 8 8 . . . 
    . . . . . 8 8 . . . 8 8 8 . . . 
    `],
100,
true
)
scene.cameraFollowSprite(lego)
game.onUpdateInterval(randint(1000, 3000), function () {
    alien = sprites.createProjectileFromSide(img`
        ..............................
        ..............................
        ..............................
        .........77777................
        .........77777................
        .......7777f77................
        .........77777................
        .........77777................
        ...........7..................
        ...........7..................
        ...........7..................
        ....ffffffffffffffff...225....
        ....ffffffffffffffff...22.....
        ...fffdfffffffffffffff2.......
        .ffffffffddfffdffffffff.......
        .ffffffffddfffdffffffff.......
        .fffffdfffffddfffddffff.......
        ...ffffffddfffffffffff2.......
        ...ffffffddfffffffffff2.......
        ....ffffffffffffffff...22.....
        ....ffffffffffffffff...225....
        ......222.....222.............
        .......5.......5..............
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `, -20, 0)
    alien.y = 235
    alien.setKind(SpriteKind.Enemy)
})
