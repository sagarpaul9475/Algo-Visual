export function getSelectionSortAnimations(arr) {
  const animations = [];
  const array = arr.slice();

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      animations.push(["compare", minIndex, j]);

      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      animations.push(["swap", i, minIndex]);
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return animations;
}
