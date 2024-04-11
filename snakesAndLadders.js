export class SnakesLadders {

    constructor() {
        const board = {
            2: 38, 
            7: 14,
            8: 31,
            15: 26,
            16: 6,
            21: 42,
            28: 84,
            36: 44,
            46: 25,
            49: 11,
            51: 67,
            62: 19,
            64: 60,
            71: 91,
            74: 53,
            78: 98,
            87: 94,
            89: 68,
            92: 88,
            95: 75,
            99: 80
        };

        this.players = [
            new Player('Player 1', board), 
            new Player('Player 2', board)];
            
        this.current = 0;

        this.gameOver = false;
    }
  
    play(die1, die2) {
        if (this.gameOver) {
            return 'Game over!';
        }

        const player = this.players[this.current];

        player.move(die1 + die2)

        if (die1 !== die2) {
            this.nextPlayer();
        }

        if (player.wins) {
            this.gameOver = true;
            return player.name + ' Wins!';
        }

        return player.name + " is on square " + player.position;
    }

    nextPlayer() {
        this.current = (this.current + 1) % this.players.length;
    }
}

class Player {
  constructor(name, board) {
    this.name = name;
    this.board = board;

    this.position = 0;
    this.wins = false;
  }

  move(steps) {
    this.position += steps;

    if (this.position === 100) {
        this.wins = true;
    }

    if (this.position > 100) {
        this.position = 100 - (this.position - 100);
    }

    if (this.board[this.position] !== undefined) {
        this.position = this.board[this.position];
    }

    return this.position;
  }
}