const MySet = require('../solution');

const iterableObject = [1, 2, 3, 4];
const obj = {
  value: 42,
};

describe('класс MySet', () => {
  it('size выводит количество элементов', () => {

    const set = new MySet(iterableObject);

    expect(set.size).toBe(4);
  });

  it('работает в цикле for-of', () => {
    const set = new MySet(iterableObject);
    const checkArray = [];

    for (const item of set) {
      checkArray.push(item);
    }

    expect(checkArray).toEqual(iterableObject);
  });

  it('хранит только уникальные значения', () => {
    const notUniqIterableObject = [4, 8, 15, 15, 16, 23, 42];

    const set = new MySet(notUniqIterableObject);

    expect([...set]).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('метод keys выводит элементы', () => {
    const set = new MySet(iterableObject);

    expect(set.keys()).toEqual(iterableObject);
  });

  it('метод values выводит элементы', () => {
    const set = new MySet(iterableObject);

    expect(set.values()).toEqual(iterableObject);
  });

  it('метод entries выводит элементы', () => {
    const set = new MySet(iterableObject);

    expect(set.entries()).toEqual([[1, 1], [2, 2], [3, 3], [4, 4]]);
  });

  it('метод clear очищает данные', () => {
    const set = new MySet(iterableObject);

    set.clear();

    expect([...set]).toEqual([]);
  }); 

  it('метод add добавляет значение', () => {
    const set = new MySet();

    set.add(obj);

    expect([...set]).toContain(obj);
  });

  it('метод add работает по цепочке', () => {
    const set = new MySet();

    set.add(1).add(2).add(3);

    expect([...set]).toEqual([1, 2, 3]);
  });

  it('есть метод has', () => {
    const set = new MySet();

    set.add(obj);

    expect(set.has(obj)).toBeTruthy();
  });

  it('в строку преобразуется в виде [object ^_^]', () => {
    const set = new MySet();

    expect(String(set)).toBe('[object ^_^]');
  });

  it('в значение преобразуется в виде самого объекта', () => {
    const set = new MySet();

    expect(set.valueOf()).toEqual(set);
  });

  it('есть метод forEach', () => {
    const set = new MySet();
    const result = [];

    const object = {
      getValue () { return this.value; }
    };

    const data = {
      value: 42
    };

    set.add(object);

    set.forEach(function (value) {
      result.push(value.getValue.call(this));
    }, data);

    expect(result).toEqual([42]);
  });
});
