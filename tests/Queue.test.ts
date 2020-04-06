import { Queue } from '../src/Queue';

describe('Core Tests', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue(1, 2, 3);
  });

  it('enque deque front back isEmpty', () => {
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

  it('iterator', () => {
    const arr = [...queue];
    expect(arr.length).toBe(3);
    expect(arr[0]).toBe(1);
  });
});
