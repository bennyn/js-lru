declare module 'lru-fast' {
  export class LRUCache {
    constructor(limit: number);
    public put: (key: any, value: any) => void;
    public get: (key: any) => any;
  }
}
