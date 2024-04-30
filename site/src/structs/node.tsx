export class SimpleNode<T> {
    data: T;
    next: SimpleNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

export class DoubleNode<T> {
    data: T;
    next: DoubleNode<T> | null;
    prev: DoubleNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
