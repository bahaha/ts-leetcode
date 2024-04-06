// type Coordinate = string; // in format of x,y
//
// function toCoordinate(row: number, col: number) {
//   return `${row},${col}`;
// }
//
function parseBoard(board: string[][]) {
  const boardLetters = new Map<string, number>();

  function getLetterCount(letter: string) {
    return boardLetters.get(letter) ?? 0;
  }

  for (const row of board) {
    for (const letter of row) {
      boardLetters.set(letter, getLetterCount(letter) + 1);
    }
  }

  return { getLetterCount };
}

function parseWord(word: string): IterableIterator<[string, number]> {
  const wordLetters = new Map<string, number>();

  function getLetterCount(letter: string) {
    return wordLetters.get(letter) ?? 0;
  }

  for (const letter of word) {
    wordLetters.set(letter, getLetterCount(letter) + 1);
  }

  return wordLetters.entries();
}

export function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  // Refactor: use board as the visited record table
  // const visitCharacters = new Set<Coordinate>();

  // Refactor: check board characters
  const { getLetterCount: getLetterCountOfBoard } = parseBoard(board);
  for (const [letter, count] of parseWord(word)) {
    if (getLetterCountOfBoard(letter) < count) {
      return false;
    }
  }

  // check the word from the least occur letters from head or tail
  const [startPos, nextLetter]: [number, (i: number) => number] =
    getLetterCountOfBoard(word[0]) <=
    getLetterCountOfBoard(word[word.length - 1])
      ? [0, (i) => i + 1]
      : [word.length - 1, (i) => i - 1];

  function walk(row: number, col: number, i: number): boolean {
    // out of bound in the recursive call stack means match all the letters
    if (i < 0 || i >= word.length) return true;

    // const coordinate = toCoordinate(row, col);
    const outOfBoard = row < 0 || col < 0 || row >= rows || col >= cols;
    // const isVisited = () => visitCharacters.has(coordinate);
    const notMatchCharacter = () => word[i] !== board[row][col];

    // if (outOfBoard() || isVisited() || notMatchCharacter()) {
    // Refactor: use board as the visited record table
    if (outOfBoard || notMatchCharacter()) {
      return false;
    }

    // visitCharacters.add(coordinate);
    board[row][col] = "";
    const matches = directions.some(([rowOffset, colOffset]) =>
      walk(row + rowOffset, col + colOffset, nextLetter(i)),
    );
    // visitCharacters.delete(coordinate);
    board[row][col] = word[i];
    return matches;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (walk(row, col, startPos)) return true;
    }
  }

  return false;
}
