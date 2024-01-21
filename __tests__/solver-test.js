const { solvePuzzle, generateSudoku } = require('../src/solver');

describe('Sudoku Solver', () => {
    test('solvePuzzle should solve a valid puzzle', () => {
        const puzzle = [
            [5, 3, null, null, 7, null, null, null, null],
            [6, null, null, 1, 9, 5, null, null, null],
            [null, 9, 8, null, null, null, null, 6, null],
            [8, null, null, null, 6, null, null, null, 3],
            [4, null, null, 8, null, 3, null, null, 1],
            [7, null, null, null, 2, null, null, null, 6],
            [null, 6, null, null, null, null, 2, 8, null],
            [null, null, null, 4, 1, 9, null, null, 5],
            [null, null, null, null, 8, null, null, 7, 9]
        ];
        expect(solvePuzzle(puzzle, 0, 0)).toBe(true);
    });

    test('solvePuzzle should return false for an invalid puzzle', () => {
        const puzzle = [
            [5, 5, null, null, 7, null, null, null, null],
            [6, null, null, 1, 9, 5, null, null, null],
            [null, 9, 8, null, null, null, null, 6, null],
            [8, null, null, null, 6, null, null, null, 3],
            [4, null, null, 8, null, 3, null, null, 1],
            [7, null, null, null, 2, null, null, null, 6],
            [null, 6, null, null, null, null, 2, 8, null],
            [null, null, null, 4, 1, 9, null, null, 5],
            [null, null, null, null, 8, null, null, 7, 9]
        ];
        expect(solvePuzzle(puzzle, 0, 0)).toBe(false);
    });

    test('generateSudoku should generate a valid puzzle', () => {
        const puzzle = generateSudoku();
        expect(solvePuzzle(puzzle, 0, 0)).toBe(true);
    });
});