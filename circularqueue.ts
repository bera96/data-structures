class CircularQueue<T> {
  items: object;
  capacity: number;
  currentLength: number;
  front: number;
  rear: number;
  constructor(capacity: number) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  isFull(): boolean {
    return this.currentLength === this.capacity;
  }

  isEmpty(): boolean {
    return this.currentLength === 0;
  }

  enqueue(element: T): void {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue(): T | null {
    if (this.isEmpty()) return null;
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek(): T | null {
    if (!this.isEmpty()) return this.items[this.front];
    return null;
  }

  print(): void {
    if (this.isEmpty()) console.log("Queue is empty");
    let i: number;
    let str: string = "";
    for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
      str += this.items[i] + " ";
    }
    str += this.items[i];
    console.log(str);
  }
}