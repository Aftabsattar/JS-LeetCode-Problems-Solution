function createCounter(a) {
    return {
      increment() {
        return ++a;
      },
      decrement() {
        return --a;
      },
      reset() {
        return a;
      },
    };
  }
  console.log([createCounter(1).increment(),createCounter(1).reset(),createCounter(1).decrement()])