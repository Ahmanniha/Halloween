namespace SpriteKind {
    export const Candy = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Candy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    Helper.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    laser = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 4 4 4 5 5 5 . . . 
        . . . . . 2 2 2 4 4 4 5 5 5 . . 
        . . . . . 2 2 2 4 4 4 5 5 5 . . 
        . . . . 2 2 2 4 4 4 5 5 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 5000)
    mySprite.setPosition(0, 59)
    info.changeLifeBy(-1)
})
let monsters: Sprite = null
let laser: Sprite = null
let Helper: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    fdfdddddffdfffdfffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffdffffdfffddddd
    ffdfdddddddffddfffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffddddddddddddff
    fffdffddfdddddddffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfddddffffdfddffdff
    dfffdfdfdfdfffdddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffdffffddffffddd
    fdfffddffdddffdfffdff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffdffdddfffffddd
    fdffffdfffdddfdfffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffdddffdffffdddf
    ddddddfdffdfdddfffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfffddffffdfffdffdd
    ffdffffdfdffffddffdffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffff1ffffff5ffffffffffffffffffffffffffffffffffffffdfddfdfffffdddffddf
    dfdfffffdffffdfdddfffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddfffffffffffffffddfffdfffffddffdfdf
    fddffffdfdffdfffddffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffdddddddddddddddfffffffffffffdff5ffdfffddfdddddd
    ddddddd5ffdfdffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddfffffffffffffffdffffdfddffffdfdff
    fffddfff1ffdffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddfffffffffffffffffdfffffddffffdffdff
    fffdfddffddfdffdfffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddfffffffffffffffffffdfffdddffffdfdfff
    fdffdffddffffddfffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddffffffffffffffffffffdffdfffdfffffdfff
    dddddddddffffddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddffffffffffffffffffffffddfffffddfffdfff
    fffddffffddfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddffffffffffffffffffffffffdfffffffddddddd
    ffffddfffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddfffffffffffffff5ffffffffffddfffffffdffff
    ffffffdfdddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffff1fffffffffffffffffffffddddddddddddddffffffffffffffffffffffffffffddfffffdffff
    ddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffdddddddddddddfffffffffffffffffffffffffffffffdddddddddd
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddfffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddfffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddfffffffffffffffffffffffffffffffffffffffff
    ffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddfffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffdddddddddddddffffffffffffffffffff5ffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddfffffffffffffffffffffffffffffffffff5fffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddffffffffff1ffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff5fffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddfffffffffffffffffffffffffffffffffffffffff
    ffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffddddddddddddfffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddfffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffdddddddddddddfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffdddddddddddddffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddfffffffffffffffffffffffffffffffffff
    ff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddfffffffffff5ffffffff5fffffffffffff
    ffffffffffff5fffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaffffffffff
    ffffffffffffffffffffffffffffffffffff5fffffffffaaaaaaaaaaaaaaaaaaaaaffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff5fffffaaaaaaaaaaaaaaaaaaaaaaaaaffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffcccccccccccccccccccccccccffffffffff
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffccaabaacccccccaabaaccffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffcccccccccccccccccccccccccffffffffff
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffccababacccccccabaaaccffffffffcccccccccccccccccccccccccccccccccccccccfffffffffffcccccccccccccccccccccccccffffffffff
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffccaaaaacccccccbaaaaccffffffffcccccccccccccccccccccccccccccccccccccccfffffffffffccaaaaacccccccccccababaccffffffffff
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffccaaaaacccccccaaaaaccffffffffcccccccccccccccccccccccccccccccccccccccfffffffffffccababacccccccccccaaaaaccffffffffff
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffccaaaaacccccccaaaaaccffffffffcccccccccccccccccccccccccccccccccccccccfffffffffffccaaabacccccccccccaaabaccffffffffff
    cccccccccccccccccccccccccccccccfffffffffffffffcccccccccccccccccccccffffffffcccccccccccccccccccccccccccccccccccccccfffffffffffccaaaaacccccccccccaaaaaccffffffffff
    cccccccccccccccccccccccccccccccfffffffffffffffcccccccccccccccccccccffffffffcccccaaaaacccccccccccccccccccaaaabcccccfffffffffffccaaaaacccccccccccaaaaaccffffffffff
    cccccccccccccccccccccccccccccccfffffffffffffffcccccccccccccccccccccffffffffcccccaababcccccccccccccccccccaabaacccccfffffffffffcccccccccccccccccccccccccffffffffff
    caaaaacccccccccccccccccaaaaacccfffffffffffffffcccccccccccccccccccccffffffffcccccaabaacccccccccccccccccccaaaabcccccfffffffffffcccccccccccccccccccccccccffffffffff
    caaaaacccccccbbbbbcccccaaaaacccfffffffffffffffccaaabacbbbbbcaaaaaccffffffffcccccaaaaacccccccccbbbbbcccccaaaaacccccfffffffffffcccccccccccbbbbbcccccccccffffffffff
    cabaaacccccccbbbbbcccccabaaacccfffffffffffffffccaaaabcbbbbbcaabbaccffffffffcccccaaaaacccccccccbbbbbcccccaaaaacccccfffffffffffc7cc7ccccccbbbbbcccccccccffffffffff
    caabaacccccccbbbbbcccccaabaacc77f77fffffffffffccaaaaacbbbbbcaaaabccbffbfffbcccccccccccc77c77ccbbbbbcccccccccccccccfffffffffffcc77cccccccbbbbbcccccccccffffffffff
    caaaaacccccccbbbbbcccccaaaaac44444fbfffbffffbfcca777ac77bbbcaaaabccbffbfffbcccccccccccc44444ccbbbbbcccccccccccccccffbfffbfffbc44444cccccbbbbbcccccccccffbfffbfff
    cccccccccccccbbbfbccccccccccc4f5f4bbbbbbbbbbbbccaa4444bbbfbcaaaaaccbbbbbbbbcccccccccccc454f4ccbbbfbcccccccccccccccbbbbbbbbbbbc4f4f4cccccbbbfbcccccccccbbbbbbbbbb
    cccccccccccccbbbbbccccccccccc44444fbfffbffffbfcccc4f4fbbbbbccccccccbffbfffbcccccccccccc44444ccbbbbbcccccccccccccccffbfffbfffbc44544cccccbbbbbcccccccccffbfffbfff
    cccccccccccccbbbbbccccccccccc4fff4bbbbbbbbbbbbccc444f4bbbbbccccccccbbbbbbbbcccccccccccc4fff4ccbbbbbcccccccccccccccbbbbbbbbbbbcf444fcccccbbbbbcccccccccbbbbbbbbbb
    fffffffffffffffffffffffffffff4fff4fffffffffffffff4f44f4ffffffffffffffffffffffffffffffff44444ffffffffffffffffffffffffffffffffff44444fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff444ffffffffffffffff445544fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff44444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffff
    ffff2fffffffffffffffff2ffffffffffffffffffffffffffff444fffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffff2ffffffffffffffffffffffff2fff2f
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffff2ffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffff2fffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff2ffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffff2ffffffffffffffffffff
    fffffffff2fffff2ffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffff2fff
    ffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffff2fffffffffffff2ffffff2fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffff2fffffffffff2ff
    ffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffff22ffffffffffffffffff
    fffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffff
    ffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffff2fffffffffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff2ffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffff2ffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff22ffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffff
    ffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fffffffffffffffff2ffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffff
    ffffffffffffffff2fffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffff2ffffffffffffffffffffffff2ffffffffffffffffffffffffffff
    fff2ffffff2ffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffff2fffffffffffffffff2ffffffffffffffffffffffffffffffffffff2ffffff
    fffffffffffffffffffffffffffffffffffffff2ffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffff7777777ffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffff
    ffff777777777fffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffff7777777fffff77777777ffffffffffffffffffff2fffffffffffffffffffffffffffffffffffff
    ffff777777777ffffff7777777fff2ffffffffffffffffffffffffffffffffffffffffffffffffffff77777777f77777777777ffffff2ffffffffffffffffffffff2ffffffffffffffffffffffffffff
    ffff77777777777ff777777777ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff77777f77777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff777777ff777777777fffffffffffffffff2fffff2fffff2fffffffffffffffffffffffffffff77777f777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff777777ff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444ffffffffffffffffffffffffffffffffffffff777777ffffffffffffffffff
    ffffffffff4444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444444444444444ffffffffffff2fffffffff777777fffffff777777fffffffff2ffffff2f
    fffffff44444444444444444fffffffffffffffffffffffffffffffffffffffff2ffffffffffffff444444444fff4444444444fffffffffffffffffffff77777777fff77777777ffffffffffffffffff
    fffffff44444444444fff444444ffffff2ffffffffffffffffffff777777ffffffffffffffffffff4444fff44fff4fff4fff444ffffffffffffffffffff77777777fff777fffffffffffffffffffffff
    fffff4444fff444444fff444444ffffffffffffff7777777ffffff777777ffffffffffffffffffff4444ffffffff4fffffff44444ffffffffffffff2ffffffff777fff777fffffffffffffffffffff2f
    fffff44445ff4444445ff444444ffffffffffffff777777777ff77777777fffffffffffffffffff44444ffff5f444ffff5ff44444fffffffffffffffffff444444444444444fffffffffffffffffffff
    fff444444fff444444fff444444ffffffffffffff777777777ff777fffffffffff2ffffffffffff4444444ffff44444fff44444444ffffffffffffffff44444444444444444444ffffffffffffffffff
    fff444444fff444444fff44444444ffffffffffffffffff777ff777ffffffffffffffffffffffff444444444444444444444444444ffffffffffffff444444444444444444444444ffffffffffffffff
    fff444444444444444fff44444444ffffffffffff4444444444444444fffffffffffffffffffff4444444444444444444444444444fffffffffffff44444fffffff444444444444444ffffff2fffffff
    fff444444444444444444444444444fffffff44444444444444444444444fffffffffffff2ffff4444444444444444444444444444ffffffff2fff44444ffffffff44444fffff444444fffffffffffff
    fff4444fff44444444444444444444ffffff444444444444444444fff44444444fffffffffffff444444ffffffffffff4444444444ffffffffffff44444ffffffff44444ffffff44444444ffffffffff
    fff4444fff44444444444444444444ffffff444444fff444444444fff44444444fffffffffffff444444ffffffffffffff44444444fffffffffff444444ffffffff44444ffffff444444444fffffffff
    fff4444ffffff555fff44444444444ffffff444444fff444444444fff44444444fffffffffffff444fffffffffffffffff44444444fffffffffff444444fff555fff444fffffff444444444fffffffff
    fff444444ffff555fff44444444444ffffff4444445ff4444444445ff44444444fffffffffffff444fff44444444444fff44444444fffffffffff444444fff555fff444fff555fff4444444fffffffff
    22f444444ffff555fff44444444444ff22f2444444fff444444444fff44444444f2f222ff2ff22444fff44444444444444444444442f2f22ff22f444444fff555fff444fff555fff4444444f2f22f22f
    `)
mySprite = sprites.create(img`
    .......ff...............
    ....ffff2ff.............
    ..ffeeeef2ff............
    .ffeeeeef22ff...........
    .feeeeffeeeef...........
    .fffffee2222ef..........
    fffe222ffffe2f..........
    ffffffffeeefff..........
    fefe44ebf44eef..........
    .fee4d4bfddef...........
    ..feee4dddee.c..........
    ...f2222eeddec222222....
    ...f444e44ddecddddd.....
    ...fffffeeee.c2222......
    ..ffffffff...c..........
    ..fff..ff...............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
mySprite.setPosition(0, 59)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(4)
controller.moveSprite(mySprite, 200, 200)
game.onUpdate(function () {
    if (info.score() > 310) {
        game.over(true, effects.confetti)
    }
})
game.onUpdateInterval(500, function () {
    monsters = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c 1 b b b 1 b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b 1 f f 1 c b b b b f . . . . 
        f f 1 f f 1 f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Enemy)
    monsters.setVelocity(-100, 0)
    monsters.setPosition(160, randint(8, 112))
    monsters = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff1111bff.......
        .......fb1111111bf......
        .......f111111111f......
        ......fd1111111ffff.....
        ......fd111dd1c111bf....
        ......fb11fcdf1b1bff....
        ......f11111bfbfbff.....
        ......f1b1bdfcffff......
        ......fbfbfcfcccf.......
        ......ffffffffff........
        .........ffffff.........
        .........ffffff.........
        .........fffffff..f.....
        ..........fffffffff.....
        ...........fffffff......
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    monsters.setVelocity(-100, 0)
    monsters.setPosition(160, randint(8, 112))
    monsters = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . c c c c c c 6 6 6 c c . . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `, SpriteKind.Enemy)
    monsters.setVelocity(-100, 0)
    monsters.setPosition(160, randint(8, 112))
})
game.onUpdateInterval(20000, function () {
    Helper = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        4 . . 3 3 3 3 4 4 4 4 4 4 . . 4 
        4 . 4 3 3 3 3 2 2 2 1 1 4 4 . 4 
        4 4 3 3 3 3 3 2 2 2 1 1 5 4 4 4 
        4 4 3 3 3 3 2 2 2 2 2 5 5 4 4 4 
        4 4 3 3 3 2 2 2 4 4 4 4 5 4 4 4 
        4 4 4 3 3 2 2 4 4 4 4 4 4 4 4 4 
        4 4 2 3 3 2 2 4 4 4 4 4 4 4 4 4 
        4 4 4 2 3 3 2 4 4 4 4 4 2 4 4 4 
        4 . 4 2 2 3 2 2 4 4 4 2 4 4 . 4 
        4 . . 4 2 2 2 2 2 2 2 2 4 . . 4 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Candy)
    Helper.setVelocity(-100, 0)
    Helper.setPosition(180, randint(8, 112))
})
