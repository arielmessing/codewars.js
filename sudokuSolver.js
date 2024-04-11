export function sudoku(puzzle) {

    let allOptions = new Array(9);

    for (let row = 0; row < 9; row++) {

        let allOptionsRow = new Array(9);
        allOptions[row] = allOptionsRow;

        for (let column = 0; column < 9; column++) {

            let options;

            if (puzzle[row][column] === 0) {

                options = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

                for (let i = 0; i < 9; i++) {
                    if (i !== row)
                        options.delete(puzzle[i][column]);
                }

                for (let j = 0; j < 9; j++) {
                    if (j !== column)
                        options.delete(puzzle[row][j]);
                }

                const boxStartRow = parseInt(row / 3) * 3;
                const boxStartColumn = parseInt(column / 3) * 3;
                for (let i = boxStartRow; i < boxStartRow + 3; i++) {
                    for (let j = boxStartColumn; j < boxStartColumn + 3; j++) {
                        if (i !== row && j !== column)
                            options.delete(puzzle[i][j]);
                    }
                }

            } else {
                options = new Set();
            }

            allOptions[row][column] = options;
        }
    }

    let solved = false;

    while (! solved) {

        solved = true;

        for (let row = 0; row < 9; row++) {
            for (let column = 0; column < 9; column++) {

                if (allOptions[row][column].size === 1) {
                    solved = false;

                    let value = allOptions[row][column].values().next().value;

                    puzzle[row][column] = value;
                    allOptions[row][column].delete(value);

                    for (let i = 0; i < 9; i++) {
                        if (i !== row)
                            allOptions[i][column].delete(value);
                    }
    
                    for (let j = 0; j < 9; j++) {
                        if (j !== column)
                            allOptions[row][j].delete(value);
                    }

                    const boxStartRow = parseInt(row / 3) * 3;
                    const boxStartColumn = parseInt(column / 3) * 3;
                    for (let i = boxStartRow; i < boxStartRow + 3; i++) {
                        for (let j = boxStartColumn; j < boxStartColumn + 3; j++) {
                            if (i !== row && j !== column)
                                allOptions[i][j].delete(value);
                        }
                    }
                }
            }
        }
    }

    return puzzle;
}