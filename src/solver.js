function generateSudoku() {
    let grid = Array(9).fill(null).map(() => Array(9).fill(null));

    function fillGrid(row, col) {
        if (row === 9) {
            return true;
        }

        if (col === 9) {
            return fillGrid(row + 1, 0);
        }

        let nums = Array(9).fill(null).map(i => i + 1);
        nums = nums.sort(() => Math.random() - 0.5);

        for (let num of nums) {
            if (isValidNum(grid, row, col, num)) {
                grid[row][col] = num;
                if (fillGrid(row, col + 1)) {
                    return true;
                }
                grid[row][col] = null;
            }
        }

        return false;
    }

    fillGrid(0, 0);
    return grid;
}

function isValidNum(puzzle, row, col, num) {
    let notInRow = !Array.from(puzzle[row]).includes(num);
    let notInCol = !puzzle.map(row => row[col]).includes(num);
    let notInBox = true;
    for (let i = Math.floor(row / 3) * 3; i < Math.floor(row / 3) * 3 + 3; i++) {
        for (let j = Math.floor(col / 3) * 3; j < Math.floor(col / 3) * 3 + 3; j++) {
            if (puzzle[i][j] === num) {
                notInBox = false;
                break;
            }
        }
        if (!notInBox) break;
    }
    return notInRow && notInCol && notInBox;
}

function solvePuzzle(puzzle, row, col) {
    if (row === 9) {
        return true;
    } else if (col === 9) {
        return solvePuzzle(puzzle, row + 1, 0);
    } else if (puzzle[row][col] !== null) {
        return solvePuzzle(puzzle, row, col + 1);
    } else {
        for (let num = 1; num < 10; num++) {
            if (isValidNum(puzzle, row, col, num)) {
                puzzle[row][col] = num;
                if (solvePuzzle(puzzle, row, col + 1)) {
                    return true;
                }
                puzzle[row][col] = null;
            }
        }
    }
    return false;
}

let puzzle = generateSudoku();
solvePuzzle(puzzle, 0, 0);

module.exports = { solvePuzzle, generateSudoku }