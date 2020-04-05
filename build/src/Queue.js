"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
class Queue {
    constructor(...args) {
        this.list = new LinkedList_1.LinkedList(...args);
    }
    get size() {
        return this.list.size;
    }
    enqueue(value) {
        this.list.insert(value, this.size - 1);
    }
    dequeue() {
        return this.list.remove(0);
    }
    get front() {
        return this.list.head.value;
    }
    get back() {
        return this.list.tail.value;
    }
    get isEmpty() {
        return this.list.isEmpty;
    }
}
exports.Queue = Queue;
