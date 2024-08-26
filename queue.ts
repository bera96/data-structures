class Queue<T> {
  items: object;
  rear: number;
  front: number;
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element: T): void {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue(): T {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty(): boolean {
    return this.rear - this.front === 0;
  }

  peek(): T {
    return this.items[this.front];
  }

  size(): number {
    return this.rear - this.front;
  }

  print(): void {
    console.log(this.items);
  }
}