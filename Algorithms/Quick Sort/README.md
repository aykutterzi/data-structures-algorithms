# Quick Sort

- Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
- Pick an element in the array and designate it as the "pivot". While there are quite a few options for choosing the pivot. We'll make things simple to start, and will choose the pivot as the first element. This is not an ideal choice, but it makes the algorithm easier to understand for now.
- Next, compare every other element in the array to the pivot.
  - If it's less than the pivot value, move it to the left of the pivot.
  - If it's greater, move it to the right.
- Once you have finished comparing, the pivot will be in the right place
- Next, recursively call quicksort again with the left and right halves from the pivot until the array is sorted
- In order to implement quick sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
- Given an array, this helper function should designate an element as the pivot
- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
- The order of elements on either side of the pivot doesn't matter!
- The helper should do this in place, that is, it should not create a new array
- When complete, the helper should return the index of the pivot
- The runtime of quick sort depends in part on how one selects the pivot
- Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
- For simplicity, we can choose the pivot to be the first element but it has disadvantages.

Pivot Pseudocode:

- It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
- Grab the pivot from the start of the array
  - Store the current pivot index in a variable (this will keep track of where the pivot should end up)
- Loop through the array from the start until the end
- If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
- Swap the starting element (i.e. the pivot) with the pivot index
- Return the pivot index

Quicksort Pseudocode:

- Call the pivot helper on the array
- When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
- Your base case occurs when you consider a subarray with less than 2 elements

Big O:

| Best     | Average  | Worst  |
| -------- | -------- | ------ |
| O(nlogn) | O(nlogn) | O(n^2) |
