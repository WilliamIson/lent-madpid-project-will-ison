namespace SpriteKind {
    export const End = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    mySprite.destroy()
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.End, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`level7`)
    tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles12)
    pause(100)
    tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
    mySprite2.follow(mySprite, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
    mySprite4 = sprites.create(img`
        3333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333
        `, SpriteKind.End)
    tiles.placeOnRandomTile(mySprite4, sprites.dungeon.floorLight0)
    pause(100)
    tiles.placeOnRandomTile(mySprite2, sprites.castle.saplingOak)
    mySprite2.follow(mySprite, 95)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.reset()
})
let mySprite4: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
let mySprite3 = sprites.create(img`
    1111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111
    `, SpriteKind.Food)
tiles.placeOnRandomTile(mySprite3, sprites.dungeon.collectibleRedCrystal)
mySprite2 = sprites.create(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
pause(100)
mySprite2.follow(mySprite, 90)
