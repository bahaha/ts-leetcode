/**
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be
 * validated **according to the following rules**:
 *
 * 1. Each row must contain the digits 1-9 without repetition.
 * 2. Each column must contain the digits 1-9 without repetition.
 * 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1 - 9 without repetition.
 *
 * Note:
 * - A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * - Only the filled cells need to be validated according to the metioned rules.
 */
export function isValidSudoku(board: string[][]): boolean {
  const rows = new Array(9).fill(null).map(() => new Set<number>());
  const cols = new Array(9).fill(null).map(() => new Set<number>());
  const blocks = new Array(9).fill(null).map(() => new Set<number>());

  for (let row = 0; row < board.length; row++) {
    const rowValues = board[row];
    for (let col = 0; col < rowValues.length; col++) {
      const value = board[row][col];
      if (value === ".") {
        continue;
      }

      const numValue = +value;
      if (rows[row].has(numValue)) return false;
      rows[row].add(numValue);

      if (cols[col].has(numValue)) return false;
      cols[col].add(numValue);

      const blockIndex = getBlockIndex(row, col);
      if (blocks[blockIndex].has(numValue)) return false;
      blocks[blockIndex].add(numValue);
    }
  }

  return true;
}

function getBlockIndex(row: number, col: number) {
  return Math.floor(row / 3) * 3 + Math.floor(col / 3);
}
