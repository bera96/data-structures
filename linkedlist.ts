namespace LinkedList {
  export class Node<T> {
    value: T;
    next: Node<T> | null;
    constructor(value: T) {
      this.value = value;
      this.next = null;
    }
  }

  export class LinkedList<T> {
    head: Node<T> | null;
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

    prepend(value: T): void {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }

    append(value: T): void {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        let prev = this.head;
        while (prev?.next) {
          prev = prev.next;
        }
        if (prev) {
          prev.next = node;
        }
      }
      this.size++;
    }

    insert(value: T, index: number): void {
      if (index < 0 || index > this.size) {
        return;
      }
      if (this.isEmpty()) {
        this.prepend(value);
      } else {
        const node = new Node(value);
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          if (prev && prev.next) {
            prev = prev.next;
          }
        }
        if (prev) {
          node.next = prev.next;
          prev.next = node;
          this.size++;
        }
      }
    }

    print() {
      if (this.isEmpty()) {
        console.log("List is empty");
      } else {
        let current = this.head;
        let listValues = "";
        while (current) {
          listValues += `${current.value}`;
          current = current.next;
        }
        console.log(listValues);
      }
    }
  }
}
