import { Chess } from './lib/chess.js'

//var board = null
var game = new Chess()

function makeRandomMove() {
  var possibleMoves = game.moves()

  // exit if the game is over
  if (game.game_over()) return

  var randomIdx = Math.floor(Math.random() * possibleMoves.length)
  game.move(possibleMoves[randomIdx])

  console.log(game.fen());
  console.log(game.ascii());
  window.setTimeout(makeRandomMove, 500)
}


window.setTimeout(makeRandomMove, 500)