export default class Super {
  debounce(callback, interval) {
    let debounceTimeoutId;

    return (...args) => {
      clearTimeout(debounceTimeoutId);
      debounceTimeoutId = setTimeout(() => callback.apply(this, args), interval);
    };
  }
}
