import { LinkedList, ListNode } from './LinkedList';

export class Queue<T> {
  protected list: LinkedList<T>;

  constructor(...args: T[]) {
    this.list = new LinkedList(...args);
  }

  public get size(): number {
    return this.list.size;
  }

  public enqueue(value: T) {
    this.list.insert(value, this.size - 1);
  }

  public dequeue(): T {
    return this.list.remove(0);
  }

  public get front(): T {
    return (this.list.head as ListNode<T>).value;
  }

  public get back(): T {
    return (this.list.tail as ListNode<T>).value;
  }

  public get isEmpty(): boolean {
    return this.list.isEmpty;
  }

  public [Symbol.iterator](): Generator<T> {
    return this.list[Symbol.iterator]();
  }
}
