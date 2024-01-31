namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const Teleporter = SpriteKind.create()
    export const Dot = SpriteKind.create()
}
info.onScore(100000, function () {
    info.setScore(0)
    info.changeLifeBy(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Teleporter, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    Generator = sprites.create(assets.image`myImage`, SpriteKind.Player)
    Maze_generator(Generator, 1)
    mySprite2 = Generator
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(0, 0))
    scene.cameraFollowSprite(mySprite2)
    controller.moveSprite(mySprite2)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    false
    )
})
// Original code provided by our teacher, Mr. Florczak
function Maze_generator (Generator: Sprite, ReqEXP: number) {
    EXp = ReqEXP
    if (info.score() >= ReqEXP && info.score() <= Math.sqrt(ReqEXP)) {
        tiles.setCurrentTilemap(tilemap`level5`)
        LC = 34
        LR = 34
    } else if (ReqEXP <= Math.sqrt(info.score())) {
        tiles.setCurrentTilemap(tilemap`level`)
        LC = 44
        LR = 44
    } else {
        tiles.setCurrentTilemap(tilemap`level3`)
        LC = 19
        LR = 19
    }
    tiles.placeOnTile(Generator, tiles.getTileLocation(0, 0))
    VL = [Generator.tilemapLocation()]
    while (VL.length > 0) {
        CC = VL.pop()
        tiles.placeOnTile(Generator, CC)
        tiles.setTileAt(CC, assets.tile`myTile`)
        CanLoca2 = CanLoca(Generator)
        Branch = Generator.tilemapLocation()
        while (CanLoca2.length > 0) {
            tiles.placeOnTile(Generator, CanLoca2.removeAt(randint(0, CanLoca2.length - 1)))
            if (AdjacentOcu(Generator) == 1) {
                VL.push(Branch)
                VL.push(Generator.tilemapLocation())
                break;
            }
        }
    }
    MF = tiles.getTilesByType(assets.tile`myTile`)
    Wall = tiles.getTilesByType(assets.tile`transparency16`)
    for (let value of Wall) {
        tiles.setTileAt(value, assets.tile`transparency16`)
        tiles.setWallAt(value, true)
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(99)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    assets.animation`Forward attack`,
    100,
    false
    )
    Crit()
    if (10 <= info.score() / 10) {
        let list: number[] = []
        list.push(list.length + 1)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    false
    )
})
function Crit () {
    CritChance = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
    ]
    if (controller.A.isPressed()) {
        if (CritChance._pickRandom() >= 10) {
            info.changeScoreBy(1)
        }
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    assets.animation`myAnim`,
    1000,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    assets.animation`myAnim0`,
    100,
    false
    )
})
function CanLoca (Generator: Sprite) {
    AdjaLoca = []
    CL = Generator.tilemapLocation()
    if (CL.row > LR && Generator.tileKindAt(TileDirection.Top, assets.tile`transparency16`)) {
        AdjaLoca.push(tiles.getTileLocation(CL.column, CL.row - 1))
    }
    if (CL.row < LR && Generator.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`)) {
        AdjaLoca.push(tiles.getTileLocation(CL.column, CL.row + 1))
    }
    if (CL.column > LC && Generator.tileKindAt(TileDirection.Left, assets.tile`transparency16`)) {
        AdjaLoca.push(tiles.getTileLocation(CL.column - 1, CL.row))
    }
    if (CL.column < LC && Generator.tileKindAt(TileDirection.Right, assets.tile`transparency16`)) {
        AdjaLoca.push(tiles.getTileLocation(CL.column + 1, CL.row))
    }
    return AdjaLoca
}
function AdjacentOcu (Generator: Sprite) {
    Num = 0
    CL = Generator.tilemapLocation()
    if (Generator.tileKindAt(TileDirection.Left, assets.tile`myTile`)) {
        Num += 1
    }
    if (Generator.tileKindAt(TileDirection.Right, assets.tile`myTile`)) {
        Num += 1
    }
    if (Generator.tileKindAt(TileDirection.Top, assets.tile`myTile`)) {
        Num += 1
    }
    if (Generator.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
        Num += 1
    }
    return Num
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        info.changeScoreBy(1)
        sprites.destroy(otherSprite)
    } else {
        info.changeLifeBy(-1)
    }
})
let Enemies: Sprite = null
let SL: tiles.Location[] = []
let Num = 0
let CL: tiles.Location = null
let AdjaLoca: tiles.Location[] = []
let CritChance: number[] = []
let Wall: tiles.Location[] = []
let MF: tiles.Location[] = []
let Branch: tiles.Location = null
let CanLoca2: tiles.Location[] = []
let CC: tiles.Location = null
let VL: tiles.Location[] = []
let LR = 0
let LC = 0
let Generator: Sprite = null
let EXp = 0
let mySprite2: Sprite = null
info.setScore(0)
let EnemyImg = [assets.image`Char1`, img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c c . c c . . . f c b b c 
    f f c 3 c c 3 c c f f b b b c . 
    f f c 3 b c 3 b c f b b c c c . 
    f c b b b b b b c f b c b c c . 
    c c 1 b b b 1 b c b b c b b c . 
    c b b b b b b b b b c c c b c . 
    c b 1 f f 1 c b b c c c c c . . 
    c f 1 f f 1 f b b b b f c . . . 
    f f f f f f f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 2 b b b c f . . . . 
    . . f 2 2 2 b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . b b b b b b b b b b b b b b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b b b b b b b d d b b b b b b b 
    . b b b b b b c c b b b b b b . 
    b f 1 f 1 f b c c b f 1 f 1 f b 
    b f f f f f f b b f f f f f f b 
    b f f f f f f f f f f f f f f b 
    b 1 f 1 f 1 f 1 1 f 1 f 1 f 1 b 
    b b b b b b b b b b b b b b b b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `]
tiles.setCurrentTilemap(tilemap`level1`)
mySprite2 = sprites.create(assets.image`myImage`, SpriteKind.Player)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(20, 20))
controller.moveSprite(mySprite2)
scene.cameraFollowSprite(mySprite2)
let Portal1 = sprites.create(assets.image`Maze Portal`, SpriteKind.Teleporter)
Portal1.setPosition(20, 20)
info.setLife(100)
EXp = 100
let LVLup = 100
game.onUpdateInterval(5000, function () {
    SL = tiles.getTilesByType(assets.tile`myTile`)
    for (let index = 0; index < 20; index++) {
        tiles.placeOnTile(Enemies, SL.removeAt(randint(0, SL.length - 1)))
        Enemies = sprites.create(EnemyImg._pickRandom(), SpriteKind.Enemy)
    }
})
game.onUpdateInterval(60000, function () {
    if (info.score() > LVLup) {
        EXp += 10
        LVLup = LVLup * 2
    }
})
game.onUpdateInterval(100000, function () {
    SL = tiles.getTilesByType(sprites.castle.tilePath5)
    for (let index = 0; index < 10; index++) {
        Enemies = sprites.create(EnemyImg[0], SpriteKind.Enemy)
        tiles.placeOnTile(Enemies, SL.removeAt(randint(0, SL.length - 1)))
    }
})
