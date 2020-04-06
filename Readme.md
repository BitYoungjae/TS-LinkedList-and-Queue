# TS-LinkedList-and-Queue

Typescript LinkedList and Queue

## Install

```shell
npm i ts-lists
```

## Import

```typescript
import { LinkedLIst, Queue } from 'ts-lists';
```

## Declarations

### LinkedList

```typescript
export declare class LinkedList<T> {
  private internalSize;
  private internalHead?;
  private internalTail?;
  constructor(...args: T[]);
  get head(): ListNode<T>;
  get tail(): ListNode<T>;
  set head(node: ListNode<T>);
  set tail(node: ListNode<T>);
  get size(): number;
  getNodeByIndex(index: number): ListNode<T>;
  remove(index: number): T;
  insert(value: T, index?: number): void;
  protected indexValidation(index: number): void;
  clear(): void;
  [Symbol.iterator](): Generator<T>;
  get isEmpty(): boolean;
}
```

### Queue

```typescript
export declare class Queue<T> {
  protected list: LinkedList<T>;
  constructor(...args: T[]);
  get size(): number;
  enqueue(value: T): void;
  dequeue(): T;
  get front(): T;
  get back(): T;
  get isEmpty(): boolean;
  [Symbol.iterator](): Generator<T>;
}
```

## Author

- name : Youngjae Joo
- email : bityoungjae@gmail.com
- homepage : https://bityoungjae.com
