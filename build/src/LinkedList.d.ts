export declare class ListNode<T> {
    value: T;
    next?: ListNode<T>;
    constructor(value: T);
}
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
    get isEmpty(): boolean;
}
