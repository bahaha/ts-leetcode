/**
 *  Given an integer array `nums` and an integer `k`, return the `k` *most frequent elements*.
 *  You may return the answer in any order.
 */
export function topKFrequent(nums: number[], k: number): number[] {
  const elementsCounting = countElementOccurs(nums);
  const countingBucket = makeBoundedBuckets(elementsCounting);

  const answer: number[] = [];
  takeFrequentElements(
    countingBucket,
    () => answer.length < k,
    (topElements) => answer.push(...topElements.slice(0, k - answer.length)),
  );

  return answer;
}

function takeFrequentElements(
  countingBucket: number[][],
  continueOn: () => boolean,
  consumer: (elements: number[]) => void,
) {
  for (let i = countingBucket.length - 1; i >= 0 && continueOn(); i--) {
    const topElements = countingBucket[i];
    if (topElements?.length > 0) {
      consumer(topElements);
    }
  }
}

function countElementOccurs(nums: number[]): Map<number, number> {
  const elementsCounting = new Map<number, number>();
  for (const num of nums) {
    elementsCounting.set(num, (elementsCounting.get(num) ?? 0) + 1);
  }
  return elementsCounting;
}

function makeBoundedBuckets(countingTable: Map<number, number>): number[][] {
  const bucket = new Array<number[]>(countingTable.size);
  countingTable.forEach((count, num) => {
    if (!bucket[count]) {
      bucket[count] = [];
    }
    bucket[count].push(num);
  });
  return bucket;
}
