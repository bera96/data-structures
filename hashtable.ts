class HashTable<K extends { toString(): string }, V> {
  table: [K, V][] | [undefined];
  size: number;
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key: K): number {
    let hash = 0;
    const keyString = key.toString();
    for (let i = 0; i < keyString.length; i++) {
      hash += keyString.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key: K, value: V) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      (this.table[index] as [K, V][]).push([key, value]);
    } else {
      (this.table[index] as unknown as [K, V][]) = [[key, value]];
    }
    this.size++;
  }

  get(key: K) {
    const target = this._hash(key);
    if (this.table[target]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[target][i][0] === key) {
          return this.table[target][i][1];
        }
      }
    }
    return undefined;
  }

  remove(key: K) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }
}
