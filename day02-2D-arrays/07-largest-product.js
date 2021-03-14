function largestProduct(arr) {
	let largest = arr[0][0] * arr[0][1];
	let row1 = 0;
	let col1 = 0;
	let row2 = 0;
	let col2 = 1;

	// returns the value of the item in a 2d array
	// for the given column and row. Or, returns a default
	// value if the row or column is out of bounds -> (zero)
	function getCell(aa, row, col) {
		if (row < 0 || col < 0) {
			return 0;
		}
		if (row >= aa.length) {
			return 0;
		}
		if (col >= aa[row].length) {
			return 0;
		}
		return aa[row][col];
	}

	function updateLargest(r1, c1, r2, c2) {
		let value = getCell(arr, r1, c1);
		let otherValue = getCell(arr, r2, c2);
		if (value * otherValue > largest) {
			largest = value * otherValue;
			row1 = r1;
			col1 = c1;
			row2 = r2;
			col2 = c2;
		}
	}

	for (let row = 0; row < arr.length; row++) {
		for (let col = 0; col < arr[row].length; col++) {
			updateLargest(row, col, row, col + 1); // right
			updateLargest(row, col, row, col - 1); // left
			updateLargest(row, col, row - 1, col); // top
			updateLargest(row, col, row + 1, col); // bottom
		}
	}
	console.log(arr[row1][col1], "*", arr[row2][col2], "=", largest);
	return largest;
}

const aa = [
	[32, 45, 67, 81],
	[21, 42, 11, 16],
	[45, 9, 6, 102],
	[104, 105, 106, 107],
];

largestProduct(aa);
