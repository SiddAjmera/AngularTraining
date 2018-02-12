export function Readonly(value) {
  return function (target, key) {
    Object.defineProperty(target, key, {
      set: () => target.key = value,
      get: () => value,
      configurable: false
    });
  }
}