scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    mySprite.destroy()
    game.reset()
})
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
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite3, sprites.dungeon.collectibleRedCrystal)
for (let index = 0; index < 3; index++) {
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
    tiles.placeOnRandomTile(mySprite2, sprites.builtin.forestTiles0)
    mySprite2.follow(mySprite3)
}
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Left, sprites.castle.tilePath5)) {
        mySprite.setVelocity(50, 0)
    } else {
        mySprite2.follow(mySprite3)
    }
    if (mySprite.tileKindAt(TileDirection.Top, sprites.castle.tilePath5)) {
        mySprite.setVelocity(50, 0)
    } else {
        mySprite.follow(mySprite2)
    }
    if (mySprite.tileKindAt(TileDirection.Right, sprites.castle.tilePath5)) {
        mySprite.setVelocity(-50, 0)
    } else {
        mySprite2.follow(mySprite3)
    }
})
