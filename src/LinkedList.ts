export class ListNode<T> {
  public value: T;
  public next?: ListNode<T>;

  constructor(value: T) {
    this.value = value;
  }
}

export class LinkedList<T> {
  private internalSize: number = 0;
  private internalHead?: ListNode<T>;
  private internalTail?: ListNode<T>;

  public constructor(...args: T[]) {
    for (const value of args) {
      this.insert(value, this.size - 1);
    }
  }

  public get head(): ListNode<T> {
    if (!this.internalHead) throw new Error('Empty List');
    return this.internalHead;
  }

  public get tail(): ListNode<T> {
    if (!this.internalTail) throw new Error('Empty List');
    return this.internalTail;
  }

  public set head(node: ListNode<T>) {
    this.internalHead = node;
  }

  public set tail(node: ListNode<T>) {
    this.internalTail = node;
  }

  public get size(): number {
    return this.internalSize;
  }

  public getNodeByIndex(index: number): ListNode<T> {
    this.indexValidation(index);

    let targetIndex = index;
    let now: ListNode<T> = this.head as ListNode<T>;

    while (targetIndex !== 0) {
      const next = now.next;
      if (!next) break;
      now = next;
      targetIndex -= 1;
    }

    return now;
  }

  public remove(index: number): T {
    this.indexValidation(index);

    if (this.size === 1) {
      const value = (this.head as ListNode<T>).value;
      this.clear();
      return value;
    }

    let value: T;

    switch (index) {
      case 0:
        value = (this.head as ListNode<T>).value;
        const next = (this.head as ListNode<T>).next;
        this.head = next as ListNode<T>;
        break;
      default:
        const foundBefore = this.getNodeByIndex(index - 1);
        const found = this.getNodeByIndex(index);

        value = found.value;

        if (!found.next) {
          delete foundBefore.next;
          this.tail = foundBefore;
        } else {
          foundBefore.next = found.next;
        }
    }

    this.internalSize -= 1;
    return value;
  }

  public insert(value: T, index = 0): void {
    const node = new ListNode(value);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
      this.internalSize = 1;

      return;
    }

    this.indexValidation(index);

    switch (index) {
      case 0:
        if (this.head) {
          const tempNext = this.head.next;
          this.head.next = node;
          if (tempNext) node.next = tempNext;
        }

        if (this.size === 1) this.tail = node;

        break;
      case this.size - 1:
        const tempTail = this.tail as ListNode<T>;
        this.tail = node;
        tempTail.next = node;
        break;
      default:
        const tempNode = this.getNodeByIndex(index);
        const tempNodeNext = tempNode.next;
        tempNode.next = node;

        if (tempNodeNext) node.next = tempNodeNext;
        break;
    }

    this.internalSize += 1;
  }

  protected indexValidation(index: number): void {
    if (!this.head) throw new Error('Empty List');
    if (index > this.size - 1 || index < 0)
      throw new Error(`Wrong Index : ${index}`);
  }

  public clear(): void {
    delete this.head;
    delete this.tail;
    this.internalSize = 0;
  }

  public get isEmpty(): boolean {
    return this.size === 0 ? true : false;
  }
}
