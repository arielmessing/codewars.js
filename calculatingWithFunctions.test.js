import { assert } from 'chai';
import { zero, one, two, three, 
    four, five, six, seven, 
    eight, nine, plus, minus, 
    times, dividedBy } from './calculatingWithFunctions.js';

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(seven(times    (five ())), 35);
    assert.strictEqual(four (plus     (nine ())), 13);
    assert.strictEqual(eight(minus    (three())),  5);
    assert.strictEqual(six  (dividedBy(two  ())),  3);
    assert.strictEqual(nine (dividedBy(eight())),  1);
    assert.strictEqual(one  (plus     (two  ())),  3);
  });
});
