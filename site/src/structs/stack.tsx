import { SimpleNode } from "./node";

export class Stack<T> {
  head: SimpleNode<T> | null;

  constructor() {
    this.head = null;
  }

  push(data: T) {
    if (!this.head) {
      this.head = new SimpleNode(data)
      return;
    }

    let newHead = new SimpleNode(data);
    newHead.next = this.head;
    this.head = newHead;
  }

  pop(): T | null {
    if (!this.head) {
      return null;
    }

    const data = this.head.data;
    this.head = this.head.next;
    return data;
  }

  clear() {
    this.head = null;
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
