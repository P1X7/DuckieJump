scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.over(false, effects.blizzard)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(true, effects.hearts)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    game.over(true, effects.hearts)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Duckie.isHittingTile(CollisionDirection.Bottom)) {
        Duckie.vy = -150
    }
})
let Duckie: Sprite = null
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(hex`320008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000901020202020202020300000200000102020300000001020202030000010202000200020000020001030000010202020202030506060606060606040808070808050606040808080506060604080805060608070807080807080504080805060606060604`, img`
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    222222222..2..2222...22222..222.2.2..2.22..2222222
    222222222..2..2222...22222..222.2.2..2.22..2222222
    `, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath5,myTiles.tile2,myTiles.tile3,myTiles.tile4], TileScale.Sixteen))
Duckie = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 5 5 f . . . . 
    . . . . . . . . . f 5 5 4 4 . . 
    . . . . . . . . . 5 5 5 . . . . 
    . . . . . . . 5 5 5 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . 5 5 5 5 5 5 5 5 5 . . . . . 
    . . . . . . 4 . . 4 . . . . . . 
    . . . . . . 4 . . 4 . . . . . . 
    . . . . . . 4 4 . 4 4 . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(Duckie)
Duckie.ay = 400
controller.moveSprite(Duckie, 60, 0)
