# Searching Algorithms

## Linear Search

- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found, return -1

Big O:
| Best | Average | Worst |
|------|---------|-------|
| O(1) | O(n) | O(n) |

## Binary Search

- Binary search is a much faster form of search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- Binary search only works on sorted arrays!

- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer:
  - Create a pointer in the middle
  - If you find the value you want, return the index
  - If the value is too small, move the left pointer up
  - If the value is too large, move the right pointer down
- If you never find the value, return -1

Big O:
| Best | Average | Worst |
|------|---------|-------|
| O(1) | O(logn) |O(logn)|

## Naive String Search

- Loop over the longer string
- Loop over the shorter string
- If the characters don't match, break out of the inner loop
- If the characters do match, keep - going
- If you complete the inner loop and find a match, increment the count of matches
- Return the count
