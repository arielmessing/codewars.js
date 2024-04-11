import { assert, config } from "chai";
import { SnakesLadders } from "./snakesAndLadders.js";

config.truncateThreshold = 0;

describe("Tests", () => {
    it("test", () => {
  var game = new SnakesLadders();
  assert.strictEqual(game.play(1, 1), "Player 1 is on square 38", "Should return: 'Player 1 is on square 38'");
  assert.strictEqual(game.play(1, 5), "Player 1 is on square 44", "Should return: 'Player 1 is on square 44'");
  assert.strictEqual(game.play(6, 2), "Player 2 is on square 31", "Should return: 'Player 2 is on square 31'");
  assert.strictEqual(game.play(1, 1), "Player 1 is on square 25", "Should return: 'Player 1 is on square 25'");
    });
  });