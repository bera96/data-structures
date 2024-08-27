namespace LinkedList {
  export class Node<T> {
    value: T;
    next: null;
    constructor(value: T) {
      this.value = value;
      this.next = null;
    }
  }

  export class LinkedList {
    head: null;
    size: number;
    constructor() {
      this.head = null;
      this.size = 0;
    }

    isEmpty(): boolean {
      return this.size === 0;
    }
    getSize(): number {
      return this.size;
    }
  }
}
