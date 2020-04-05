import { LinkedList } from './LinkedList';
export declare class Queue<T> {
    protected list: LinkedList<T>;
    constructor(...args: T[]);
    get size(): number;
    enqueue(value: T): void;
    dequeue(): T;
    get front(): T;
    get back(): T;
    get isEmpty(): boolean;
}
