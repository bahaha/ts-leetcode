type Value = { ts: number; val: string };

export class TimeMap {
  private values: Map<string, Value[]>;
  constructor() {
    this.values = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    const nums = this.values.get(key);
    const val: Value = { ts: timestamp, val: value };
    if (!nums) {
      this.values.set(key, [val]);
    } else {
      nums.push(val);
    }
  }

  get(key: string, timestamp: number): string {
    const values = this.values.get(key);
    if (!values) return "";

    let val = "";
    let low = 0;
    let high = values.length;

    while (high > low) {
      const mid = low + Math.floor(low + (high - low) / 2);
      const candidate = values[mid];

      if (candidate.ts === timestamp) {
        return candidate.val;
      } else if (candidate.ts > timestamp) {
        high = mid;
      } else {
        low = mid + 1;
        val = candidate.val;
      }
    }
    return val;
  }
}
