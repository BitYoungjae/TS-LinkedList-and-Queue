import { LinkedList } from '../src/LinkedList';

describe('Core Tests', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>(1, 2, 3);
  });

  it('Insert to 0', () => {
    list.insert(7, 0);
    expect(list.size).toBe(4);
    expect(list.getNodeByIndex(1).value).toBe(7);

    list.insert(8, 0);
    expect(list.size).toBe(5);
    expect(list.getNodeByIndex(1).value).toBe(8);
  });

  it('Insert to list.size - 1', () => {
    list.insert(5, list.size - 1);
    expect(list.tail && list.tail.value).toBe(5);
  });

  it('remove from list.size - 1', () => {
    list.insert(5, list.size - 1);
    expect(list.remove(list.size - 1)).toBe(5);
  });

  it('remove from list.size - 1', () => {
    const arr = [...list];
    expect(arr.length).toBe(3);
    expect(arr[0]).toBe(1);
  });
});
