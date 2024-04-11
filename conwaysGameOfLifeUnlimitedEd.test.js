import { assert, config } from 'chai';
import { getGeneration } from './conwaysGameOfLifeUnlimitedEd.js';

config.truncateThreshold = 0;

const { fail, deepEqual } = assert;

describe('Sample tests', function () {

    function htmlize(matrix) {
        return matrix.map(
            row => row.map(x => ({0 : '░░', 1: '▓▓'})[x] ?? '??').join('')
        ).join('\n');
    }

    function doTest(input, generations, expected) {
      const inputCopy = input.map(row => row.slice());
      const actual = getGeneration(inputCopy, generations);
      if (!Array.isArray(actual) || !actual.every(Array.isArray))
          fail('you must return a 2D array, but you returned: ' + actual);
   
      const message =
        `for universe:\n${htmlize(input)}\nafter ${generations} generations,` +
        ` expected:\n${htmlize(expected)}\n but got:\n${htmlize(actual)}\n\n`
       ;
      deepEqual(actual, expected, message);
      deepEqual(inputCopy, input, '\n=== DO NOT MUTATE THE INPUT MATRIX ! ===\n');
    }
  
    it('Single Glider \n', function () {
      doTest([
        [1, 0, 0],
        [0, 1, 1],
        [1, 1, 0]
      ], 2, [
        [1, 0, 1],
        [0, 1, 1],
        [0, 1, 0]
      ]);
    });
  });