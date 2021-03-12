// returns true if the array is sorted either
// ascending and descending

function isSorted(arr) {
  let isAscending = true;
  let isDescending = true;
  for (let i = 1; i < arr.length; i++) {
    let v1 = arr[i - 1];
    let v2 = arr[i];

    // array is ascending
    if (v1 < v2) {
      isDescending = false;
    }

    // array is descending
    if (v1 > v2) {
      isAscending = false;
    }
  }

  if (!isAscending && !isDescending) {
    return "Array is not sorted";
  }

  return {
    isAscending,
    isDescending,
  };
}
