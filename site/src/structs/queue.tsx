import { SimpleNode } from "./node";

export class Queue<T> {
  head: SimpleNode<T> | null;
  tail: SimpleNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data: T) {
    if (!this.head || !this.tail) {
      this.head = new SimpleNode(data);
      this.tail = this.head;
      return;
    }

    let newTail = new SimpleNode(data);
    this.tail.next = newTail;
    this.tail = newTail;
  }

  dequeue(): T | null {
    if (!this.head || !this.tail) {
      return null;
    }

    const data = this.head.data;
    this.head = this.head.next;
    return data;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  find(predicate: (data: T) => boolean): T | null {
    let current = this.head;
    while (current) {
      if (predicate(current.data)) {
        return current.data;
      }
      current = current.next;
    }
    return null;
  }

  toArray(): Array<T> {
    const arr: Array<T> = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
}
