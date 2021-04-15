function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, i, j) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }

  let pivot = arr[start];
  let swapIdx = start;

  // We assume the pivot is the first element
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

pivot([4, 6, 5, 8, 2, 1, 9, 5]);

function quickSort(arr, left = 0, right = arr.length - 1) {
  let pivotIndex = pivot(arr, left, right);
  // left
  quickSort(arr, left, pivotIndex - 1);
}
