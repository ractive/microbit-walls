input.onButtonPressed(Button.B, function () {
    player.move(1)
})
input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
let deleted: game.LedSprite[] = []
let wall: game.LedSprite[] = []
let player: game.LedSprite = null
let sleep = 700
player = game.createSprite(1, 4)
player.set(LedSpriteProperty.Blink, 200)
let counter = 0
let walls: game.LedSprite[][] = []
while (true) {
    if (walls.length > 0 && walls[0][0].get(LedSpriteProperty.Y) == 4) {
        wall = walls[0]
        for (let brick of wall) {
            brick.delete()
        }
        deleted = walls.shift()
    }
    for (let wall2 of walls) {
        for (let brick2 of wall2) {
            brick2.move(1)
            if (brick2.isTouching(player)) {
                game.gameOver()
            }
        }
    }
    if (counter % 3 == 0) {
        wall = [game.createSprite(Math.randomRange(0, 4), 0), game.createSprite(Math.randomRange(0, 4), 0), game.createSprite(Math.randomRange(0, 4), 0), game.createSprite(Math.randomRange(0, 4), 0)]
        for (let brick3 of wall) {
            brick3.turn(Direction.Right, 90)
        }
        walls.push(wall)
        if (counter % 30 == 0) {
            game.addScore(1)
            sleep += -50
        }
    }
    counter += 1
    basic.pause(sleep)
}
basic.forever(function () {
	
})
