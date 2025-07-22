export function getQuickSortAnimations(array) {
  const animations = [];
  const arr = array.slice();

  quickSortHelper(arr, 0, arr.length - 1, animations);

  return animations;
}

function quickSortHelper(arr, low, high, animations) {
  if (low < high) {
    const pi = partition(arr, low, high, animations);
    quickSortHelper(arr, low, pi - 1, animations);
    quickSortHelper(arr, pi + 1, high, animations);
  }
}

function partition(arr, low, high, animations) {
  const pivot = arr[high];
  animations.push(["pivot", high]);
  let i = low - 1;

  for (let j = low; j < high; j++) {
    animations.push(["compare", j, high]);

    if (arr[j] < pivot) {
      i++;
      animations.push(["swap", i, j]);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  animations.push(["swap", i + 1, high]);
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
}
