// accepts the array and returns the total delta
// of array items

function sumDelta(arr) {
  let total = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let v1 = arr[i];
    let v2 = arr[i + 1];
    let delta = Math.abs(v1 - v2);
    total += delta;
  }
  return total;
}
