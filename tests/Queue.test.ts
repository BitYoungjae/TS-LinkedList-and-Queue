import { Queue } from '../src/Queue';

describe('Core Tests', () => {
  it('enque deque front back isEmpty', () => {
    const queue = new Queue(1, 2, 3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);

    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(7);

    expect(queue.front).toBe(5);
    expect(queue.back).toBe(7);

    expect(queue.dequeue()).toBe(5);
    expect(queue.dequeue()).toBe(6);
    expect(queue.dequeue()).toBe(7);

    expect(queue.isEmpty).toBe(true);
  });
});
