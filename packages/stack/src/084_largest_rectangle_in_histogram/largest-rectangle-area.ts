type Area = {
  beginIndex: number;
  h: number;
};

export function largestRectangleArea(heights: number[]): number {
  let maxArea = 0;
  const areaCandidates: Area[] = [];
  const getTop = () => areaCandidates[areaCandidates.length - 1];

  for (let i = 0; i < heights.length; i++) {
    let latestBegin = i;
    while (areaCandidates.length && getTop().h > heights[i]) {
      const { beginIndex, h } = areaCandidates.pop()!;
      maxArea = Math.max(maxArea, (i - beginIndex) * h);
      latestBegin = beginIndex;
    }
    // height is higher than previous, area to stack
    areaCandidates.push({ beginIndex: latestBegin, h: heights[i] });
  }

  while (areaCandidates.length) {
    const { beginIndex, h } = areaCandidates.pop()!;
    maxArea = Math.max(maxArea, (heights.length - beginIndex) * h);
  }

  return maxArea;
}
