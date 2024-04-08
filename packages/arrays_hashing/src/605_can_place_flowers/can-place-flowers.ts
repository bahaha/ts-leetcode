// 1 0 0 1
// 0 1 0 | 0 0 0 0 0 | 0 1
// 0 | 0 1
//
// n: 6, p = 3
// n: 5, p = 3
// n: 4, p = 2
// n: 3, p = 2
// n: 2, p = 1
// n: 1, p = 1
//
// 3 0 0 0 0 0 0 6/2
// 3 0 0 0 0 0   5/2
// 2 0 0 0 0     4/2
// 2 0 0 0       3/2
// 1 0 0         2/2
// 1 0           1/2
//
// 2_0 > 1
// 3_0 > 1
// 4_0 > 1
// 5_0 > 2
export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  const availablePlots = new Array(flowerbed.length).fill(true);
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) {
      availablePlots[i] = false;
      if (i > 0) {
        availablePlots[i - 1] = false;
      }
      if (i + 1 < flowerbed.length) {
        availablePlots[i + 1] = false;
      }
    }
  }

  for (let i = 0; i < availablePlots.length; i++) {
    if (availablePlots[i]) {
      n--;
      if (i + 1 < availablePlots.length) {
        availablePlots[i + 1] = false;
      }
    }
    if (n === 0) return true;
  }

  return false;
}

export function canPlaceFlowers2(flowerbed: number[], n: number): boolean {
  for (let i = 0; i < flowerbed.length; i++) {
    const curr: number = flowerbed[i];
    const prev: number | undefined = flowerbed[i - 1];
    const next: number | undefined = flowerbed[i + 1];

    if (curr === 0 && !prev && !next) {
      flowerbed[i] = 1;
      n--;
    }

    if (n < 1) {
      return true;
    }
  }
  return false;
}
