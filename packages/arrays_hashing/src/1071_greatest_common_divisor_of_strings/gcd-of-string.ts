// ABCABC ABC len: 6, 3, possible len(gcd) = 3, 1
// ABC
//
// ABABAB ABAB len: 6, 4, possible len(gcd)= 2, 1
// AB
//
// LEET CODE len: 4, 4, possible len(gcd)= 4, 2, 1
//
export function gcdOfStrings(str1: string, str2: string): string {
  const shorterWord = str1.length > str2.length ? str2 : str1;
  const longerWord = shorterWord === str1 ? str2 : str1;

  let gcd = "";
  for (let i = shorterWord.length; i > 0; i--) {
    if (isFloat(longerWord.length / i) || isFloat(shorterWord.length / i)) {
      continue;
    }
    const gcdCandidate = shorterWord.slice(0, i);
    if (
      isRepeatedBy(longerWord, gcdCandidate) &&
      isRepeatedBy(shorterWord, gcdCandidate)
    ) {
      gcd = gcdCandidate;
      break;
    }
  }

  return gcd;
}

function isRepeatedBy(str: string, base: string): boolean {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== base[i % base.length]) {
      return false;
    }
  }

  return true;
}

function isFloat(num: number): boolean {
  return num % 1 !== 0;
}
