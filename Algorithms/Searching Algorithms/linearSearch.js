function linearSearch(arr, val) {
  let index = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      index = i
    } else {
      continue
    }
  }
  return index
}
