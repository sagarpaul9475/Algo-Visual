export function getBubbleSortAnimations(arr) {
  const animations = [];
  const array = arr.slice();
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animations.push(["compare", j, j + 1]);
      if (array[j] > array[j + 1]) {
        animations.push(["swap", j, j + 1]);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return animations;
}
