// returns true if the array contains
// the given value

function contains(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

// returns true if the array is sorted in ascending order
// where each item is greater or equal to them item preceding

function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}
