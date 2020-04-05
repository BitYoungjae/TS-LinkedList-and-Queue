"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    constructor(value) {
        this.value = value;
    }
}
exports.ListNode = ListNode;
class LinkedList {
    constructor(...args) {
        this.internalSize = 0;
        for (const value of args) {
            this.insert(value, this.size - 1);
        }
    }
    get head() {
        if (!this.internalHead)
            throw new Error('Empty List');
        return this.internalHead;
    }
    get tail() {
        if (!this.internalTail)
            throw new Error('Empty List');
        return this.internalTail;
    }
    set head(node) {
        this.internalHead = node;
    }
    set tail(node) {
        this.internalTail = node;
    }
    get size() {
        return this.internalSize;
    }
    getNodeByIndex(index) {
        this.indexValidation(index);
        let targetIndex = index;
        let now = this.head;
        while (targetIndex !== 0) {
            const next = now.next;
            if (!next)
                break;
            now = next;
            targetIndex -= 1;
        }
        return now;
    }
    remove(index) {
        this.indexValidation(index);
        if (this.size === 1) {
            const value = this.head.value;
            this.clear();
            return value;
        }
        let value;
        switch (index) {
            case 0:
                value = this.head.value;
                const next = this.head.next;
                this.head = next;
                break;
            default:
                const foundBefore = this.getNodeByIndex(index - 1);
                const found = this.getNodeByIndex(index);
                value = found.value;
                if (!found.next) {
                    delete foundBefore.next;
                    this.tail = foundBefore;
                }
                else {
                    foundBefore.next = found.next;
                }
        }
        this.internalSize -= 1;
        return value;
    }
    insert(value, index = 0) {
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
                    if (tempNext)
                        node.next = tempNext;
                }
                if (this.size === 1)
                    this.tail = node;
                break;
            case this.size - 1:
                const tempTail = this.tail;
                this.tail = node;
                tempTail.next = node;
                break;
            default:
                const tempNode = this.getNodeByIndex(index);
                const tempNodeNext = tempNode.next;
                tempNode.next = node;
                if (tempNodeNext)
                    node.next = tempNodeNext;
                break;
        }
        this.internalSize += 1;
    }
    indexValidation(index) {
        if (!this.head)
            throw new Error('Empty List');
        if (index > this.size - 1 || index < 0)
            throw new Error(`Wrong Index : ${index}`);
    }
    clear() {
        delete this.head;
        delete this.tail;
        this.internalSize = 0;
    }
    get isEmpty() {
        return this.size === 0 ? true : false;
    }
}
exports.LinkedList = LinkedList;
