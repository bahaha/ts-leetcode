export default class NestedInteger {
  value?: number | NestedInteger[];

  constructor(value?: number | NestedInteger[]) {
    this.value = value;
  }

  isInteger() {
    return typeof this.value === 'number' && Number.isFinite(this.value);
  }

  getInteger() {
    return this.value as number;
  }

  getList() {
    return this.isInteger() ? [] : (this.value as NestedInteger[]);
  }
}
