export function getGeneration(cells, generations) {
    let current = cells, next;

    for (let i = 0; i < generations; i++) {
        current = expand(current);
        next = play(current);
        current = trim(next);
    }

    return current;
}

function expand(cells) {
    const rows = cells.length;
    const columns = cells[0].length;

    let expanded = new Array(rows + 2);
    for (let i = 0; i < expanded.length; i++) {
        expanded[i] = new Array(columns + 2).fill(0);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            expanded[i + 1][j + 1] = cells[i][j];
        }
    }

    return expanded;
}

function play(cells) {
    const rows = cells.length;
    const columns = cells[0].length;
    
    let next = new Array(rows);
    for (let i = 0; i < next.length; i++) {
        next[i] = new Array(columns).fill(0);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const cell = cells[i][j];
            const neighbours = liveNeighbours(cells, i, j);

            if (cell) {

                if (neighbours < 2 || neighbours > 3) {
                    next[i][j] = 0;

                } else {
                    next[i][j] = 1;
                }

            } else if (neighbours === 3) {
                next[i][j] = 1;
            }
        }
    }

    return next;
}

function liveNeighbours(cells, i, j) {
    const rows = cells.length;
    const columns = cells[0].length;

    let liveNeighbours = 0;

    liveNeighbours += i === 0 ?                             0 : cells[i - 1][  j  ];
    liveNeighbours += i === 0 || j === columns - 1 ?        0 : cells[i - 1][j + 1];
    liveNeighbours += j === columns - 1 ?                   0 : cells[  i  ][j + 1];
    liveNeighbours += i === rows - 1 || j === columns - 1 ? 0 : cells[i + 1][j + 1];
    liveNeighbours += i === rows - 1 ?                      0 : cells[i + 1][  j  ];
    liveNeighbours += i === rows - 1 || j === 0 ?           0 : cells[i + 1][j - 1];
    liveNeighbours += j === 0               ?               0 : cells[  i  ][j - 1];
    liveNeighbours += i === 0 || j === 0 ?                  0 : cells[i - 1][j - 1];

    return liveNeighbours;
}

function trim(cells) {
    const rows = cells.length;
    const columns = cells[0].length;

    let minRow = rows, 
        maxRow = 0, 
        minColumn = columns, 
        maxColumn = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {

            if (cells[i][j]) {
                minRow      = minRow < i ?      minRow :    i;
                maxRow      = maxRow > i ?      maxRow :    i;
                minColumn   = minColumn < j ?   minColumn : j;
                maxColumn   = maxColumn > j ?   maxColumn : j;
            }
        }
    }

    let trimmed = cells.slice(minRow, maxRow + 1);

    for (let i = 0; i < trimmed.length; i++) {
        trimmed[i] = trimmed[i].slice(minColumn, maxColumn + 1);
    }

    return trimmed;
}