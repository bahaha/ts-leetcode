declare module 'NestedInteger' {
  export class NestedInteger {
    value?: number | NestedInteger;

    isInteger(): boolean;
    getInteger(): number;
    getList(): NestedInteger[];
  }
}
