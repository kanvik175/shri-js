module.exports = class {

  constructor(iterableObject) {
    this.items = [];

    if (iterableObject) {
      for (let value of iterableObject) {
        this.add(value);
      }
    }
  }

  add(value) {
    if (!this.items.includes(value)) {
      this.items.push(value);
    }

    return this;
  }

  get size() {
    return this.items.length;
  }

  * [Symbol.iterator]() {
    yield* this.items; 
  }

  keys() {
    return [...this.items];
  }

  values() {
    return [...this.items];
  }

  entries() {
    return this.items.map((item) => [item, item]);
  }

  clear() {
    this.items = [];
  }

  has(value) {
    return this.items.includes(value);
  }

  get [Symbol.toStringTag]() {
    return '^_^';
  }

  forEach(cb, context = this) {
    this.items.forEach(item => {
      cb.call(context, item, item);
    });
  }
};