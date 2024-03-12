export class MinStack {
  private data: number[];
  private minNums: number[];

  constructor() {
    this.data = [];
    this.minNums = [];
  }

  push(val: number): void {
    this.data.push(val);
    const min =
      this.minNums.length === 0
        ? val
        : Math.min(this.minNums[this.minNums.length - 1], val);
    this.minNums.push(min);
  }

  pop(): void {
    this.data.pop();
    this.minNums.pop();
  }

  top(): number {
    return this.data[this.data.length - 1];
  }

  getMin(): number {
    return this.minNums[this.minNums.length - 1];
  }
}
